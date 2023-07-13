/// <reference types ="cypress" />

import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/productsPage";
import { ShoppingCartPage } from "../support/Pages/shoppingCartPage";
import { CheckOutPage } from "../support/Pages/checkOutPage";
import { ReciptPage } from "../support/Pages/reciptPage";

describe('entrega final', () => {
    let product;
    let infoCheckOut;
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    const checkOut = new CheckOutPage();
    const reciptPage = new ReciptPage();

    before('fixtures', () => {
        cy.fixture('products').then(products => {
            product = products
        });
        cy.fixture('checkoutData').then(checkOutData => {
            infoCheckOut = checkOutData
        });
    });

    beforeEach('login in', () => {
        cy.log('Test suite begins')
        cy.request({
            url: 'https://pushing-it.onrender.com/api/register',
            method: "POST",
            body: {
                username: "StefanoZach123",
                password: "12346!$%",
                gender: "Male",
                day: "26",
                month: "10",
                year: "1995",
            },
        }).then(response => {
            expect(response.status).is.equal(200);
        });

        cy.request({
            url: 'https://pushing-it.onrender.com/api/login',
            method: "POST",
            body: {
                username: "StefanoZach123",
                password: "12346!$%",
            },
        }).then(response => {
            window.localStorage.setItem('token', response.body.token);
            window.localStorage.setItem('user', response.body.user.username);
            expect(response.status).is.equal(200);
        });

        cy.visit('/');
    });

    it('Suite', () => {
        cy.log('Test')
        homePage.clickOnlineShop();
        productsPage.addProduct(product.id.tshirt);
        productsPage.addProduct(product.id.pants);
        productsPage.clickShoppingCart();
        shoppingCartPage.verifyProductsName(product.productOne.name).should('have.text', product.productOne.name);
        shoppingCartPage.verifyProductsPrice(product.productOne.name).should('have.text', product.productOne.price);
        shoppingCartPage.verifyProductsName(product.productTwo.name).should('have.text', product.productTwo.name);
        shoppingCartPage.verifyProductsPrice(product.productTwo.name).should('have.text', product.productTwo.price);
        shoppingCartPage.clickShowPrice();
        shoppingCartPage.checkTotalPrice().should('contain', 35);
        checkOut.goCheckOut();
        checkOut.getName(infoCheckOut.name);
        checkOut.getLastName(infoCheckOut.lastname);
        checkOut.getCreditCard(infoCheckOut.creditcard);
        checkOut.goPurchase();
        cy.wait(10000);
        reciptPage.verifyName().should('contain', 'Stefano Zach');
        reciptPage.verifyProductOne().should('have.text', product.productOne.name);
        reciptPage.verifyProductTwo().should('have.text', product.productTwo.name);
        reciptPage.verifyCreditCard().should('have.text', infoCheckOut.creditcard);
        reciptPage.verifyTotalPrice().should('contain', 35);
        reciptPage.clickThankYou();
    });

    after('Suite ends', () => {
        cy.request({
            url: "https://pushing-it.onrender.com/api/deleteuser/StefanoZach123",
            method: "DELETE",
            body: {
                username: "StefanoZach123",
                password: "12346!$%"
            },
        }).then(response => {
            expect(response.status).is.equal(200);
        });
        cy.log('Test suite ends');
    });
});
