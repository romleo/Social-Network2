import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogsItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>   
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}
const Dialogs = () => {
let dialogsData = [
    {id:1, name:'Bogdan'},
    {id:2, name:'Roman'},
    {id:3, name:'Volodymyr'},
    {id:4, name:'Oleksiy'},
    {id:5, name:'Yriy'}
]
let messagesData = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you?'},
    {id:3, message:'HELLO FRIEND'},
    {id:4, message:'Yo!!'}
]
    return (
        <div>
            <img className={styles.img} src='https://data.whicdn.com/images/22492918/original.jpg' />
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogsItems name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogsItems name={dialogsData[4].name} id={dialogsData[4].id} />
                </div>
                <div className={styles.messages}>
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                    <Message message={messagesData[3].message}/>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;