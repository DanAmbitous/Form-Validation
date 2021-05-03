const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector(".error-message");


document.querySelector("#form-element").addEventListener('submit', (event) => {
  errorIndicatorRemover(usernameInput.id);
  errorIndicatorRemover(passwordInput.id);

  if (usernameInput.value.length > 10) {
    errorMessage.textContent = `Your username is ${usernameInput.value.length} characters long, which is too long, as the maximum acceptable length is 10 characters long only.`;    errorIndicator(usernameInput.id);
    errorShower('error-message')
    event.preventDefault();
  }

  if (usernameInput.value.length < 3) {
    errorMessage.textContent = `Your username is ${usernameInput.value.length} characters long, which is too short, as the minimum acceptable length is 3 characters long only.`
    errorIndicator(usernameInput.id);
    errorShower('error-message')
    event.preventDefault();
  }
  
  if (passwordInput.value === 'password') {
    errorMessage.textContent = `Haha funny, you're password of "${passwordInput.value}" is way too simple.`;
    errorIndicator(passwordInput.id);
    errorShower('error-message')
    event.preventDefault();
  }

  if (usernameInput.value.length === 0) {
    errorMessage.textContent = `Please include a username`;
    errorIndicator(usernameInput.id);
    errorShower('error-message')
    event.preventDefault();
  }

  if (passwordInput.value.length === 0) {
    errorMessage.textContent = `Please include a password`;   
    errorIndicator(passwordInput.id);
    errorShower('error-message')
    event.preventDefault();
  }
})

function errorIndicator(elementName) {
  document.querySelector(`#${elementName}`).setAttribute('class', 'input-error')
}

function errorIndicatorRemover(elementName) {
  document.querySelector(`#${elementName}`).removeAttribute('class', 'input-error')
}

function errorShower(elementName) {
  document.querySelector(`.${elementName}`).setAttribute('style', 'padding: 1vh;')
}