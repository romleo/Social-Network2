const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MAESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'HELLO FRIEND' },
        { id: 4, message: 'Yo!!' }
    ],
    dialogs: [
        { id: 1, name: 'Bogdan' },
        { id: 2, name: 'Roman' },
        { id: 3, name: 'Volodymyr' },
        { id: 4, name: 'Oleksiy' },
        { id: 5, name: 'Yriy' }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 5, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator =() =>({type: SEND_MAESSAGE})
export const updateNewMessageBodyCreator =(body)=>({type: UPDATE_NEW_MESSAGE_BODY, body:body})

export default dialogsReducer;