import { Todo } from "./model";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
}

export function postTodo(todo: Todo): Promise<Todo> {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
}

export function deleteTodo(id: number): Promise<Todo> {
  return fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
    method: 'DELETE',
  }).then((res) => res.json());
}
