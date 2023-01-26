import { getUser, redirectIfLoggedIn, signUpUser, signInUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

// Wire up sign in and sign up forms to supabase
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    await signInUser(formData.get('email'), formData.get('password'));
    redirect();
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser(formData.get('email'), formData.get('password'));
    // Redirect to /other-page on successful auth
    redirect();
});

async function redirect() {
    const user = await getUser();
    if (user) {
        redirectIfLoggedIn();
    }
}
// Redirect to /other-page when page loads if user is authenticated
redirect();
