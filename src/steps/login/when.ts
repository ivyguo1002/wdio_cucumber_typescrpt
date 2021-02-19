import { When } from 'cucumber';
import { loginPage } from '../../pages/login.page';
import data from '../../data/login.data';

// When the manager logs in with "valid" username and password
When(
    'the manager logs in with {string} username and password',
    (valid: string) => {
        if (valid === 'valid') {
            loginPage.login(data.valid.username, data.valid.password);
        } else {
            loginPage.login(data.invalid.username, data.invalid.password);
        }
    },
);

// When the manager log in with "valid" username and password
// When(
//     /^the manager logs in with "(valid|invalid)" username and password$/,
//     (valid: string) => {
//         loginPage.login(data[valid].username, data[valid].password);
//     },
// );

When(
    'the manager log in with {string} and {string}',
    (username: string, password: string) => {
        loginPage.login(username, password);
    },
);
