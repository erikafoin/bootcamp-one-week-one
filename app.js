import { isNo, isYes } from './functions.js';

const myButton = document.getElementById('action-button');




myButton.onclick = () => {
    alert('Welcome to my quiz!');
    // eslint-disable-next-line no-unused-vars
    const myConfirmation = confirm('Do you want to take my quiz?'); //returns true or false//

    const userAnswer = prompt('Have I been to Thailand? (yes/no)');
    const lowercaseUserAnswer = userAnswer.toLowerCase().trim();
    const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();

    const answer1 = isYes(trimmedLowercaseUserAnswer);

    if (answer1) {
        alert('Wahoo!');
    } else {
        alert('oops.');
    }

    const userAnswer2 = prompt('Do I own a guinea pig named Chocolate? (yes/no)');
    const lowercaseUserAnswer2 = userAnswer2.toLowerCase().trim();
    const trimmedLowercaseUserAnswer2 = lowercaseUserAnswer2.trim();

    const answer2 = isNo(trimmedLowercaseUserAnswer2);

    if (answer2) {
        alert('Wahoo!');
    } else {
        alert('oops.');
    }

    const userAnswer3 = prompt('Is the English Horn from England? (yes/no)');
    const lowercaseUserAnswer3 = userAnswer3.toLowerCase().trim();
    const trimmedLowercaseUserAnswer3 = lowercaseUserAnswer3.trim();

    const answer3 = isNo(trimmedLowercaseUserAnswer3);

    if (answer3) {
        alert('Wahoo!');
    } else {
        alert('oops.');
    }
    alert('Quiz Complete! Your results will be logged to the webpage.');
};