import React from 'react';

import { Todo } from './model';
import TodoItem from './TodoItem';

interface Props {
  items: Todo[];
}

function TodoList(props: Props) {
  const { items } = props;
  return (
    <div className="TodoList">
      {items.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
}

export default TodoList;
