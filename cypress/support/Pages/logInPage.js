export class LoginPage {

    loginUser(user){
        cy.xpath('//*[@id="user"]').type(user);
    };

    loginPass(pass){
        cy.xpath('//*[@id="pass"]').type(pass);
    };

    submitForm(){
        cy.xpath('//*[@id="submitForm"]').click();
    }; 
};

