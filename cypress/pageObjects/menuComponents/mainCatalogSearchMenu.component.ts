/// <reference types="cypress"/>

import SubCatalogSearchMenu from './subCatalogSearchMenu.component';

export default class MainCatalogSearchMenu {
  subMenu = new SubCatalogSearchMenu();

  get menu() {
    return cy.get('.menu-main-list');
  }

  menuOptionFocus(option: string) {
    let menuOption = this.menu.find(`[data-menu-main-item="${option}"]`);
    menuOption.focus();
  }

  menuOptionSelect(option: string){
    
  }
}
