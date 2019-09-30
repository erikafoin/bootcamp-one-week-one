import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');




myButton.onclick = () => {
    alert('Welcome to my quiz!');
    const myConfirmation = confirm('Do you want to take my quiz?'); //returns true or false//
    console.log(myConfirmation);

    const userAnswer = prompt('is my favorite color purple? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();


    isCorrect(sanitizedUserAnswer);


    
};