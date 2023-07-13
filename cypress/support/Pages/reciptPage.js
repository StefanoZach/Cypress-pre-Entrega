export class ReciptPage{

    constructor(){
        this.button = "/html/body/div[4]/div[3]/div/section/footer/button";
        this.name = "#name";
        this.productOne = '//*[@id="Black T-Shirt"]';
        this.productTwo = '//*[@id="White Pants"]';
        this.creditCard = "#creditCard";
        this.totalPrice = "#totalPrice";
    };

    verifyName(){
        return cy.get(this.name);
    };

    verifyProductOne(){
        return cy.xpath(this.productOne);
    };

    verifyProductTwo(){
        return cy.xpath(this.productTwo);
    };

    verifyCreditCard(){
        return cy.get(this.creditCard);
    };

    verifyTotalPrice(){
        return cy.get(this.totalPrice);
    };


    clickThankYou(){
        cy.xpath(this.button).click();
    };
};