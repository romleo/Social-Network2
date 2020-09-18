import React from 'react';
import styles from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';

const Profile = (props) => {

    return (
        <div >
            <ProfileInfo />
            <MyPostsConteiner  store={props.store }/>
       </div>
    )
}


export default Profile;