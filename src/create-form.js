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


const radioCheckboxContainer = document.createElement('div');
radioCheckboxContainer.setAttribute('class', 'radio-checkbox-container flex-radio-checkbox-container')
form.appendChild(radioCheckboxContainer)

const radioWrapper = document.createElement('div');
radioWrapper.setAttribute('class', 'radio-wrapper flex-radio-wrapper')

radioCheckboxContainer.append(radioWrapper); //!!!!!

const radioContainer1 = document.createElement('div');
radioContainer1.setAttribute('class', 'radio-container flex-radio-container');

const radioButtonContainer = document.createElement('div');
radioButtonContainer.setAttribute('class', 'radio-button-container');
const radioButton = document.createElement('input');
radioButton.setAttribute('type', 'radio');
radioButton.setAttribute('id', 'buyer')
radioButtonContainer.appendChild(radioButton)

const radioTextContainer = document.createElement('div');
radioTextContainer.setAttribute('class', 'radio-text-container');
const label = document.createElement('label');
label.setAttribute('for', 'buyer');
label.append('Join As a Buyer')
const radioP = document.createElement('p');
radioP.append('I am looking for a Name, Logo or Tagline for my business, brand or product.')
radioTextContainer.append(label, radioP);
radioContainer1.append(radioButtonContainer, radioTextContainer);

const radioContainer2 = radioContainer1.cloneNode(true);
radioWrapper.append(radioContainer1, radioContainer2);

document.querySelectorAll('[type=radio]')[1].setAttribute('id', 'seller');

const radioContainer2Children = radioContainer2.childNodes;
const radioTextContainer2Children = radioContainer2Children[1].childNodes;
radioTextContainer2Children[0].setAttribute('for', 'seller')
radioTextContainer2Children[0].textContent = 'Join As a Creative or Marketplace Seller'
radioTextContainer2Children[1].textContent = 'I plane to submit name ideas, Logo designs or sell names in Domain Marketplace.'


const checkboxContainer = document.createElement('div')
checkboxContainer.setAttribute('class', 'checkbox-container flex-checkbox-container');
const checkbox = document.createElement('input')
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('id', 'terms');
const labelCheckbox = label.cloneNode();
labelCheckbox.setAttribute('for', 'terms');
labelCheckbox.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';
checkboxContainer.append(checkbox, labelCheckbox);
radioCheckboxContainer.append(checkboxContainer) // !!!!!
// radioCheckboxContainer.append(radioWrapper, checkboxContainer)

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'button-container')
form.append(buttonContainer);
const bigButton = document.createElement('button')
bigButton.setAttribute('type', 'submit');
bigButton.append('Create an Account');
buttonContainer.appendChild(bigButton)

