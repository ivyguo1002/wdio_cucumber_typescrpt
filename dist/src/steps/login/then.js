"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const home_page_1 = require("../../pages/home.page");
cucumber_1.Then('the manager should be navigated to home page', () => {
    expect(browser.getTitle()).toContain('Guru99 Bank Manager HomePage');
});
cucumber_1.Then('the manager should see the welcome message', () => {
    expect(home_page_1.homePage.welcomeMessage).toHaveTextContaining("Welcome To Manager's Page of Guru99 Bank");
});
cucumber_1.Then('alert message should pop up', () => {
    expect(browser.getAlertText()).toContain('User or Password is not valid');
});
//# sourceMappingURL=then.js.map