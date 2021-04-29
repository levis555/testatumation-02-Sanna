/// <reference types="cypress" />

const START_FIELD = ":nth-child(1) > input"
const END_FIELD = ":nth-child(2) > input"
const CLIENT_SELECTION = ":nth-child(3) > select"
const ROOM_SELECTION = ":nth-child(4) > select"
const BILL_SELECTION = ":nth-child(5) > select" 
const SAVE_BTN = ".blue"

function createReservation(start, end, client, room, bill, content) {
    cy.get(START_FIELD).type(start)
    cy.get(END_FIELD).type(end)
    cy.get(CLIENT_SELECTION).select(client)
    cy.get(ROOM_SELECTION).select(room)
    cy.get(BILL_SELECTION).select(bill)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

exports.default = {
    createReservation

}