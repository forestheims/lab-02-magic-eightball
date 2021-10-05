// import functions and grab DOM elements
import { answers } from './answers.js';
const question = document.getElementById('question');
const button = document.getElementById('button');
const message = document.getElementById('message')

// initialize global state
const rndNum = (num) => {
  return Math.floor(Math.random() * num);
}

// set event listeners 
button.addEventListener('click', ()=> {
  const answersIndex = rndNum(answers.length);
  console.log(answersIndex);
  message.textContent = answers[answersIndex];
  console.log(answers[answersIndex]);
  message.style.display = 'inline';
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
