import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div className={styles.postBlock}>
            <h3>My Posts</h3>
          <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={styles.posts}>
                <Post massage='Hi?How are you?' likes='20' />
                <Post massage='Im ,Ok!!' likes='15' />
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    )
}


export default MyPosts;