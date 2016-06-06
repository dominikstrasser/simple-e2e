import { IndexPage } from './index.po';

describe ('The Github Page', () => {
  
  let page: IndexPage;
  
  beforeEach(() => {
    browser.ignoreSynchronization = true;
    page = new IndexPage();
  })
  
  it('should have a icon', () => {
    page.navigateTo();
    expect(page.getHeaderLogo().isDisplayed()).toBeTruthy();
  });
}) 