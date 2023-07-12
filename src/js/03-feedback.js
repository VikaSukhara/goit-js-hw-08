import throttle from 'lodash.throttle';

const FORM_STATE_KEY = 'feedback-form-state'

const form = document.querySelector('form');
const textareaInput = document.querySelector('textarea');
const emilInput = document.querySelector('input');


restoreValues()

form.addEventListener("submit", handlerFormSubmit);
form.addEventListener('input', throttle(handlerFormInput, 500));


function restoreValues() {
  const savedValues = localStorage.getItem(FORM_STATE_KEY);
  const parsedValues = JSON.parse(savedValues);

  if (parsedValues) {
    emilInput.value = parsedValues.email
    textareaInput.value = parsedValues.message;
  }
}


function handlerFormInput(event) {
  const { elements: { email, message } } = form;
  localStorage.setItem(FORM_STATE_KEY, JSON.stringify({ email: email.value, message: message.value })
  );
}


function handlerFormSubmit(event){
  console.log(localStorage.getItem(FORM_STATE_KEY))
  localStorage.removeItem(FORM_STATE_KEY)
  event.preventDefault();
  form.reset()

}
