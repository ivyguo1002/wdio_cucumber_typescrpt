import { When } from "cucumber";
import LoginPage from "../../pages/login.page";
import data from "../../data/login.data";

// When the manager logs in with "valid" username and password
// When("the manager logs in with {string} username and password", (valid) => {
//   if (valid === "valid") {
//     LoginPage.login(data.valid.username, data.valid.password);
//   } else {
//     LoginPage.login(data.invalid.username, data.invalid.password);
//   }
// });

// When the manager log in with "valid" username and password
When(
  /^the manager logs in with "(valid|invalid)" username and password$/,
  (valid) => {
    LoginPage.login(data[valid].username, data[valid].password);
  }
);

When("the manager log in with {string} and {string}", (username, password) => {
  LoginPage.login(username, password);
});
