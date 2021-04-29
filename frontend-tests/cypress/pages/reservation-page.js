/// <reference types="cypress" />

const CREATE_RESERVATION_BTN = "h2 > .btn"
const RESERVATION_LIST = ".reservations"
const THREE_DOTS_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"

function viewReservationNew(content){
    cy.get(CREATE_RESERVATION_BTN).click()
    cy.contains(content)

}
function verifyLastReservation(start, end, client, room, bill) {
    cy.get(RESERVATION_LIST).last()
    .should("contain", start)
    .and("contain", end)
    .and("contain", client)
    .and("contain", room)
    .and("contain", bill)
}

function deleteLastReservation(){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()

}

exports.default = {
    viewReservationNew,
    verifyLastReservation,
    deleteLastReservation
}