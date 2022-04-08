import readlineSync from 'readline-sync';

export let userName;

export const userGreetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
