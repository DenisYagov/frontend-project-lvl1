import gameProcess from '../gameProcessor.js';
import getRandomNumber from '../utils.js';

const maxOperandValue = 10; // maximum operand value
const operationTypes = ['+', '-', '*']; // operation values that correspond to operation number
const rule = 'What is the result of the expression?';

const respondValueCalculation = (operandA, opType, operandB) => {
  // respond value string:
  switch (opType) {
    case '+':
      return ((operandA + operandB));
    case '-':
      return ((operandA - operandB));
    case '*':
      return ((operandA * operandB));
    default: throw new Error('unexpected situation Error. Incoming type of operation is out of range');
  }
};

const taskAndRespondCalcGameGeneration = () => {
  // two operands random generation
  const operandA = getRandomNumber(0, maxOperandValue);
  const operandB = getRandomNumber(0, maxOperandValue);
  // operation between operands random generation
  const op = getRandomNumber(0, operationTypes.length - 1);
  // function output preparation
  // task value string:
  const task = `${operandA} ${operationTypes[op]} ${operandB}`;
  // respond value string:
  const rightRespond = respondValueCalculation(operandA, operationTypes[op], operandB);
  return [task, rightRespond.toString()];
};

const playCalcGame = () => {
  gameProcess(taskAndRespondCalcGameGeneration, rule);
};

export default playCalcGame;
