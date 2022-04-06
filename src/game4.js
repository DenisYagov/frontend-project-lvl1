import readlineSync from 'readline-sync';
import Greetings from './cli.js';

const maxStart = 50; // maximum starting progression value
const maxAdd = 10; // maximum additive progression value
const maxLen = 10; // maximum progression value
const minLen = 5; // minimum progression value
const maxTry = 3; // maximum task number

const check = () => {
  const progression = [];
  let hidden = '';
  const startProgression = Math.floor(Math.random() * maxStart);
  const addProgression = Math.floor(Math.random() * maxAdd);
  const lenProgression = minLen + (Math.floor(Math.random() * (maxLen - minLen)));
  const hiddenItem = Math.floor(Math.random() * lenProgression);
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push((startProgression + i * addProgression).toString());
  }
  hidden = progression[hiddenItem];
  progression[hiddenItem] = '..';
  console.log(`question : ${progression}`);
  const Answer = readlineSync.question('Your answer: ');
  if (Answer === hidden) {
    console.log('Correct!');
    return true;
  }
  console.log(`${Answer} is wrong answer ;(. Correct answer was ${hidden}.`);
  return false;
};

const game4 = () => {
  const name = Greetings();
  console.log('What number is missing in the progression?');

  let flag = 0;
  for (let i = 0; i < maxTry; i += 1) if (check() === false) flag = 1;
  if (flag === 0) console.log(`Congratulations, ${name}!`);
};

export default game4;
