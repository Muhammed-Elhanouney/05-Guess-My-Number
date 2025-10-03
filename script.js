'use strict';
const secretNumber = '?';
const number = (document.querySelector('.number').textContent = Math.trunc(
  Math.random() * 20 + 1
));
const btnCheck = document.querySelector('.check');
function guessingMessage(message) {
  document.querySelector('.message').textContent = message;
}

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);
  if (guess) {
    guess > number
      ? guessingMessage('its to heigh')
      : guessingMessage('its to low');
    if (guess === number) {
      guessingMessage('its correct number');
    }
  } else {
    guessingMessage('no number');
  }
});
