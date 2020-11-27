import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';



const DialogsContainer = () => {
    
    return <StoreContext.Consumer>
        {(store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={store.getstate().dialogsPage} />
        }
        }
    </StoreContext.Consumer>

}

export default DialogsContainer;