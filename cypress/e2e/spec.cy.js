/// <reference types ="cypress" />

import { LoginPage } from "../support/Pages/logInPage";
import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/productsPage";
import { ShoppingCartPage } from "../support/Pages/shoppingCartPage";
import { LandingPage } from "../support/Pages/landingPage";

describe('template spec', () => {
  let loginData;
  let prod;
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
      prod = products
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
    productsPage.addProduct('blacktshirt');
    productsPage.addProduct('whitepants');
    productsPage.clickShoppingCart();
    shoppingCartPage.verifyProductsName(prod.productOne.name).should('have.text', 'Black T-Shirt');
    shoppingCartPage.verifyProductsPrice(prod.productOne.name).should('have.text', '$15');
    shoppingCartPage.verifyProductsName(prod.productTwo.name).should('have.text', 'White Pants');
    shoppingCartPage.verifyProductsPrice(prod.productTwo.name).should('have.text', '$20');
    shoppingCartPage.clickShowPrice();
  });
});