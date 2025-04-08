'use strict'

const form = document.createElement('form');
form.setAttribute('class', 'form-container flex-form-container')
document.body.appendChild(form);


const headerContainer = document.createElement('div');
headerContainer.setAttribute('class', 'form-header-container');
form.appendChild(headerContainer);
const formH1 = document.createElement('h1');
formH1.append('Create an account');
const headerP = document.createElement('p');
headerP.append('We always keep your name and email address private.')
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
inputs[0].setAttribute('required', 'true')
inputs[1].setAttribute('placeholder', 'Display Name')
inputs[2].setAttribute('placeholder', 'Password')
inputs[2].setAttribute('type', 'password')
inputs[2].setAttribute('required', 'true')
inputs[3].setAttribute('placeholder', 'Last Name')
inputs[4].setAttribute('placeholder', 'Email Address')
inputs[4].setAttribute('type', 'email')
inputs[4].setAttribute('required', 'true')
inputs[5].setAttribute('placeholder', 'Password Confirmation')
inputs[5].setAttribute('type', 'password')
inputs[2].setAttribute('required', 'true')


