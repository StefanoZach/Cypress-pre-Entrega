export class ProductsPage {

    addProduct(products) {
        for (let product = 0; product < products.length; product++) {
            cy.xpath(products[product]).click()
            cy.get('#closeModal').click()


        }
    }
}