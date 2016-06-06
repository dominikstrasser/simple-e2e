export class IndexPage {
  
  navigateTo() {
    return browser.get('/dominikstrasser/angular2-offline-application');
  }
  
  getHeaderLogo () {
    return element(by.css('.header-logo-invertocat'))
  }
  
}