"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const login_page_1 = require("../../pages/login.page");
cucumber_1.Given('the browser is on login page', () => {
    login_page_1.loginPage.open();
});
cucumber_1.Given('the manager has been registered in the bank', () => {
    return true;
});
//# sourceMappingURL=given.js.map