import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className='dialog '>
                    Bogdan
                </div>
                <div className='dialog '>
                    Roman
                </div>
                <div className='dialog'>
                    Volodymyr
                </div>
                <div className='dialog'>
                    Oleksiy
                </div>
                <div className='dialog'>
                    Yriy
                </div>
            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">Hos are you?</div>
                <div className="message">HELLO FRIEND</div>
                <div className="message">YO!</div>
            </div>
        </div>
    )
}

export default Dialogs;