import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';



const DialogsContainer = () => {
    
    return <StoreContext.Consumer>
        {(store) => {
            let state  = store.getstate().dialogsPage;
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

const SuperDialogsConteiner =  connect(mapStateToProps,mapDispatcToProps)(Dialogs) ; 

let mapStateToProps = (state) =>{
    return {
        dialogsPage :state.dialogsPage
    }
}
let mapDispatcToProps = (state) =>{
    return {
        updateNewMessageBody: () => {
            store.dispatch(sendMessageCreator());
        } ,
        sendMessage : () => {
            store.dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export default DialogsContainer;