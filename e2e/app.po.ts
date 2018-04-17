import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNavbar() {
    return element(by.css('.navbar'));
  }

  getMenuIcon() {
    return element(by.css('.menu-icon img'));
  }

  getWindowSize() {
    return browser.manage().window().getSize()
      .then(size => {
        return {
          width: size.width,
          height: size.height
        };
      });
  }
  
}
