import readlineSync from 'readline-sync';
import Greetings from './cli.js';

const max = 100; // maximum operand value
const maxTry = 3; // maximum tries

const gcdFind = (A, B) => {
  const divs = [];
  let out = 0;
  for (let i = 1; i <= A; i += 1) if (A % i === 0) divs.push(i);
  for (let i = 0; i < divs.length; i += 1) if (B % divs[i] === 0) out = i;
  // console.log(`divs = ${divs}`);
  // console.log(`out = ${out}`);
  return divs[out];
};

const check = (name) => {
  const A = 1 + Math.floor(Math.random() * max);
  const B = 1 + Math.floor(Math.random() * max);
  console.log(`Question : ${A} ${B}`);
  const Answer = readlineSync.question('Answer is : ');
  if (parseInt(Answer, 10) === gcdFind(A, B)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${Answer} is wrong answer ;(. Correct answer was ${gcdFind(A, B)}.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const game3 = () => {
  const name = Greetings();
  console.log('Find the greatest common divisor of given numbers.');
  let flag = 0;
  for (let i = 0; i < maxTry; i += 1) if (check(name) === false) flag = 1;
  if (flag === 0) console.log(`Congratulations, ${name}!`);
};

export default game3;
