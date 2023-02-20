import todoStore, { Filters } from "../../store/todo.store";

let pendingLabel = null;

/**
 * 
 * @param {HTMLElement} elementId 
 */

export const renderCompleted = (elementId) => {
    if(!pendingLabel)
        pendingLabel = document.querySelector(elementId);
    if(!pendingLabel)
       throw new Error(`${elementId} not found`);
    
    pendingLabel.textContent = todoStore.getTodo(Filters.Pending).length;
}