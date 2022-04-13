import readlineSync from 'readline-sync';

const maxTry = 3; // maximum tries

const gameProcess = (taskGeneration, rule) => {
  // initial dialog
  // user greetings and input name
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  // let taskAndRespond;

  // loop with several tasks
  for (let i = 0; i < maxTry; i += 1) {
    const taskAndRespond = taskGeneration();
    console.log(`Question: ${taskAndRespond[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === taskAndRespond[1].toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${taskAndRespond[1]}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  // final dialog, if player wins
  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;