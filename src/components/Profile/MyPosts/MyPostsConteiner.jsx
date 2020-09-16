import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator ,addPostActionCreator} from '../../../redux/store';
import MyPosts from './MyPosts';


const MyPostsConteiner = (props) => {
    let postsElements =
        props.posts.map(post => <Post massage={post.massage} likes={post.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }


    let onPostChange = (text) => {
        let action = (updateNewPostTextActionCreator(text));
        props.dispatch(action);
    }  

    return (
        <>
        <MyPosts upadaateNewPostText={onPostChange}/>
        </>

    )
}


export default MyPostsConteiner;