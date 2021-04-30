/// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import { isYieldExpression } from "typescript";
import * as clientsPage from "../pages/clients-page"
import * as clientNewPage from "../pages/client-new-page"
import * as billPage from "../pages/bill-page";
import * as billNewPage from "../pages/bill-new-page"
import * as roomPage from "../pages/room-page";
import * as roomNewPage from "../pages/room-new-page"
import * as reservationPage from "../pages/reservation-page"
import * as reservationNewPage from "../pages/reservation-new-page"

describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    });

    it("Login and logout", () => {
        indexPage.logoutUser("Login")    

    });

    it("Create client and verify", () => {
        indexPage.viewClients("Clients")
        clientsPage.viewClientNew("New Client")
        clientNewPage.createClient("tester", "tester@mail.com", "01234566789", "Clients")
        clientsPage.verifyLastClient("tester", "tester@mail.com", "01234566789")
        clientsPage.deleteLastClient()
        indexPage.logoutUser("Login")

    });
    
    it("Create bill and verify", () => {
        indexPage.viewBills("Bills")
        billPage.viewBillNew("New Bill")
        billNewPage.createBill("9900", "Bills")
        billPage.verifyLastBill("9900")
        billPage.deleteLastBill()
        indexPage.logoutUser("Login")

    });
    
    it("Create room and verify", () => {
        indexPage.viewRooms("Rooms")
        roomPage.viewRoomNew("New Room")
        roomNewPage.createRoom("double", "546", "12" ,"9900", "balcony", "Rooms")
        roomPage.verifyLastRoom("double", "546", "12" ,"9900", "balcony")
        roomPage.deleteLastRoom()
        indexPage.logoutUser("Login")
        
    });

    it("Create reservation and verify", () => {
        indexPage.viewReservations("Reservations")
        reservationPage.viewReservationNew("New Reservation")
        reservationNewPage.createReservation("2020-05-05", "2020-05-10", "Jonas Hellman (#1)", "Floor 1, Room 102", "ID: 1", "Reservations")
        reservationPage.verifyLastReservation("2020-05-05", "2020-05-10", "Jonas Hellman", "Room: 1", "ID: 1")
        reservationPage.deleteLastReservation()
        indexPage.logoutUser("Login")

    });

    it("Return to home page",() => {
        indexPage.viewBills("Bills")
        billPage.returnToHomePage("Tester Hotel Overview")
        indexPage.logoutUser("Login")

    });
});