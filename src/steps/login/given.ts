import { Given } from 'cucumber';
import { loginPage } from '../../pages/login.page';

Given('the browser is on login page', () => {
    loginPage.open();
});

Given('the manager has been registered in the bank', () => {
    return true;
});
