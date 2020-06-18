import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        { id: 1, massage: 'Hi?How are you?', likesCount: 20 },
        { id: 2, massage: 'Im,Ok!', likesCount: 15 },
        { id: 3, massage: 'Hey,Bro....', likesCount: 1 }
    ]

    let postsElements = posts.map(post => <Post massage={post.massage} likes={post.likesCount} />)
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
                {postsElements}
            </div>
        </div>

    )
}


export default MyPosts;