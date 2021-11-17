import { Todo } from "./model";

export function createTodoRow(todo: Todo): HTMLDivElement {
  /*
  <div class="todo-row" data-todo-id="0.2445635353">
    <input type="checkbox" class="todo-completed">
    <span class="todo-title">ABC</span>
    <button class="todo-delete">-</button>
  </div>
   */
  const todoRowEl = document.createElement('div');
  todoRowEl.className = 'todo-row';
  todoRowEl.dataset.todoId = String(todo.id);

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed;
  todoRowEl.append(checkboxEl);

  const spanEl = createTodoTitle(todo.title);
  todoRowEl.append(spanEl);

  const buttonDeleteEl = document.createElement('button');
  buttonDeleteEl.className = 'todo-delete';
  buttonDeleteEl.innerText = '-';
  todoRowEl.append(buttonDeleteEl);

  return todoRowEl;
}

export function createTodoTitle(title: string) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = title;
  return spanEl;
}

export function createTodoEdit(content: string) {
  const inputEl = document.createElement('input');
  inputEl.className = 'todo-edit';
  inputEl.value = content;
  return inputEl;
}
