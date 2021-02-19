"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const login_page_1 = require("../../pages/login.page");
const login_data_1 = __importDefault(require("../../data/login.data"));
cucumber_1.When('the manager logs in with {string} username and password', (valid) => {
    if (valid === 'valid') {
        login_page_1.loginPage.login(login_data_1.default.valid.username, login_data_1.default.valid.password);
    }
    else {
        login_page_1.loginPage.login(login_data_1.default.invalid.username, login_data_1.default.invalid.password);
    }
});
cucumber_1.When('the manager log in with {string} and {string}', (username, password) => {
    login_page_1.loginPage.login(username, password);
});
//# sourceMappingURL=when.js.map