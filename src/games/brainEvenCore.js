import readlineSync from 'readline-sync';
import { gameProcess, randomGenerator } from '../gameProcessor.js';

// maximum value
const maxOperandValue = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isSuccessiveEvenGameTurn = () => {
  // random task generation and dialog with user
  const operandA = randomGenerator(maxOperandValue);
  let correctAnswer = 'yes';
  console.log(`Question: ${operandA}`);
  const answer = readlineSync.question('Answer is : ');
  // check if the answer is correct and respond the result
  if ((answer.toLowerCase() === 'yes') && ((operandA % 2) === 0)) return true;
  if ((answer.toLowerCase() === 'no') && ((operandA % 2) !== 0)) return true;
  if (answer.toLowerCase() === 'yes') correctAnswer = 'no';
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const evenGame = () => {
  gameProcess(isSuccessiveEvenGameTurn, rule);
};

export default evenGame;
