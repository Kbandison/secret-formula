'use strict';

let alertform = document.querySelector('#alert-form');
let alertInput = document.querySelector('#name');

let sandwich = document.querySelector('#sandwich-form');
let ingredients = document.querySelectorAll('#sandwich-form .ingredients');
let sandwichSubmit = document.querySelector('#sandwich-submit');

let apptForm = document.querySelector('#appt-form');
let apptDate = document.querySelector('#appt-form #date');
let apptDresser = document.querySelectorAll('#appt-form .dresser');
let apptlength = document.querySelectorAll('#appt-form .length');

let accountForm = document.querySelector('#account-form');
let email = document.querySelector('#account-form #email-input');
let username = document.querySelector('#account-form #user-input');
let password = document.querySelector('#account-form #pwd-input');
let passwordConfirm = document.querySelector('#account-form #pwd-confirm-input');

let loginForm = document.querySelector('#login-form');
let loginUser = document.querySelector('#login-form #login-user');
let loginPassword = document.querySelector('#login-form #login-password');

let userMatch = '';
let pwdMatch = '';

alertform.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(alertInput.value);
  alertInput.value = '';
});

sandwich.addEventListener('submit', e => {
  e.preventDefault();

  let newStr = '';
  ingredients.forEach(i => {
    if (i.checked === true) {
      newStr += `\n${i.id}`;
    }
  })
  alert(`Your sandwich contains: ${newStr}`);
});

apptForm.addEventListener('submit', e => {
  e.preventDefault();
  let newStr = '';

  newStr += `Haircut scheduled for ${apptDate.value} `;

  apptDresser.forEach(i => {
    if (i.checked === true) {
      newStr += `with ${i.id} `;
    }
  });

  apptlength.forEach(e => {
    if (e.checked === true) {
      newStr += `for ${e.id} hair.`;
    }
  })
  alert(newStr);
});

accountForm.addEventListener('submit', e => {
  e.preventDefault();

  let newStr = '';

  if (username.value.length >= 3) {
    newStr += username.value;
    userMatch += username.value
  } else {
    alert('Your username has less than 3 characters.  Please Try again!')
  };

  if (password.value.length >= 4) {
    newStr += password.value;
    pwdMatch += password.value
  } else {
    alert('Your password has less than 4 characters.  Please Try again!');
  }

  if (passwordConfirm.value !== password.value) {
    alert('Your passwords do not match.  Please Try again!');
  } else {
    newStr = `Email: ${email.value}\nUsername: ${username.value}`;
    alert(newStr);
  }

  console.log('Login: ' + username.value)
  console.log('Password: ' + password.value)
  console.log('Matched User: ' + userMatch);
  console.log('Matched Password: ' + pwdMatch);

  email.value = '';
  username.value = '';
  password.value = '';
  passwordConfirm.value = '';
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  let newStr = '';

  if (userMatch.includes(loginUser.value)) {
    newStr += loginUser.value
  } else {
    alert('Please enter the correct username!')
  }

  if (pwdMatch.includes(loginPassword.value)) {
    newStr += loginPassword.value
  } else {
    alert('Please enter the correct password!')
  }

  if (newStr.includes(loginUser.value) && newStr.includes(loginPassword.value)) {
    alert('You have successfully logged in!');
  }

  console.log(loginUser.value)
  console.log(loginPassword.value)

  loginUser.value = '';
  loginPassword.value = '';
})

