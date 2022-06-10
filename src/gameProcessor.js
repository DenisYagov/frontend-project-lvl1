import readlineSync from 'readline-sync';

const maxTry = 3; // maximum tries

const gameProcess = (taskGeneration, rule) => {
  // initial dialog
  // user greetings and input name
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  // loop with several tasks
  for (let i = 0; i < maxTry; i += 1) {
    const [task, respond] = taskGeneration();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === respond.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${respond}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  // final dialog, if player wins
  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;
