import React from 'react';

import { Todo } from './model';

interface Props {
  item: Todo;
}

function TodoItem(props: Props) {
  const { item } = props;
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button>-</button>
    </div>
  );
}

export default TodoItem;
