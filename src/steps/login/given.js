import { Given } from "cucumber";
import LoginPage from "../../pages/login.page";

Given("the browser is on login page", () => {
  LoginPage.open();
});

Given("the manager has been registered in the bank", () => {
  return true;
});
