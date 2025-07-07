/* To Do
- responsive design
- hookup form
- show password - change text
- fix password pattern
- set up database
- input validation
- remember me local storage
-auth
- add extra sign options
- sign up page
- reset password
-accessibility aria labels
*/

const toggleButton = document.getElementById("togglePassword")
const passwordInput = document.getElementById("password-field")

toggleButton.addEventListener('click', () => {
  // console.log("click")
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  toggleButton.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  // toggleButton.textContent = isHidden ? '🙈' : '👁️';
});
