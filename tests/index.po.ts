export class IndexPage {
  
  navigateToOfflineApplication() {
    return browser.get('/dominikstrasser/angular2-offline-application');
  }

  navigateToDominikStrasser() {
    return browser.get('/dominikstrasser')
  }
  
  getHeaderLogo () {
    return element(by.css('.header-logo-invertocat'))
  }

  getAuthorLink () {
    return element(by.css('.author'));
  }
  
  getRepositoryLink () {
    return element(by.linkText('Repositories'));
  }

  getSearchInput () {
    return element(by.id('your-repos-filter'));
  }

  getSeachResultItems () {
    return element.all(by.css('.repo-list-name'));
  }

}