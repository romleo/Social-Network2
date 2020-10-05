import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsConteiner = (props) => {
    return (
        <StoreContext.Consumer>
        { (store) => {
                let state = props.store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = (updateNewPostTextActionCreator(text));
                    store.dispatch(action);
                }
                return <MyPosts upadaateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsConteiner;    