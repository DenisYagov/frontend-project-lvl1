import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxStart = 50; // maximum starting progression value
const maxAdd = 10; // maximum additive progression value
const maxLen = 10; // maximum progression value
const minLen = 5; // minimum progression value
const rule = 'What number is missing in the progression?';

const taskCalcGameGeneration = () => {
  const taskAndRespond = [];
  const progression = [];
  // random parameters of progression generation
  const startProgression = getRandomNumber(0, maxStart);
  const addProgression = getRandomNumber(0, maxAdd);
  // console.log(`startProgression = ${startProgression}`);
  // console.log(`addProgression = ${addProgression}`);
  // length of progeression random generation
  const lenProgression = getRandomNumber(minLen, maxLen);
  // random position of hidden item in array generation
  const hiddenItemPosition = getRandomNumber(0, lenProgression);
  // progression array generation
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push((startProgression + i * addProgression).toString());
  }
  // hidden value resceiving and replacing by special symbol
  const hiddenValue = progression[hiddenItemPosition];
  progression[hiddenItemPosition] = '..';
  // function output array preparations
  taskAndRespond.push(progression.toString().replace(/,/g, ' '));
  taskAndRespond.push(hiddenValue);
  return taskAndRespond;
};

const progressionGame = () => {
  gameProcess(taskCalcGameGeneration, rule);
};

export default progressionGame;
