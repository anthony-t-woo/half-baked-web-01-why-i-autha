import { checkAuth } from '../fetch-utils.js';
import { getUser, redirectIfLoggedIn, signUpUser, signInUser } from '../fetch-utils.js';
// use checkAuth function to redirect if user not authenticated
window.addEventListener('load', async () => {
    await checkAuth();
});

// add event listener to the logout button and call logout
