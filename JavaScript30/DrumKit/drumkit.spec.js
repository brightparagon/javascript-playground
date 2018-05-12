const playSound = require('./drumkit').playSound;
const removeTransition = require('./drumkit').removeTransition;

test('playSound should be a function', () => {
  expect(typeof playSound).toBe('function');
});

test('removeTransition should be a function', () => {
  expect(typeof removeTransition).toBe('function');
});
