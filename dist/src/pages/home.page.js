"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const page_1 = __importDefault(require("./page"));
class HomePage extends page_1.default {
    get welcomeMessage() {
        return $('marquee');
    }
    get linkLogOut() {
        return $('a=Log out');
    }
    get linkNewAccount() {
        return $('a[href="addAccount.php"]');
    }
    get iframeAd() {
        return $('#aswift_0');
    }
    closeAd() {
        this.linkLogOut.scrollIntoView();
        browser.switchToFrame(this.iframeAd);
        $('#cbb').click();
        browser.switchToFrame(null);
    }
    clickNewAccount() {
        this.linkLogOut.waitForDisplayed();
        this.linkNewAccount.click();
    }
    clickLogOut() {
        this.linkLogOut.click();
    }
}
exports.homePage = new HomePage();
//# sourceMappingURL=home.page.js.map