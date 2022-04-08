import readlineSync from 'readline-sync';

let userName = 'noname';

const userGreetings = () => {
  userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello ${userName}`);
};

const maxStart = 50; // maximum starting progression value
const maxAdd = 10; // maximum additive progression value
const maxLen = 10; // maximum progression value
const minLen = 5; // minimum progression value
const maxTry = 3; // maximum task number

const isSuccessiveCalcGameTurn = () => {
  const progression = [];
  let hiddenValue = '';
  const startProgression = Math.floor(Math.random() * maxStart);
  const addProgression = Math.floor(Math.random() * maxAdd);
  const lenProgression = minLen + (Math.floor(Math.random() * (maxLen - minLen)));
  const hiddenItemPosition = Math.floor(Math.random() * lenProgression);
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push((startProgression + i * addProgression).toString());
  }
  hiddenValue = progression[hiddenItemPosition];
  progression[hiddenItemPosition] = '..';
  console.log(`question : ${progression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === hiddenValue) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenValue}.`);
  return false;
};

const progressionGame = () => {
  userGreetings();
  console.log('What number is missing in the progression?');

  let isGameSuccess = true;
  for (let i = 0; i < maxTry; i += 1) {
    if (isSuccessiveCalcGameTurn() === false) isGameSuccess = false;
  }
  if (isGameSuccess === true) console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
