import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, massage: 'Hi?How are you?', likesCount: 20 },
            { id: 2, massage: 'Im,Ok!', likesCount: 15 },
            { id: 3, massage: 'Hey,Bro....', likesCount: 1 }
        ],
        

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

}


 export let addPost = (postMessage) =>{
    let newPost = {
        id: 4,
        massage: postMessage,
        likesCount : 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;