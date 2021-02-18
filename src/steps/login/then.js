import { Then } from "cucumber";
import HomePage from "../../pages/home.page";

Then("the manager should be navigated to home page", () => {
  expect(browser.getTitle()).toContain("Guru99 Bank Manager HomePage");
});

Then("the manager should see the welcome message", () => {
  expect(HomePage.welcomeMessage).toHaveTextContaining(
    "Welcome To Manager's Page of Guru99 Bank"
  );
});

Then("alert message should pop up", () => {
  expect(browser.getAlertText()).toContain("User or Password is not valid");
});
