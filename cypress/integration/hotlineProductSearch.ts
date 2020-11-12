/// <reference types="cypress"/>

import { HotlineMain } from "../support/basePage";

describe(`Hotline catalog search`, () => {

    beforeEach(() => {});

    it(`Search for a Samsung A51 and check the if ir redirect to the right store wich sells it`, () => {

        HotlineMain.hotlineMainPageOpen();

    });

});