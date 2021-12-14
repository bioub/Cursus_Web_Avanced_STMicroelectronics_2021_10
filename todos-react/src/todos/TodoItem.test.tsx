import { render, screen } from "@testing-library/react";

import { Todo } from "./model";
import TodoItem from "./TodoItem";

test('renders a todo', () => {
  const todo: Todo = {
    id: 1,
    title: 'ABC',
    completed: false,
  };
  render(<TodoItem item={todo} />);
  const titleEl = screen.getByText(/abc/i);
  expect(titleEl).toBeInTheDocument();
});
