import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
// import StoreContext from '../../../StoreContext';
;

// const MyPostsConteiner = (props) => {
//     return (
//         <StoreContext.Consumer>
//         { (store) => {
//                 let state = props.store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//                 let onPostChange = (text) => {
//                     let action = (updateNewPostTextActionCreator(text));
//                     store.dispatch(action);
//                 }
//                 return <MyPosts upadaateNewPostText={onPostChange}
//                                 addPost={addPost}
//                                 posts={store.getState().profilePage.posts}
//                                 newPostText={store.getState().profilePage.newPostText} />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatcToProps = (dispatch) => {
    return {
        upadateNewPostTex : (text) =>{
            let action = (updateNewPostTextActionCreator(text));
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator()); 
        }  
    }
}

const MyPostsConteiner = connect(mapStateToProps,mapDispatcToProps) (MyPosts);

export default MyPostsConteiner;    