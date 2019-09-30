// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isCorrect } from '../functions.js';
const test = QUnit.test;

test('should return true if the user says yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});

test('isCorrect should return false if the user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isCorrect(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});