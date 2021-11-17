export async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        credentials: 'include',
    });
    const data = await res.json();
    return data;
}
export function postTodo(todo) {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(todo),
    }).then((res) => res.json());
}
export function deleteTodo(id) {
    return fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}
