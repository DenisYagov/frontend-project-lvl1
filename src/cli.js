import readlineSync from '../readline-sync/lib/readline-sync.js';

const Greetings = () => {
const name = readlineSync.question('May I have your name?  ');
console.log('Hello ' + name);
}

export default Greetings;
