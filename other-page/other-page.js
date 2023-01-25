import { checkAuth, logout } from '../fetch-utils.js';

const logOutButtonEl = document.querySelector('#logout');
// use checkAuth function to redirect if user not authenticated
window.addEventListener('load', async () => {
    await checkAuth();
});

// add event listener to the logout button and call logout
logOutButtonEl.addEventListener('click', async () => {
    await logout();
});
