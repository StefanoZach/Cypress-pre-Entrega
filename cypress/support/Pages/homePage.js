export class HomePage {
    
    clickOnlineShop() {
        cy.get('#onlineshoplink', {timeout : 50000}).click();
    };
};