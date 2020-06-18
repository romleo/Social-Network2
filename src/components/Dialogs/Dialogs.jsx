import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
    

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElaments = props.messages
        .map(message => <Message message={message.message} />);

    return (
        <div>
            <img className={styles.img} src='https://data.whicdn.com/images/22492918/original.jpg' />
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElaments}
                </div>
            </div>
        </div>

    )
}

export default Dialogs;