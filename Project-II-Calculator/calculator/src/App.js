import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div className="calc-wrapper">
    <div className="calc-display">
    <CalculatorDisplay text={'0'}/>
    </div>
      <div className="calc-action">
      <ActionButton text={'clear'} buttonStyle={'action'} />
      </div>

      <div className="number-buttons">
      <NumberButton text={'7'} buttonStyle={'number'} />
      <NumberButton text={'8'} buttonStyle={'number'} />
      <NumberButton text={'9'} buttonStyle={'number'} />
      <NumberButton text={'4'} buttonStyle={'number'} />
      <NumberButton text={'5'} buttonStyle={'number'} />
      <NumberButton text={'6'} buttonStyle={'number'} />
      <NumberButton text={'1'} buttonStyle={'number'} />
      <NumberButton text={'2'} buttonStyle={'number'} />
      <NumberButton text={'3'} buttonStyle={'number'} />
      </div>

      <div className="calc-action">
      <ActionButton text={'0'} buttonStyle={'action'} />
      </div>

      <div className="function-buttons">
      <NumberButton text={'÷'} buttonStyle={'function'} />
      <NumberButton text={'×'} buttonStyle={'function'} />
      <NumberButton text={'-'} buttonStyle={'function'} />
      <NumberButton text={'+'} buttonStyle={'function'} />
      <NumberButton text={'='} buttonStyle={'function'} />
      </div>
    </div>
  );
};

export default App;
