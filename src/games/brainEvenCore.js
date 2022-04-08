import readlineSync from 'readline-sync';
import { userGreetings, userName } from '../cli.js';

// maximum value
const maxValue = 100;

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
  let isPositiveExit = true;
  userGreetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 3;
  while (i > 0) {
    if (isSuccessiveEvenGameTurn() === true) {
      i -= 1;
      console.log('Correct!');
    } else {
      i -= 1;
      isPositiveExit = false;
      break;
    }
  }
  if (isPositiveExit === true) console.log(`Congratulations, ${userName}!`); else console.log(`Let's try again, ${userName}!`);
};

export default evenGame;
