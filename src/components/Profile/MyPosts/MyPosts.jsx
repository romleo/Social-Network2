import React from 'react';
import styles from '../MyPosts.module.css';

const MyPosts = () => {
    return (

        <div>
            My Posts
          <div>
                New Post
          </div>
            <div className={styles.posts}>
                <div className={styles.item}>
                    Post 1
             </div>
                <div className={styles.item}>
                    Post 2
             </div>
                <div className={styles.item} >
                    Post 3
             </div>
            </div>
        </div>

    )
}


export default MyPosts;