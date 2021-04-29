/// <reference types="cypress" />


//Element
const LOGOUT_BTN =".user > .btn"
const VIEW_CLIENTS_BTN = ".blocks > :nth-child(2) > .btn"
const VIEW_BILLS_BTN = ":nth-child(3) > .btn"
const VIEW_ROOMS_BTN = ":nth-child(1) > .btn"
const VIEW_RESERVATIONS_BTN = ":nth-child(4) > .btn"

//function/ actions
function logoutUser(content){
    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function viewClients(content) {
    cy.get(VIEW_CLIENTS_BTN).click();
    cy.contains(content)
}

function viewBills(content) {
    cy.get(VIEW_BILLS_BTN).click()
    cy.contains(content)
}

function viewRooms(content) {
    cy.get(VIEW_ROOMS_BTN).click()
    cy.contains(content)
}


function viewReservations(content) {
    cy.get(VIEW_RESERVATIONS_BTN).click()
    cy.contains(content)

}

//exports

exports.default = {
    logoutUser,
    viewClients,
    viewBills,
    viewRooms,
    viewReservations

}