// import readlineSync from 'readline-sync';
import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 100; // maximum operand value
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (opA) => {
  for (let i = 2; i < opA; i += 1) {
    if (opA % i === 0) {
      return false;
    }
  }
  return true;
};

const taskAndRespondPrimeGameGeneration = () => {
  const task = getRandomNumber(1, maxOperandValue);
  const rightRespond = isPrimeNumber(task) ? 'yes' : 'no';
  return [task, rightRespond];
};

const playPrimeGame = () => {
  gameProcess(taskAndRespondPrimeGameGeneration, rule);
};

export default playPrimeGame;
