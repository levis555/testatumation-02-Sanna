/// <reference types="cypress" />

const CATEGORY_FIELD = ":nth-child(1) > select"
const NUMBER_FIELD = ":nth-child(2) > input"
const FLOOR_FIELD = ":nth-child(3) > input"
const PRICE_FIELD =":nth-child(5) > input"
const FEATURE_SELECTION = ":nth-child(6) > select"
const SAVE_BTN = ".blue"

function createRoom(category, number, floor, price, feature, content) {
    cy.get(CATEGORY_FIELD).select(category)
    cy.get(NUMBER_FIELD).type(number)
    cy.get(FLOOR_FIELD).type(floor)
    cy.get(PRICE_FIELD).type(price)
    cy.get(FEATURE_SELECTION).select(feature)
    cy.get(SAVE_BTN).click()
    cy.contains(content)

}
    exports.default = {
        createRoom
    }