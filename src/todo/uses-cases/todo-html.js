import Todo from "../models/todo.model";

/**
 *
 * @param {Todo} todo
 */

export const renderTodoHTML = (todo) => {
  const {id, done, description} = todo;

  const liElement = document.createElement("li");
  liElement.dataset.id = id;
  liElement.className = (!done) ? "" : "completed";
  const html = `
  <div class="view">
      <input class="toggle" type="checkbox" ${(!done) ? "" : "checked"}>
      <label>${description}</label>
      <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
  `;
  liElement.innerHTML = html;
  return liElement;
};
