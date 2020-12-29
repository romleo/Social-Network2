import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


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