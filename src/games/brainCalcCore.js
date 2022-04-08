import readlineSync from 'readline-sync';

const maxTry = 3; // maximum tries
let userName = 'noname';

const userGreetings = () => {
  userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello ${userName}`);
};

const maxOperandValue = 10; // maximum operand value
const maxOperation = 3; // operation type nomber

const isSuccessiveCalcGameTurn = () => {
  const operandA = Math.floor(Math.random() * maxOperandValue);
  const operandB = Math.floor(Math.random() * maxOperandValue);
  const Op = Math.floor(Math.random() * maxOperation);
  let C = '*';
  switch (Op) {
    case 0: C = '+';
      break;
    case 1: C = '-';
      break;
    default: C = '*';
  }
  console.log(`Question: ${operandA} ${C} ${operandB}`);
  const Answer = readlineSync.question('Answer is : ');
  switch (Op) {
    case 0: { if ((operandA + operandB) === parseInt(Answer, 10)) { console.log('Correct!'); return true; }
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${operandA + operandB}`);
      return false; }
    case 1: { if ((operandA - operandB) === parseInt(Answer, 10)) { console.log('Correct!'); return true; }
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${operandA - operandB}`);
      return false; }
    case 2: { if ((operandA * operandB) === parseInt(Answer, 10)) { console.log('Correct!'); return true; }
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${operandA + operandB}`);
      return false; }
    default: console.log(`${Answer} is wrong answer ;(. Correct answer was ...`);
      return false;
  }
};

const calcGame = () => {
  userGreetings();
  console.log('What is the result of the expression?');
  let isPositiveExit = true;
  for (let i = 0; i < maxTry; i += 1) {
    if (isSuccessiveCalcGameTurn() === false) {
      isPositiveExit = false;
      break;
    }
  }
  if (isPositiveExit === true) console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
