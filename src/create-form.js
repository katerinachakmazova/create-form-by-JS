'use strict'
import { Person } from "./person.js";

function createOwnElement(type = 'input', attributes = {}) {
  const element = document.createElement(type);
  if (attributes !== null) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  return element;
}

const form = createOwnElement('form', {
  class: 'form-container flex-form-container',
});
document.body.appendChild(form);

const headerContainer = createOwnElement('div', {
  class: 'form-header-container',
});
const formH1 = createOwnElement('h1');
formH1.textContent = 'Create an account';
const headerP = createOwnElement('p');
headerP.textContent = 'We always keep your name and email address private.';
headerContainer.append(formH1, headerP);


const textInputContainer = createOwnElement('div', {
  class: 'text-input-container flex-text-input-container',
});

const textInputColumnContainer1 = createOwnElement('div', {
  class: 'text-input-column-container flex-text-input-column-container',
});

const firstName = createOwnElement('input', {
  type: 'text',
  placeholder: 'First Name',
  name: 'firstName',
});

const lastName = createOwnElement('input', {
  type: 'text',
  placeholder: 'Last Name',
  name: 'lastName',
});

const nickName = createOwnElement('input', {
  type: 'text',
  placeholder: 'Nick Name',
  name: 'nickName',
});
const email = createOwnElement('input', {
  type: 'email',
  placeholder: 'Email Address',
  name:'email',
})

textInputColumnContainer1.append(firstName, nickName);
const textInputColumnContainer2 = textInputColumnContainer1.cloneNode();
textInputColumnContainer2.append(lastName, email);
textInputContainer.append(textInputColumnContainer1, textInputColumnContainer2);

const buttonContainer = createOwnElement('div', {
class: 'button-container flex-button-container'
});
form.append(headerContainer, textInputContainer, buttonContainer);
const buttonConfirm = createOwnElement('button', {
  type: 'submit',
  id: 'confirm',
});
const buttonCancel = createOwnElement('button', {
  type:'cancel',
  id: 'cancel',
})
buttonConfirm.textContent = 'Create an Account';
buttonCancel.textContent = 'Cancel';
buttonContainer.append(buttonConfirm, buttonCancel)
buttonConfirm.addEventListener('click', submit)


const inputs = [...document.querySelectorAll('input')];
function submit(event){
  event.preventDefault();
  const user = new Person(...inputs);
  inputs.forEach((key)=>key.value='')
  localStorage.setItem(user.lastName, JSON.stringify(user));
}
