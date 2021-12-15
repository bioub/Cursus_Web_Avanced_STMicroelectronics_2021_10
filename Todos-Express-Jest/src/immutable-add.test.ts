function immutableAdd<V = any, O = any>(
  object: O,
  key: string | symbol,
  val: V,
) {
  return {
    ...object,
    [key]: val,
  };
}

interface Todo {
  id?: number;
  title: string;
  completed: false;
}

test('should add key be creating a new object', () => {
  const todo = {
    title: 'ABC',
    completed: true,
  };

  const newTodo = immutableAdd(todo, 'id', 123);

  expect(newTodo).toEqual({ title: 'ABC', completed: true, id: 123 }); // deepEqual
  expect(newTodo).not.toBe(todo); // !==
});
