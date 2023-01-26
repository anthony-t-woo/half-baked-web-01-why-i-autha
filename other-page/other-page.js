import { checkAuth, getUser, logout } from '../fetch-utils.js';

const messageEl = document.querySelector('#logged-in-message');
const logOutButtonEl = document.querySelector('#logout');
// use checkAuth function to redirect if user not authenticated
window.addEventListener('load', async () => {
    await checkAuth();
    let user = await getUser();
    console.log(user.email);
    messageEl.textContent = `Hello, you are logged in as ${user.email}. Have a nice day`;
});

// add event listener to the logout button and call logout
logOutButtonEl.addEventListener('click', async () => {
    await logout();
});
