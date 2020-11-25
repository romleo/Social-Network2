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
        case ADD_POST:
            let newPost = {
                id: 4,
                massage: state.newPostTrext,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostTrext = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostTrext = action.newText;
            return state;
        default:
            return state;
    }

}
export default profileReducer
// safffadf