import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator } from './actionCreator.js';
import store from './store.js';

console.log(store.getState());

store.dispatch(addTodoActionCreator('Buy milk'));
console.log(store.getState().todoState);
store.dispatch(addTodoActionCreator('Buy eggs'));
console.log(store.getState().todoState);
store.dispatch(addUserActionCreator('John Doe'));