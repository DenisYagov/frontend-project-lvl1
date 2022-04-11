import readlineSync from 'readline-sync';
import gameProcess from './gameProcessor.js';

const maxStart = 50; // maximum starting progression value
const maxAdd = 10; // maximum additive progression value
const maxLen = 10; // maximum progression value
const minLen = 5; // minimum progression value
const taskStr = 'What number is missing in the progression?';

const isSuccessiveCalcGameTurn = () => {
  const progression = [];
  let hiddenValue = '';
  const startProgression = Math.floor(Math.random() * maxStart);
  const addProgression = Math.floor(Math.random() * maxAdd);
  const lenProgression = minLen + (Math.floor(Math.random() * (maxLen - minLen)));
  const hiddenItemPosition = Math.floor(Math.random() * lenProgression);
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push((startProgression + i * addProgression).toString());
  }
  hiddenValue = progression[hiddenItemPosition];
  progression[hiddenItemPosition] = '..';
  console.log(`Question: ${progression}`.replace(/,/g, ' '));
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === hiddenValue) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenValue}.`);
  return false;
};

const progressionGame = () => {
  gameProcess(isSuccessiveCalcGameTurn, taskStr);
};

export default progressionGame;
