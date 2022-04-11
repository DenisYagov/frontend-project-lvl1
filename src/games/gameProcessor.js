import readlineSync from 'readline-sync';

let userName;
const maxTry = 3; // maximum tries

const userGreetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const gameProcess = (isSuccessiveCalcGameTurn, startStr) => {
  userGreetings();
  console.log(startStr);
  let isPositiveExit = true;
  for (let i = 0; i < maxTry; i += 1) {
    if (isSuccessiveCalcGameTurn() === false) {
      isPositiveExit = false;
      break;
    }
  }
  if (isPositiveExit === true) console.log(`Congratulations, ${userName}!`); else console.log(`Let's try again, ${userName}!`);
};

export default gameProcess;
