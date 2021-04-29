/// <reference types="cypress" />

describe("Create reservation", () => {
    it("login", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")

        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")

        cy.get(".btn").click();
        cy.wait(500)
        cy.get('.username').should("contain", "Welcome tester01!")

        cy.get("h2").should("contain", "Tester Hotel Overview")

        cy.get(':nth-child(4) > .btn').click();
        cy.get('h2 > div').should("contain", "Reservation")
        cy.get('h2 > .btn').click();
        cy.get('h2 > div').should("contain", "New Reservation")
        cy.get(':nth-child(1) > input').type("2021-05-05")
        cy.get(':nth-child(2) > input').type("2021-05-10")
        cy.get(':nth-child(3) > select').select("Jonas Hellman (#1)")
        cy.get(':nth-child(4) > select').select("Floor 1, Room 102")
        cy.get(':nth-child(5) > select').select("ID: 7") 
        cy.get('.blue').click();

        cy.get(':nth-child(2) > h3').should("contain", "Jonas Hellman: 2021-05-05 - 2021-05-10")
        cy.get(':nth-child(2) > .action').click();

        cy.get('.menu > :nth-child(2)').click();
        cy.get('.user > .btn').click();
        cy.get('h2').should("contain", "Login") 
        
     });
});