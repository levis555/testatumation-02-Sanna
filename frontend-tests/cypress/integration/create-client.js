/// <reference types="cypress" />

describe("Create Client", () => {
    it("login", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")

        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")

        cy.get(".btn").click();
        
        cy.get('.username').should("contain", "Welcome tester01!")

        cy.get("h2").should("contain", "Tester Hotel Overview")
        cy.visit("http://localhost:3000/clients")
        cy.get("h2").should("contain", "Clients")

        cy.get('h2 > .btn').click();

        cy.get("h2").should("contain", "New Client")

        cy.get(':nth-child(1) > input').type("tester");
        cy.get(':nth-child(2) > input').type("tester@test.com");
        cy.get(':nth-child(3) > input').type(1234567891);

        cy.get('.blue').click()

        cy.get(':nth-child(3) > :nth-child(2) > h3').should("contain", "tester (#3)")
        cy.get(':nth-child(3) > .action > img').click();

        cy.get('.menu > :nth-child(2)').click();
        cy.get('.user > .btn').click();
        cy.get('h2').should("contain", "Login" )
    });       
});