import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogsItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    let dialogsData = [
        { id: 1, name: 'Bogdan' },
        { id: 2, name: 'Roman' },
        { id: 3, name: 'Volodymyr' },
        { id: 4, name: 'Oleksiy' },
        { id: 5, name: 'Yriy' }
    ]
    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'HELLO FRIEND' },
        { id: 4, message: 'Yo!!' }
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogsItems name={dialog.name} id={dialog.id} />);

    let messagesElaments = messagesData
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