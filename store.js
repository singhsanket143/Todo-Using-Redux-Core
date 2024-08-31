import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer.js";
import userReducer from "./userReducer.js";


const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer
})

const store = createStore(rootReducer); // TODO: add the relevant reducer

store.subscribe(() => {
    console.log(store.getState());
});

export default store;