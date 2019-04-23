import React from 'react';
import ActionButtons from './ActionButton';
import NumberButtons from './NumberButton'

const Buttons = (props) => {
    return (
        <div className='buttonsContainer'>
            <div className='actionButtonsContainer'>
                <ActionButton buttonType={'÷'}/>
                <ActionButton buttonType={'×'}/>
                <ActionButton buttonType={'−'}/>
                <ActionButton buttonType={'+'}/>
                <ActionButton buttonType={'='}/>
            </div>
            <div className='numberButtonsContainer'>
                <NumberButton buttonNumber={'clear'}/>
            </div>
        </div>
    );
}
	
export default Buttons; 