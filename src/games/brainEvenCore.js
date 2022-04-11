import readlineSync from 'readline-sync';
import { gameProcess } from './gameProcessor.js';

// maximum value
const maxValue = 100;
const taskStr = 'Answer "yes" if the number is even, otherwise answer "no".';

const isSuccessiveEvenGameTurn = () => {
  const operandA = Math.floor(Math.random() * maxValue);
  let correctAnswer = 'yes';
  console.log(`Question: ${operandA}`);
  const answer = readlineSync.question('Answer is : ');
  if ((answer.toLowerCase() === 'yes') && ((operandA % 2) === 0)) return true;
  if ((answer.toLowerCase() === 'no') && ((operandA % 2) !== 0)) return true;
  if (answer.toLowerCase() === 'yes') correctAnswer = 'no';
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const evenGame = () => {
  gameProcess(isSuccessiveEvenGameTurn, taskStr);
};

export default evenGame;
