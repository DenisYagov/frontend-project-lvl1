import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxStart = 50; // maximum starting progression value
const maxAdd = 10; // maximum additive progression value
const maxLen = 10; // maximum progression value
const minLen = 5; // minimum progression value
const rule = 'What number is missing in the progression?';

const progressionGeneration = (startProgression, addProgression, lenProgression) => {
  const progression = [];
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push(startProgression + i * addProgression);
  }
  return progression;
};

const taskAndRespondProgressinGameGeneration = () => {
  // random parameters of progression generation
  const startProgression = getRandomNumber(0, maxStart);
  const addProgression = getRandomNumber(0, maxAdd);
  // length of progeression random generation
  const lenProgression = getRandomNumber(minLen, maxLen);
  // progression generation
  const progression = progressionGeneration(startProgression, addProgression, lenProgression);
  // random position of hidden item in array generation
  const hiddenItemPosition = getRandomNumber(0, lenProgression - 1);
  // hidden value resceiving and replacing by special symbol
  const rightRespond = progression[hiddenItemPosition].toString();
  progression[hiddenItemPosition] = '..';
  const task = progression.join(' ');
  return [task, rightRespond];
};

const playProgressionGame = () => {
  gameProcess(taskAndRespondProgressinGameGeneration, rule);
};

export default playProgressionGame;
