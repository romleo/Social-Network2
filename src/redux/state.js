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
        }

    },
    _callSubscriber() {
        console.log('State changet')//метод
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;      //наш Observer(спостерігач)-це є PATERN (Collback function)
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
    dispath(action) {//{type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                massage: this._state.profilePage.newPostTrext,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostTrext = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostTrext = action.newText;
            this._callSubscriber (this._state);
        }
    }
}

 export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

 export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',newText:text
    }
}





export default store;
window.store = store;

