import React from 'react';
import NumberButton from './NumberButton';
import './Button.css';

const Number = props => {
    return (
        <div className="calculator-button">
        <button>{props.numberProp.text}</button>
        </div>
    )
}

export default CalculatorContainer;