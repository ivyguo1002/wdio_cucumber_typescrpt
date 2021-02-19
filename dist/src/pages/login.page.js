"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
const page_1 = __importDefault(require("./page"));
class LoginPage extends page_1.default {
    get inputUserID() {
        return $('[name="uid"]');
    }
    get inputPassword() {
        return $('[name="password"]');
    }
    get btnLogin() {
        return $('[type="submit"]');
    }
    login(userid, password) {
        this.inputUserID.waitForDisplayed();
        this.inputUserID.setValue(userid);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }
    open() {
        return super.open('');
    }
}
exports.loginPage = new LoginPage();
//# sourceMappingURL=login.page.js.map