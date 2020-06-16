import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img classNamee={styles.images} src='https://www.coalindia.in/new_web/images/bg2_tmp.jpg' alt="background" />
            </div>
            <div className={styles.descriptionBlock}>
                ava+description
           </div>
        </div>
    )
}


export default ProfileInfo;