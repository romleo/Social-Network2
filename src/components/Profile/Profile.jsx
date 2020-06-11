import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div >
            <div>
                <img src='https://www.coalindia.in/new_web/images/bg2_tmp.jpg' alt="background" />
            </div>
            <div>
                ava+description
           </div>
            <MyPosts />

        </div>
    )
}


export default Profile;