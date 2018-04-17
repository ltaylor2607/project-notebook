import { AppPage } from './app.po';

describe('project-notebook App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should display navbar', () => {
    page.navigateTo();
    expect(page.getNavbar()).toBeTruthy;
  });

  it('should only display menu icon below a certain size', async () => {
    const pageSize = await page.getWindowSize();
    if (pageSize.width > 550) {
      expect(page.getMenuIcon().isDisplayed()).toBeFalsy();
    } else {
      expect(page.getMenuIcon().isDisplayed()).toBeTruthy();
    }
  });
});
