/// <reference types="cypress"/>

import { MainCatalog } from "./mainCatalogSearchMenu"
import { SubMenu } from "./subCatalogSearchMenu"

class BasePage {

    maincatalog = MainCatalog
    subMenu = SubMenu

    hotlineMainPageOpen(){
        return cy.visit('https://hotline.ua/')
    }
}

export const HotlineMain: BasePage = new BasePage()