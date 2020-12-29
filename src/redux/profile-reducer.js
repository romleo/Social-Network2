import { tsPropertySignature } from "@babel/types";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, massage: 'Hi?How are you?', likesCount: 20 },
        { id: 2, massage: 'Im,Ok!', likesCount: 15 },
        { id: 3, massage: 'Hey,Bro....', likesCount: 1 }
    ],
    newPostText: 'helloFreand'


};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 4,
                massage: state.newPostTrext,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostTrext = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
            stateCopy.newPostTrext = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}
export default profileReduce
cvxlll,