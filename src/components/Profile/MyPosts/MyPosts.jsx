import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(post => <Post massage={post.massage} likes={post.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.upadaateNewPostText(text);
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
                    <button onClick={onAddPost} >Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>

    )
}


export default MyPosts;