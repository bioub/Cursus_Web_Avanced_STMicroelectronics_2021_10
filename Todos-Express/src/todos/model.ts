import { Todo } from "./todo";

const todos: Todo[] = [
  {
    id: 1,
    title: 'ABC',
    completed: true,
  },
  {
    id: 2,
    title: 'XYZ',
    completed: false,
  },
];

export function find(): Promise<Todo[]> {
  return Promise.resolve(todos);
}

export function create(todoDto: Todo): Promise<Todo> {
  const todo = { ...todoDto, id: Math.random() };

  todos.push(todo);

  return Promise.resolve(todo);
}

export function findByIdAndDelete(id: string | number): Promise<Todo|null> {
  const todoId = +id;

  const index = todos.findIndex((t) => t.id === todoId);

  if (index === -1) {
    return Promise.resolve(null);
  }

  const todoDeleted = todos[index];
  todos.splice(index, 1)

  return Promise.resolve(todoDeleted);
}
