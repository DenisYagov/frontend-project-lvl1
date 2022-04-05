import readlineSync from 'readline-sync';
import Greetings from './cli.js';

const max = 10; // maximum operand value
const maxOp = 3; // operation type nomber

const check = () => {
  const A = Math.floor(Math.random() * max);
  const B = Math.floor(Math.random() * max);
  const Op = Math.floor(Math.random() * maxOp);
  let C = '*';
  switch (Op) {
    case 0: C = '+';
      break;
    case 1: C = '-';
      break;
    default: C = '*';
  }
  console.log(`Question: ${A} ${C} ${B}`);
  const Answer = readlineSync.question('Answer is : ');
  switch (Op) {
    case 0: { if ((A + B) === parseInt(Answer, 10)) { console.log('Correct!'); return true; }
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${A + B}`);
      return false; }
    case 1: { if ((A - B) === parseInt(Answer, 10)) { console.log('Correct!'); return true; }
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${A - B}`);
      return false; }
    case 2: { if ((A * B) === parseInt(Answer, 10)) { console.log('Correct!'); return true; }
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${A + B}`);
      return false; }
    default: console.log(`${Answer} is wrong answer ;(. Correct answer was ...`);
      return false;
  }
};

const game2 = () => {
  const name = Greetings();
  console.log('What is the result of the expression?');
  let flag = 0;
  if (check() === false) flag = 1;
  if (check() === false) flag = 1;
  if (check() === false) flag = 1;
  if (flag === 0) console.log(`Congratulations, ${name}`);
};

export default game2;
