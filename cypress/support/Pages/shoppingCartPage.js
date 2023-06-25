let prod;
export class ShoppingCartPage {

    constructor() {
        before('fixtures', () => {
            cy.fixture('products').then(products => {
                prod = products

            });

        });
    }

    clickShoppingCart() {
        cy.get('#goShoppingCart').click()
    }

    verifyProductsName() {
        cy.get('#productName').should('have.text', prod.productOne.name)
        cy.xpath('//*[@id="productName"]').eq([1]).should('have.text', prod.productTwo.name)


    }

    verifyProductsPrice() {
        cy.get('#productPrice').should('have.text', prod.productOne.price)
        cy.xpath('//*[@id="productPrice"]').eq([1]).should('have.text', prod.productTwo.price)
    }

    clickShowPrice(){
        cy.get('button').contains('Show total price').click()
    }

    checkTotalPrice(){
        cy.get('.css-1g7ucpo').should('have.text', 'Total $35')
    }


}