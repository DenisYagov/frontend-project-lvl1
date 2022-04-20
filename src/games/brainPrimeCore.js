// import readlineSync from 'readline-sync';
import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 100; // maximum operand value
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const divisionCheck = (opA, divider) => (opA % divider === 0);

const taskAndRespondPrimeGameGeneration = () => {
  const operandA = getRandomNumber(1, maxOperandValue);
  const task = operandA;
  let rightRespond;
  // loop with each diveder check
  for (let i = 2; i < operandA; i += 1) {
    if (divisionCheck(operandA, i)) {
      rightRespond = 'no';
      return [task, rightRespond];
    }
  }
  rightRespond = 'yes';
  return [task, rightRespond];
};

const playPrimeGame = () => {
  gameProcess(taskAndRespondPrimeGameGeneration, rule);
};

export default playPrimeGame;
