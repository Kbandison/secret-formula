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

alertform.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(alertInput.value);
  alertInput.value = '';
});

ingredients.forEach(e => {
  console.log(e.id);
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

apptDresser.forEach(e => {
  console.log(e.id);
});

apptlength.forEach(e => {
  console.log(e.id);
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

  if (username.value.length >= 3){
    newStr += username.value;
  } else {
    alert('Your username has less than 3 characters.  Please Try again!')
  };

  if (password.value.length >= 4){
    newStr += username.value;
  } else {
    alert('Your password has less than 4 characters.  Please Try again!');
  }

  if (passwordConfirm.value !== password.value){
    alert('Your passwords do not match.  Please Try again!');
  }
  newStr = `Email: ${email.value}\nUsername: ${username.value}`;
  alert(newStr);
});
