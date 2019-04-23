import React from 'react';
import './Button.css';

const numbers = [
    {
        name: 'one',
        text: 1,
    },
    {
        name: 'two',
        text: 2,
    },
    {
        name: 'three',
        text: 3,
    },
    {
        name: 'four',
        text: 4,
    },
    {
        name: 'five',
        text: 5,
    },
    {
        name: 'six',
        text: 6,
    },
    {
        name: 'seven',
        text: 7,
    },
    {
        name: 'eight',
        text: 8,
    },
    {
        name: 'nine',
        text: 9,
    },
]

function NumberButton() {
    return (
        <div>
            {numbers.map(numbersFromMap => {
                return <CalculatorContainer numberProp={numberFromMap} />
            })}
        </div>
    );
}

export default NumberButton;