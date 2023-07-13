export class CheckOutPage {
    constructor(){
        this.button = "/html/body/div[1]/div/div[2]/div[3]/div/button";
        this.name = "#FirstName";
        this.lastname = "#lastName";
        this.creditCard = "#cardNumber";
        this.purchaseButton = "/html/body/div[1]/div/div[2]/div[2]/form/div/div[4]/button[1]";
    };

    goCheckOut(){
        cy.xpath(this.button).click();
    };
    
    getName(nameData){
        cy.get(this.name).type(nameData);
    };

    getLastName(lastnameData){
        cy.get(this.lastname).type(lastnameData);
    };

    getCreditCard(creditCardData){
        cy.get(this.creditCard).type(creditCardData);
    };

    goPurchase(){
        cy.xpath(this.purchaseButton).click();
    };

};