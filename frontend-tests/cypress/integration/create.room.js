/// <reference types="cypress" />

describe("Create Room", () => {
    it("login", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")

        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")

        cy.get(".btn").click();
        cy.wait(500)
        cy.get('.username').should("contain", "Welcome tester01!")

        cy.get("h2").should("contain", "Tester Hotel Overview")

        cy.get(':nth-child(1) > .btn').click();

        cy.get('h2 > div').should("contain", "Room")

        cy.get('h2 > .btn').click();

        cy.get('h2 > div').should("contain","New Room")

        cy.get(':nth-child(1) > select').select("Double");
        cy.get(':nth-child(2) > input').type("7")
        cy.get(':nth-child(3) > input').type("5")
        cy.get(':nth-child(5) > input').type("9900")
        cy.get(':nth-child(6) > select').select("Sea View")
        cy.get('.blue').click();
       
        cy.get(':nth-child(3) > :nth-child(2) > h3').should("contain","Floor 5, Room 7")
        cy.get(':nth-child(3) > .action > img').click();
        cy.get('.menu > :nth-child(1)').click();
        cy.get(':nth-child(5) > input').clear();
        cy.get(':nth-child(5) > input').type("10")
        cy.get('.blue').click();
        cy.get(':nth-child(3) > :nth-child(2) > h3').should("contain", "Floor 10, Room 7")
        cy.get(':nth-child(3) > .action > img').click();
        cy.get('.menu > :nth-child(2)').click();
        
     });
});