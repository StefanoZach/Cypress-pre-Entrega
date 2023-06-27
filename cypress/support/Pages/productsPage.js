export class ProductsPage {

    constructor() {
        this.goShoppingCart = "#goShoppingCart";
        this.closeModal = '#closeModal';
    };

    clickShoppingCart() {
        cy.get(this.goShoppingCart).click();
    };

    addProduct(productStr) {
        cy.xpath(`//*[@id="${productStr}"]`).click();
        cy.get(this.closeModal).click();
    };
};