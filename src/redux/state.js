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
    getState(){
       return this._state ;
    },
    rerenderEntireTree() {
        console.log('State changet')//метод
    },
    addPost() {
        let newPost = {
            id: 4,
            massage: state.profilePage.newPostTrext,
            likesCount: 0
        };

        state.profilePage.posts.push(newPost);
        state.profilePage.newPostTrext = '';

        rerenderEntireTree(state);
    },
    updateNewPostText(newText) {
        state.profilePage.newPostTrext = newText;
        rerenderEntireTree(state);
    },
    subscribe(observer) {
        rerenderEntireTree = observer;      //наш Observer(спостерігач)-це є PATERN (Collback function)
    },


}







window.store = store;

export default store;