import readlineSync from 'readline-sync';

// maximum value
const max = 100;
let name = 'noname';

const Greetings = () => {
  name = readlineSync.question('May I have your name?  ');
  console.log(`Hello ${name}`);
};

const Check = () => {
  const A = Math.floor(Math.random() * max);
  let correctAnswer = 'yes';
  console.log(`question : ${A}`);
  const Answer = readlineSync.question('Answer is : ');
  if ((Answer.toLowerCase() === 'yes') && ((A % 2) === 0)) return true;
  if ((Answer.toLowerCase() === 'no') && ((A % 2) !== 0)) return true;
  if (Answer.toLowerCase() === 'yes') correctAnswer = 'no';
  console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}`);
  return false;
};

const game1 = () => {
  let Flag = 0;
  console.log('Welcome to the Brain Games!');
  Greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 3;
  while (i > 0) {
    if (Check() === true) {
      i -= 1;
      console.log('Correct!');
    } else {
      i -= 1;
      Flag = 1;
    }
  }
  if (Flag === 0) console.log(`Congratulations, ${name}!`);
};

export default game1;
