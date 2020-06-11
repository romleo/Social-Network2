import React from 'react';
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbpafZ7bWE6kTxftgymuV72Alq9vg5xzSTtleeXa1DuWC0TO-5&usqp=CAU" alt="avatar" />
            Post 1
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Post;