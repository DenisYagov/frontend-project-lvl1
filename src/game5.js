import readlineSync from 'readline-sync';
import Greetings from './cli.js';

const max = 100; // maximum operand value
const maxTry = 3; // maximum tries

const divFind = (A) => {
  const divs = [];
  for (let i = 1; i < A; i += 1) if (A % i === 0) divs.push(i);
  console.log(`${A} division by ${divs}`);
  if (divs.length > 1) return 'no';
  return 'yes';
};

const check = (name) => {
  const A = Math.floor(Math.random() * max);
  console.log(`Question : ${A}`);
  const Answer = readlineSync.question('Answer is : ');
  if (Answer.toLowerCase() === divFind(A)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${Answer} is wrong answer ;(. Correct answer was ${divFind(A)}.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const game5 = () => {
  const name = Greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let flag = 0;
  for (let i = 0; i < maxTry; i += 1) if (check(name) === false) flag = 1;
  if (flag === 0) console.log(`Congratulations, ${name}!`);
};

export default game5;
