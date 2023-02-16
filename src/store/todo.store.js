import Todo from "../todo/models/todo.model";

const Filters = {
    All: 'All',
    completed: 'completed',
    Pending: 'pending'
}

const state = {
    todo : [
        new Todo('Piedra blnanca'),
        new Todo('Piedra blnanca'),
        new Todo('Piedra blnanca'),
    ],
    filter : Filters.All
}

const initStore = () => {
    console.log(state)
    console.log('InitStore');
}

export default {
    initStore
}