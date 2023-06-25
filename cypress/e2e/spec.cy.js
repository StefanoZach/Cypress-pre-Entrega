/// <reference types ="cypress" />

import { LoginPage } from "../support/Pages/logInPage";
import { HomePage } from "../support/Pages/homePage";
import { ProductsPage } from "../support/Pages/productsPage";
import { ShoppingCartPage } from "../support/Pages/shoppingCartPage";
import { LandingPage } from "../support/Pages/landingPage";

describe('template spec', () => {
  let loginData;

  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
  const landingPage = new LandingPage();

  before('fixtures', () => {
    cy.fixture("loginData").then(logIn => {
      loginData = logIn
    });
    
  });

  beforeEach('login in', () => {
    cy.log('Test suite begins')
    cy.visit('/')
    landingPage.dblclickRegisterToggle();
    loginPage.loginUser(loginData.user);
    loginPage.loginPass(loginData.pass);
    loginPage.submitForm();
  })

  it('Suite', () => {
    homePage.clickOnlineShop();
    productsPage.addProduct(["//button[@id='blacktshirt']", "//button[@id='whitepants']"])
    shoppingCartPage.clickShoppingCart()
    shoppingCartPage.verifyProductsName();
    shoppingCartPage.verifyProductsPrice();
    shoppingCartPage.verifyProductsName();
    shoppingCartPage.verifyProductsPrice();
    shoppingCartPage.clickShowPrice();
    shoppingCartPage.checkTotalPrice();

  });

});