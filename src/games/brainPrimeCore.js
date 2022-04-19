// import readlineSync from 'readline-sync';
import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 100; // maximum operand value
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const divFind = (opA) => {
  // loop with each diveder check
  for (let i = 2; i < opA; i += 1) {
    if (opA % i === 0) return 'no';
  }
  return 'yes';
};

const taskAndRespondPrimeGameGeneration = () => {
  const taskAndRespond = [];
  const operandA = getRandomNumber(1, maxOperandValue);
  taskAndRespond.push(operandA);
  taskAndRespond.push(divFind(operandA));
  return taskAndRespond;
};

const playPrimeGame = () => {
  gameProcess(taskAndRespondPrimeGameGeneration, rule);
};

export default playPrimeGame;
