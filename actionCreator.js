import { ADD_TODO, ADD_USER, REMOVE_TODO, TOGGLE_TODO } from "./constants.js";

// functions that return an action object are called action creators
export function addTodoActionCreator(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function removeTodoActionCreator(todoId) {
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
}

export function toggleTodoActionCreator(todoId) {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}

export function addUserActionCreator(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}