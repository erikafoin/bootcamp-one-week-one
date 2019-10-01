import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');




myButton.onclick = () => {
    alert('Welcome to my quiz!');
    const myConfirmation = confirm('Do you want to take my quiz?'); //returns true or false//
    console.log(myConfirmation);

    const userAnswer = prompt('Have I been to Thailand? (yes/no)');
    const lowercaseUserAnswer = userAnswer.toLowerCase().trim();
    const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();

    const userIsCorrect = isCorrect(trimmedLowercaseUserAnswer);

    if (userIsCorrect) {
        alert('Wahoo!');
    } else {
        alert('oops.');
    }

    const userAnswer2 = prompt('Do I own a guinea pig named Chocolate? (yes/no)');
    const lowercaseUserAnswer2 = userAnswer2.toLowerCase().trim();
    const trimmedLowercaseUserAnswer2 = lowercaseUserAnswer2.trim();

    const userIsCorrect2 = isCorrect(trimmedLowercaseUserAnswer2);

    if (userIsCorrect2) {
        alert('Wahoo!');
    } else {
        alert('oops.');
    }

    const userAnswer3 = prompt('Is the English Horn from England? (yes/no)');
    const lowercaseUserAnswer3 = userAnswer3.toLowerCase().trim();
    const trimmedLowercaseUserAnswer3 = lowercaseUserAnswer3.trim();

    const userIsCorrect3 = isCorrect(trimmedLowercaseUserAnswer3);

    if (userIsCorrect3) {
        alert('Wahoo!');
    } else {
        alert('oops.');
    }
};