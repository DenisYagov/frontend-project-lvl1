import readlineSync from 'readline-sync';

let userName = 'noname';

const userGreetings = () => {
  userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello ${userName}`);
};

const maxOperandValue = 100; // maximum operand value
const maxTry = 3; // maximum tries

const gcdFind = (operandA, operandB) => {
  const divs = [];
  let out = 0;
  for (let i = 1; i <= operandA; i += 1) if (operandA % i === 0) divs.push(i);
  for (let i = 0; i < divs.length; i += 1) if (operandB % divs[i] === 0) out = i;
  // console.log(`divs = ${divs}`);
  // console.log(`out = ${out}`);
  return divs[out];
};

const isSuccessiveGcdGameTurn = () => {
  const operandA = 1 + Math.floor(Math.random() * maxOperandValue);
  const operandB = 1 + Math.floor(Math.random() * maxOperandValue);
  console.log(`Question: ${operandA} ${operandB}`);
  const Answer = readlineSync.question('Answer is : ');
  if (parseInt(Answer, 10) === gcdFind(operandA, operandB)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${Answer} is wrong answer ;(. Correct answer was ${gcdFind(operandA, operandB)}.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const gcdGame = () => {
  userGreetings();
  console.log('Find the greatest common divisor of given numbers.');
  let isPositiveExit = true;
  for (let i = 0; i < maxTry; i += 1) {
    if (isSuccessiveGcdGameTurn() === false) {
      isPositiveExit = false;
      break;
    }
  }
  if (isPositiveExit === true) console.log(`Congratulations, ${userName}!`); else console.log(`Let's try again, ${userName}!`);
};

export default gcdGame;
