import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id:1, massage:'Hi?How are you?',likesCount:20},
        {id:2, massage:'Im,Ok!', likesCount:15}
    ]
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
                <Post massage={postsData[0].massage} likes={postsData[0].likesCount} />
                <Post massage={postsData[1].massage} likes={postsData[1].likesCount} />
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    )
}


export default MyPosts;