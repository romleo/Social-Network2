import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MAESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, massage: 'Hi?How are you?', likesCount: 20 },
                { id: 2, massage: 'Im,Ok!', likesCount: 15 },
                { id: 3, massage: 'Hey,Bro....', likesCount: 1 }
            ],
            newPostText: 'helloFreand'


        },
        dialogsPage: {
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
        }

    },
    _callSubscriber() {
        console.log('State changet')//метод
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;      //наш Observer(спостерігач)-це є PATERN (Collback function)
    },

    addPost() {
        let newPost = {
            id: 4,
            massage: this._state.profilePage.newPostTrext,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostTrext = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostTrext = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        //{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage,action);
        this._callSubscriber(this._state);

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 4,
        //         massage: this._state.profilePage.newPostTrext,
        //         likesCount: 0
        //     };

        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostTrext = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostTrext = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({ id: 5, message: body });
           
        // }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });




export default store;
window.store = store;

