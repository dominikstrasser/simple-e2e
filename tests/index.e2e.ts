import { IndexPage } from './index.po';

describe ('The Github Page', () => {
  
  let page: IndexPage;
  
  beforeEach(() => {
    browser.ignoreSynchronization = true;
    page = new IndexPage();
  })
  
  it('should have a icon', () => {
    page.navigateToOfflineApplication();
    expect(page.getHeaderLogo().isDisplayed()).toBeTruthy();
  });

  it('should wait 3 seconds and change to the author site', () => {
    page.navigateToOfflineApplication();
    browser.sleep(2000);
    page.getAuthorLink().click();
    expect(browser.getCurrentUrl()).toBe('https://github.com/dominikstrasser');
  });

  it('should find simple-e2e in the search results', () => {
    page.navigateToDominikStrasser();
    page.getRepositoryLink().click();
    browser.sleep(2000);
    page.getSearchInput().sendKeys('simple-e2e');
    browser.sleep(2000);
    expect(page.getSimpleE2EItem().isDisplayed()).toBeTruthy();
  });
}) 