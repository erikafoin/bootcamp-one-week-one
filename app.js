import { isNo, isYes } from './functions.js';

const myButton = document.getElementById('action-button');




myButton.onclick = () => {
    alert('Welcome to my quiz!');
    // eslint-disable-next-line no-unused-vars
    const myConfirmation = confirm('Do you want to take my quiz?'); //returns true or false//
    let score = 0;

    const userAnswer = prompt('Have I been to Thailand? (yes/no)');
    const trimmedLowercaseUserAnswer = userAnswer.toLowerCase().trim();

    const answer1 = isYes(trimmedLowercaseUserAnswer);

    if (answer1) {
        alert('Wahoo!');
        score ++;
    } else {
        alert('oops.');
    }

    const userAnswer2 = prompt('Do I own a guinea pig named Chocolate? (yes/no)');
    const trimmedLowercaseUserAnswer2 = userAnswer2.toLowerCase().trim();

    const answer2 = isNo(trimmedLowercaseUserAnswer2);

    if (answer2) {
        alert('Wahoo!');
        score ++;
    } else {
        alert('oops.');
    }

    const userAnswer3 = prompt('Is the English Horn from England? (yes/no)');
    const trimmedLowercaseUserAnswer3 = userAnswer3.toLowerCase().trim();

    const answer3 = isNo(trimmedLowercaseUserAnswer3);

    if (answer3) {
        alert('Wahoo!');
        score ++;
    } else {
        alert('oops.');
    }
    alert('Quiz Complete! Your score is ' + (score / 3) * 100 + '%');
};