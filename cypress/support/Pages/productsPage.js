export class ProductsPage {

    constructor() {
        this.goShoppingCart = "#goShoppingCart";
        this.closeModal = '#closeModal';
    };

    addProduct(productStr) {
        cy.xpath(`//*[@id="${productStr}"]`).click();
        cy.get(this.closeModal).click();
    };

    clickShoppingCart() {
        cy.get(this.goShoppingCart).click();
    };

   
};