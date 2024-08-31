import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./constants.js"

const intialState = {
    todos: []
}

export default function todoReducer(state = intialState, action) {
    if(action.type === ADD_TODO) {
        return {
            ...state,
            todos: [
                ...state.todos,
                { id: Date.now(), text: action.payload, completed: false }
            ]
        }
    } else if (action.type === REMOVE_TODO) {
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }
    } else if (action.type === TOGGLE_TODO) {
        return {
            ...state,
            todos: state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        }
    } else {
        return state;
    }
}