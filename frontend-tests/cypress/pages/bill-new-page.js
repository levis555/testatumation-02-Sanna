/// <reference types="cypress" />

const VALUE_FIELD = "input"
const SAVE_BTN = ".blue"

function createBill(value, content) {
    cy.get(VALUE_FIELD).type(value)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}


exports.default = {
    createBill
}