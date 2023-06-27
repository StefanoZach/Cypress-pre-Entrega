export class ShoppingCartPage {

    constructor() {
        this.button = 'button'
        this.showTotalPrice = 'Show total price'
    }
      verifyProductsName(productName) {
        return cy.get(`[name="${productName}"]`);
     };
    verifyProductsPrice(productName)  {
       return cy.get(`[name="${productName}"]`).siblings('#productPrice');
    };

    clickShowPrice() {
        cy.get(this.button).contains(this.showTotalPrice).click();
    };

    checkTotalPrice() {
        cy.get('.css-1g7ucpo');
    };
};