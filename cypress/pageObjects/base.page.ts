/// <reference types="cypress"/>

import MainCatalogSearchMenu from "./menuComponents/mainCatalogSearchMenu.component"
import SubCatalogSearchMenu from "./menuComponents/subCatalogSearchMenu.component"

export default class BasePage {

    maincatalog = new MainCatalogSearchMenu()
    
    get url(){
        return 'https://hotline.ua/'
    }

    hotlineMainPageOpen(){
        return cy.visit(this.url)
    }

    get hotlineSearchInput(){
        return cy.get('#searchbox')
    }

    get hotlineSearchButton(){
        return cy.get('#doSearch')
    }


}
