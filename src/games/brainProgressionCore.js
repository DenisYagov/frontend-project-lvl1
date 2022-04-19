import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxStart = 50; // maximum starting progression value
const maxAdd = 10; // maximum additive progression value
const maxLen = 10; // maximum progression value
const minLen = 5; // minimum progression value
const rule = 'What number is missing in the progression?';

const progressionGeneration = (lenProgression) => {
  const progression = [];
  // random parameters of progression generation
  const startProgression = getRandomNumber(0, maxStart);
  const addProgression = getRandomNumber(0, maxAdd);
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push((startProgression + i * addProgression).toString());
  }
  return progression;
};

const taskAndRespondCalcGameGeneration = () => {
  const taskAndRespond = [];
  // length of progeression random generation
  const lenProgression = getRandomNumber(minLen, maxLen);
  // random position of hidden item in array generation
  const hiddenItemPosition = getRandomNumber(0, lenProgression);
  // progression generation
  const progression = progressionGeneration(lenProgression);
  // hidden value resceiving and replacing by special symbol
  const hiddenValue = progression[hiddenItemPosition];
  progression[hiddenItemPosition] = '..';
  // function output array preparations
  // taskAndRespond.push(progression.toString().replace(/,/g, ' '));
  taskAndRespond.push(progression.join(' '));
  taskAndRespond.push(hiddenValue);
  return taskAndRespond;
};

const playProgressionGame = () => {
  gameProcess(taskAndRespondCalcGameGeneration, rule);
};

export default playProgressionGame;
