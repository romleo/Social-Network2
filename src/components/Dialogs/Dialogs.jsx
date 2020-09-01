import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let newMessageBody = state.newMessageBody
        .map(message => <Message message={message.message} />);



    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElaments = props.state.messages
        .map(message => <Message message={message.message} />);

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator());
    }
    let onNewMessageChange = (event)=>{
        let body= event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div>
            <img className={styles.img} src='https://data.whicdn.com/images/22492918/original.jpg' />
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div> {messagesElaments}</div>
                </div>
                <div>
                    <textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} >Send Mgessage</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;