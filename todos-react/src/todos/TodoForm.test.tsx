import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoForm from "./TodoForm";

test('renders newTodo', () => {
  render(<TodoForm newTodo="ABC" onNewTodoChange={() => {}} onAdd={() => {}} />);
  const titleEl = screen.getByPlaceholderText(/votre todo/i) as HTMLInputElement;
  expect(titleEl.value).toBe('ABC');
});

test('onNewTodoChange is called when typing', () => {
  const spy = jest.fn();

  render(<TodoForm newTodo="ABC" onNewTodoChange={spy} onAdd={() => {}} />);
  const titleEl = screen.getByPlaceholderText(/votre todo/i) as HTMLInputElement;
  userEvent.type(titleEl, 'D');

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith('ABCD');
})
