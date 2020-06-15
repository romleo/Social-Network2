import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    Bogdan
                </div>
                <div className={styles.dialog + ' ' + styles.active}>
                    Roman
                </div>
                <div className={styles.dialog}>
                    Volodymyr
                </div>
                <div className={styles.dialog}>
                    Oleksiy
                </div>
                <div className={styles.dialog}>
                    Yriy
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>Hos are you?</div>
                <div className={styles.message}>HELLO FRIEND</div>
                <div className={styles.message}>YO!</div>
            </div>
        </div>
    )
}

export default Dialogs;