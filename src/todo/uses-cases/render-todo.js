import Todo from "../models/todo.model"
import { renderTodoHTML } from "./";

let element = null;

/**
 * 
 * @param {String} element 
 * @param {Todo} todos 
 */

export const renderTodo = (elementId, todos = []) => {
    if(!todos) throw new Error('the field todos is required'); 

    if(!element)
        element = document.querySelector(elementId);

    if(!element)
        throw new Error(`${elementId} is not found`); 

    todos.forEach(todo => {
        element.appendChild(renderTodoHTML(todo));
    });

}