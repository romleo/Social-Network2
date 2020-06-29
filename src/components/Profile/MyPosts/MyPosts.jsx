import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    

    let postsElements = props.posts.map(post => <Post massage={post.massage} likes={post.likesCount} />)
    let addPost = ()=> {
        alert('Hello Friend!!');
    } 
    return (
       

        <div className={styles.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={ addPost } >Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>

    )
}


export default MyPosts;