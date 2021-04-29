/// <reference types="cypress" />

const CREATE_BILL_BTN = "h2 > .btn"
const BILL_LIST = ".bills"
const THREE_DOTS_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"
const HOME_BTN = "h1 > .router-link-active"

function viewBillNew(content) {
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(content)

}

function verifyLastBill(value) {
    cy.get(BILL_LIST).last()
    .should("contain", value)
}

function deleteLastBill(){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()

}

function returnToHomePage(content) {
    cy.get(HOME_BTN).click()
    cy.contains(content)
}

exports.default = {
    viewBillNew,
    verifyLastBill,
    deleteLastBill,
    returnToHomePage
}