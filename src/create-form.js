'use strict'

const form = document.createElement('form');
form.setAttribute('class', 'form-container flex-form-container')
document.body.appendChild(form);


const headerContainer = document.createElement('div');
headerContainer.setAttribute('class', 'form-header-container');
form.appendChild(headerContainer); 
const formH1 = document.createElement('h1');
formH1.textContent = 'Create an account';
const headerP = document.createElement('p');
headerP.textContent = 'We always keep your name and email address private.';
headerContainer.append(formH1, headerP);


const textInputContainer = document.createElement('div');
textInputContainer.setAttribute('class', 'text-input-container flex-text-input-container');
form.appendChild(textInputContainer);

const textInputColumnContainer1 = document.createElement('div');
textInputColumnContainer1.setAttribute('class', 'text-input-column-container flex-text-input-column-container');

const textInputColumnContainerEl1 = document.createElement('div');
textInputColumnContainerEl1.setAttribute('class', 'text-input-container-el');

const textField = document.createElement('input');
textField.setAttribute('type', 'text');
textInputColumnContainerEl1.appendChild(textField);

const textInputColumnContainerEl2 = textInputColumnContainerEl1.cloneNode(true);
const textInputColumnContainerEl3 = textInputColumnContainerEl1.cloneNode(true);

textInputColumnContainer1.append(textInputColumnContainerEl1, textInputColumnContainerEl2, textInputColumnContainerEl3);

const textInputColumnContainer2 = textInputColumnContainer1.cloneNode(true);
textInputContainer.append(textInputColumnContainer1, textInputColumnContainer2);

const inputs = document.querySelectorAll('input');
inputs[0].setAttribute('placeholder', 'First Name')
inputs[1].setAttribute('placeholder', 'Nick Name')
inputs[2].setAttribute('placeholder', 'Password')
inputs[2].setAttribute('type', 'password')
inputs[3].setAttribute('placeholder', 'Last Name')
inputs[4].setAttribute('placeholder', 'Email Address')
inputs[4].setAttribute('type', 'email')
inputs[5].setAttribute('placeholder', 'Password Confirmation')
inputs[5].setAttribute('type', 'password')

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'button-container flex-button-container')
form.append(buttonContainer);
const buttonConfirm = document.createElement('button')
const buttonCancel = buttonConfirm.cloneNode();
buttonConfirm.setAttribute('type', 'submit');
buttonConfirm.setAttribute('id', 'confirm');
buttonConfirm.textContent = 'Create an Account';
buttonCancel.setAttribute('type', 'cancel');
buttonCancel.setAttribute('id', 'cancel');
buttonCancel.textContent = 'Cancel';
buttonContainer.append(buttonConfirm, buttonCancel)


const span = document.createElement('span');
span.textContent = 'Passwords don\'t match';
form.insertBefore(span, buttonContainer);
span.setAttribute('hidden', true)

function validatePasswords(event) {
  let password = inputs[2].value;
  let passwordConfirm = inputs[5].value;
  if(password!==passwordConfirm){
    span.removeAttribute('hidden')
  }
  else{
    span.setAttribute('hidden', true)
  }
}

inputs[5].addEventListener('input', validatePasswords)
inputs[2].addEventListener('change', validatePasswords)