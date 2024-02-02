import { add } from './add';
import { subtract } from './subtract';
import { multiply } from './multiply';
import { divide } from './divide';

const firstOperand = Number(process.argv[2]);
const secondOperand = Number(process.argv[4]);
const operation = process.argv[3];

switch (operation) {
  case 'plus':
    console.log('result:', add(firstOperand, secondOperand));
    break;
  case 'minus':
    console.log('result:', subtract(firstOperand, secondOperand));
    break;
  case 'over':
    console.log('result:', multiply(firstOperand, secondOperand));
    break;
  case 'time':
    console.log('result:', divide(firstOperand, secondOperand));
    break;
}
