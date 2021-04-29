/// <reference types="cypress" />

const CREATE_ROOM_BTN = "h2 > .btn"
const ROOM_LIST =  ".rooms"
const THREE_DOTS_BTN = ".action > img"
const DELETE_BTN = ".menu > :nth-child(2)"

function viewRoomNew(content) {
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(content)
}

function verifyLastRoom(category, number, floor, price, feature) {
    cy.get(ROOM_LIST).last()
    .should("contain",category )
    .and("contain", number)
    .and("contain", floor)
    .and("contain",price)
    .and("contain",feature)

}

function deleteLastRoom() {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
}

exports.default = {
    viewRoomNew,
    verifyLastRoom,
    deleteLastRoom
}