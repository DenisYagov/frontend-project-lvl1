import readlineSync from 'readline-sync';

const maxTry = 3; // maximum tries

export const gameProcess = (isSuccessiveGameTurn, rule) => {
  // initial dialog
  // user greetings and input name
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  // variable for final dialog
  // loop with several tasks
  for (let i = 0; i < maxTry; i += 1) {
    if (isSuccessiveGameTurn() === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  // final dialog, if player wins
  console.log(`Congratulations, ${userName}!`);
};

export const randomGenerator = (max) => Math.floor(Math.random() * max);

// export default gameProcess;
