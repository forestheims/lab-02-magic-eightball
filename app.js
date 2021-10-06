// import functions and grab DOM elements
import { answers } from './answers.js';
// const question = document.getElementById('question');
const button = document.getElementById('button');
const message = document.getElementById('message');
const messageBackground = document.getElementById('message-background');

// initialize global state
const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

// set event listeners 
button.addEventListener('click', ()=> {
    const answersIndex = getRandomNumber(answers.length);
    message.textContent = answers[answersIndex];
    messageBackground.style.display = 'block';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
