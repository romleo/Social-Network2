import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElements = props.posts.map(post => <Post massage={post.massage} likes={post.likesCount} />)
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost (text);
        newPostElement.current.value = "  " ;
    }
    let newPostElement = React.createRef();
    return (


        <div className={styles.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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