/// <reference types="cypress" />

describe("Create Bill", () => {
    it("login", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")

        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")

        cy.get(".btn").click();
        cy.wait(500)
        cy.get('.username').should("contain", "Welcome tester01!")

        cy.get("h2").should("contain", "Tester Hotel Overview")

        cy.get(':nth-child(3) > .btn').click();
       
        cy.get('h2 > div').should("contain", "Bills")
        cy.get('h2 > .btn').click();
        cy.get('h2 > div').should("contain", "New Bill")
        cy.get('input').type("9900")
        cy.get('.blue').click();
        cy.get(':nth-child(1) > .value').should("contain", "9900kr")
        cy.get(':nth-child(1) > .action > img').click();
        cy.get('.menu > :nth-child(2)').click();
        cy.get('.user > .btn').click();
        cy.get('h2').should("contain", "Login") 
     });
});