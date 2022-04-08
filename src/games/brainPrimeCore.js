import readlineSync from 'readline-sync';

let userName = 'noname';

const userGreetings = () => {
  userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello ${userName}`);
};

const maxOperandValue = 100; // maximum operand value
const maxTry = 3; // maximum tries

const divFind = (opA) => {
  const divs = [];
  for (let i = 1; i < opA; i += 1) if (opA % i === 0) divs.push(i);
  // console.log(`${opA} division by ${divs}`);
  if (divs.length > 1) return 'no';
  return 'yes';
};

const isSuccessivePrimeGameTurn = () => {
  const operandA = Math.floor(Math.random() * maxOperandValue);
  console.log(`Question : ${operandA}`);
  const userAnswer = readlineSync.question('Answer is : ');
  if (userAnswer.toLowerCase() === divFind(operandA)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${divFind(operandA)}.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const primeGame = () => {
  userGreetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let isPositiveExit = true;
  for (let i = 0; i < maxTry; i += 1) {
    if (isSuccessivePrimeGameTurn() === false) {
      isPositiveExit = false;
      break;
    }
  }
  if (isPositiveExit === true) console.log(`Congratulations, ${userName}!`);
};

export default primeGame;
