import readlineSync from 'readline-sync';

// maximum value
const maxValue = 100;
let userName = 'noname';

const userGreetings = () => {
  userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
};

const isSuccessiveEvenGameTurn = () => {
  const operandA = Math.floor(Math.random() * maxValue);
  let correctAnswer = 'yes';
  console.log(`Question : ${operandA}`);
  const Answer = readlineSync.question('Answer is : ');
  if ((Answer.toLowerCase() === 'yes') && ((operandA % 2) === 0)) return true;
  if ((Answer.toLowerCase() === 'no') && ((operandA % 2) !== 0)) return true;
  if (Answer.toLowerCase() === 'yes') correctAnswer = 'no';
  console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${userName}`);
  return false;
};

const evenGame = () => {
  let Flag = 0;
  console.log('Welcome to the Brain Games!');
  userGreetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 3;
  while (i > 0) {
    if (isSuccessiveEvenGameTurn() === true) {
      i -= 1;
      console.log('Correct!');
    } else {
      i -= 1;
      Flag = 1;
    }
  }
  if (Flag === 0) console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
