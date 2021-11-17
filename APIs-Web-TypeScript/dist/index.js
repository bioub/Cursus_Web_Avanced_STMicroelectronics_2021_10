import { deleteTodo, fetchTodos, postTodo } from './api.js';
import { createTodoEdit, createTodoRow, createTodoTitle } from './todos.js';
const todoFormEl = document.querySelector('.todo-form');
const todoToggleAllEl = document.querySelector('.todo-toggle-all');
const todoInputEl = document.querySelector('.todo-input');
const todoListEl = document.querySelector('.todo-list');
todoFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const todo = {
        title: todoInputEl.value,
        completed: false,
    };
    postTodo(todo).then((todoFromServer) => {
        const todoRowEl = createTodoRow(todoFromServer);
        todoListEl.prepend(todoRowEl); // prepend PAS IE 11
    });
});
todoToggleAllEl.addEventListener('click', () => {
    const todoCompletedEls = todoListEl.querySelectorAll('.todo-completed');
    for (const todoCompletedEl of todoCompletedEls) {
        todoCompletedEl.checked = todoToggleAllEl.checked;
    }
});
todoListEl.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('todo-delete')) {
        const todoRowEl = target.closest('.todo-row');
        deleteTodo(Number(todoRowEl.dataset.todoId)).then(() => {
            todoRowEl.remove();
        });
    }
});
todoListEl.addEventListener('dblclick', (event) => {
    const target = event.target;
    if (target.classList.contains('todo-title')) {
        const inputEl = createTodoEdit(target.innerText);
        target.replaceWith(inputEl);
    }
});
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.classList.contains('todo-edit')) {
        const todoEditEl = todoListEl.querySelector('.todo-edit');
        if (todoEditEl) {
            const spanEl = createTodoTitle(todoEditEl.value);
            todoEditEl.replaceWith(spanEl);
        }
    }
});
fetchTodos().then((todos) => {
    for (const todo of todos) {
        const todoRowEl = createTodoRow(todo);
        todoListEl.prepend(todoRowEl);
    }
});
todoInputEl.addEventListener('input', (event) => {
    const target = event.target;
    localStorage.setItem('newTodo', target.value);
});
const newTodo = localStorage.getItem('newTodo');
if (newTodo) {
    todoInputEl.value = newTodo;
}
