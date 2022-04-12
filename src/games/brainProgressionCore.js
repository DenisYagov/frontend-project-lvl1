import readlineSync from 'readline-sync';
import { gameProcess, randomGenerator } from '../gameProcessor.js';

const maxStart = 50; // maximum starting progression value
const maxAdd = 10; // maximum additive progression value
const maxLen = 10; // maximum progression value
const minLen = 5; // minimum progression value
const rule = 'What number is missing in the progression?';

const isSuccessiveCalcGameTurn = () => {
  // random progression building
  const progression = [];
  let hiddenValue = ''; // hidden value to guess
  // random parameters of progression generation
  const startProgression = randomGenerator(maxStart);
  const addProgression = randomGenerator(maxAdd);
  // length of progeression random generation
  const lenProgression = minLen + randomGenerator(maxLen - minLen);
  // random position of hidden item in array generation
  const hiddenItemPosition = randomGenerator(lenProgression);
  // progression array generation
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push((startProgression + i * addProgression).toString());
  }
  // hidden value resceiving and replacing by special symbol
  hiddenValue = progression[hiddenItemPosition];
  progression[hiddenItemPosition] = '..';
  // dialog with gamer and result checking
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
  gameProcess(isSuccessiveCalcGameTurn, rule);
};

export default progressionGame;
