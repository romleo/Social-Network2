const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
export default profileReducer;