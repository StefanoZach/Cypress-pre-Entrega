/// <reference types ="cypress" />

import { LoginPage } from "../support/Pages/logInPage";
import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/productsPage";
import { ShoppingCartPage } from "../support/Pages/shoppingCartPage";
import { LandingPage } from "../support/Pages/landingPage";

describe('template spec', () => {
  let loginData;
  let product;

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
  const landingPage = new LandingPage();

  before('fixtures', () => {
    cy.fixture("loginData").then(logIn => {
      loginData = logIn
    });
    cy.fixture('products').then(products => {
      product = products
    });
  });

  beforeEach('login in', () => {
    cy.log('Test suite begins')
    cy.visit('/')
    landingPage.dblclickRegisterToggle();
    loginPage.loginUser(loginData.user);
    loginPage.loginPass(loginData.pass);
    loginPage.submitForm();
  });

  it('Suite', () => {
    homePage.clickOnlineShop();
    productsPage.addProduct(product.id.tshirt);
    productsPage.addProduct(product.id.pants);
    productsPage.clickShoppingCart();
    shoppingCartPage.verifyProductsName(product.productOne.name).should('have.text', product.productOne.name);
    shoppingCartPage.verifyProductsPrice(product.productOne.name).should('have.text', product.productOne.price);
    shoppingCartPage.verifyProductsName(product.productTwo.name).should('have.text', product.productTwo.name);
    shoppingCartPage.verifyProductsPrice(product.productTwo.name).should('have.text', product.productTwo.price)
    shoppingCartPage.clickShowPrice();
    shoppingCartPage.checkTotalPrice().should('have.text', 35)
  });
});