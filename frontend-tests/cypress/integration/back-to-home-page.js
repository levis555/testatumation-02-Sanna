/// <reference types="cypress" />

describe("Back to Home page", () => {
    it("login", () => {
        cy.visit("http://localhost:3000");
        cy.get('h2').should("contain", "Login")