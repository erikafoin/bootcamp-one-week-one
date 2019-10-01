import { isYes } from '../src/is-yes.js';
const test = QUnit.test;

test('isYes should return true if the user says yes', function(assert) {
    const userAnswer = 'yes';

    const userAnswerIsYes = isYes(userAnswer);
    assert.equal(userAnswerIsYes, true);
});

test('isYes should return false if the user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsYes = isYes(userAnswer);
    assert.equal(userAnswerIsYes, false);
});
