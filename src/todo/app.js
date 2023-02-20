import html from './app.html?raw';
import todoStore, { Filters } from "../store/todo.store"
import { renderTodo, clearHTML, renderCompleted  } from './uses-cases';

const elementsIDs = {
    todoList : '.todo-list',
    inputTodoDescription: '#new-todo-input',
    inputClearCompleted: '.clear-completed',
    filtersAnchor : '.filtro',
    labelCompleted : '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
const app = (elementId) => {
    const displayTodos = () => {
        clearHTML(elementsIDs.todoList);
        const todos = todoStore.getTodo( todoStore.getCurrentFilter() );
        renderTodo( elementsIDs.todoList ,todos );
        renderCompleted(elementsIDs.labelCompleted);
    }
    
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
        displayTodos();
    })();
    
    const inputDescription = document.querySelector(elementsIDs.inputTodoDescription);
    const todosUL = document.querySelector(elementsIDs.todoList);
    const inputClearCompleted = document.querySelector(elementsIDs.inputClearCompleted);
    const filtersULs = document.querySelectorAll(elementsIDs.filtersAnchor);
    
    inputDescription.addEventListener('keyup', (e)=>{
        if(e.keyCode !== 13 || e.target.value.trim().length === 0) return;
        todoStore.addTodo(e.target.value);
        displayTodos();
        e.target.value = '';
    });

    todosUL.addEventListener('click', e => {
        const elementLi = e.target.closest("[data-id]");
        if (e.target.classList.contains("destroy"))
            todoStore.deleteTodo( elementLi.dataset.id );
        else 
            todoStore.toggleTodo( elementLi.dataset.id );
        displayTodos();
    });

    inputClearCompleted.addEventListener('click', () =>{
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersULs.forEach( filterElement => {
        filterElement.addEventListener('click', element => {
            filtersULs.forEach( filterElement => filterElement.classList.remove('selected') );
            element.target.classList.add('selected');
            switch (element.target.id) {
                case "all":
                    todoStore.setFilter(Filters.All);
                    break;
                case "pending":
                    todoStore.setFilter(Filters.Pending);
                    break;
                case "completed":
                    todoStore.setFilter(Filters.Completed);
                    break;    
            };
            displayTodos();
        });
    });
}

export default app;