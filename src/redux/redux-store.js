import { combineReducers,createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";


let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});
let store = createStore(reducers);

export default store;