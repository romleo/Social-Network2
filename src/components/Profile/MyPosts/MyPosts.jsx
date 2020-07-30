import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator ,addPostActionCreator} from '../../../redux/state';


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(post => <Post massage={post.massage} likes={post.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.upadaateNewPostText(text);
        let action = (updateNewPostTextActionCreator(text));
        props.dispatch(action);
    }

    return (
        <div className={styles.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>

    )
}


export default MyPosts;