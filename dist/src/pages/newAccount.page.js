"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newAccountPage = void 0;
const page_1 = __importDefault(require("./page"));
class NewAccountPage extends page_1.default {
    get inputCustomerId() {
        return $('[name="cusid"]');
    }
    get selectAccountType() {
        return $('select[name="selaccount"]');
    }
    get inputInitialDeposit() {
        return $('input[name="inideposit"]');
    }
    get btnSubmit() {
        return $('input[type="submit"]');
    }
    addNewAccount(customerId, accountType, initialDeposit) {
        this.inputCustomerId.waitForDisplayed();
        this.inputCustomerId.setValue(customerId);
        this.selectAccountType.selectByAttribute('value', accountType);
        this.inputInitialDeposit.setValue(initialDeposit);
        this.btnSubmit.click();
    }
}
exports.newAccountPage = new NewAccountPage();
//# sourceMappingURL=newAccount.page.js.map