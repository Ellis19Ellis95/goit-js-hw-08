import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';


const updateStorage = () => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};


const throttledUpdateStorage = throttle(updateStorage, 500);

form.addEventListener('input', throttledUpdateStorage);


window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
});
