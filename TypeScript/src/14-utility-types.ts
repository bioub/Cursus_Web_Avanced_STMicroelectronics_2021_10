interface Todo2 {
  id: string;
  title: string;
  completed: boolean;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html

type NewTodoPartial = Partial<Todo2>
type NewTodo = Omit<Todo2, 'id'>;


function postTodo(todo: NewTodo) {

}

postTodo({
  title: 'ABC',
  completed: false,
});
