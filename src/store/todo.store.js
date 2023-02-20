import Todo from "../todo/models/todo.model";

export const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todo: [
        new Todo('Piedra blnanca'),
        new Todo('Piedra roja'),
        new Todo('Piedra amarilla'),
    ],
    filter: Filters.All
}

const initStore = () => {
    loadStore();
    console.log('InitStore ++');
}

const loadStore = () => {
    if( !localStorage.getItem('store') ) return;
    const {todo = [], filter = Filters.All} = JSON.parse(localStorage.getItem('store'));
    state.todo = todo;
    state.filter = filter || Filters.All;
}

const saveToLocalStorage = () => {
    localStorage.setItem('store', JSON.stringify(state));
}


const getTodo = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [... state.todo];
        case Filters.Completed:
            return state.todo.filter(todo => todo.done);
        case Filters.Pending:
            return state.todo.filter(todo => !todo.done);
        default:
            throw Error(`Option ${filter} is not valid.`);
    }
}

const addTodo = (description) => {
    if(!description || description === '') throw Error('The field description is required');
    state.todo.push(new Todo(description));
    saveToLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todo = state.todo.map( todo => {
        if (todo.id === todoId) 
            todo.done = !todo.done
        return todo;
    });
    saveToLocalStorage();
}

const deleteTodo = (todoId) => {
    state.todo = state.todo.filter( todo => todo.id !== todoId);
    saveToLocalStorage();
}

const deleteCompleted = () => {
    state.todo = state.todo.filter( todo => !todo.done );
    saveToLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    if(!Object.keys(Filters).includes(newFilter))
        throw Error(`Option ${newFilter} is not valid.`);
    state.filter = newFilter;
    saveToLocalStorage();
}

const getCurrentFilter = () => state.filter;

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodo,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}