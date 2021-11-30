export async function fetchTodos() {
    const res = await fetch('http://localhost:3000/todos', {
        credentials: 'include',
    });
    const data = await res.json();
    return data;
}
export function postTodo(todo) {
    return fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(todo),
    }).then((res) => res.json());
}
export function deleteTodo(id) {
    return fetch('http://localhost:3000/todos/' + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}
