// import readlineSync from 'readline-sync';
import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 100; // maximum operand value
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const divFind = (opA) => {
  // array, that contains all divisions with whole remainder
  const divs = [];
  // loop with each diveder check
  for (let i = 1; i < opA; i += 1) {
    if (opA % i === 0) divs.push(i);
  }
  // console.log(`${opA} division by ${divs}`);
  // length of array chek. In case >1 the value is not prime
  if (divs.length > 1) return 'no';
  return 'yes';
};

const taskPrimeGameGeneration = () => {
  const taskAndRespond = [];
  const operandA = getRandomNumber(1, maxOperandValue);
  taskAndRespond.push(operandA);
  taskAndRespond.push(divFind(operandA));
  return taskAndRespond;
};

const primeGame = () => {
  gameProcess(taskPrimeGameGeneration, rule);
};

export default primeGame;
