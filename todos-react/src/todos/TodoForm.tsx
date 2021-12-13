import React, { FormEvent } from 'react';

interface Props {
  newTodo: string;
  onNewTodoChange: (val: string) => void;
  onAdd: () => void;
}

function TodoForm(props: Props) {
  const { newTodo, onNewTodoChange, onAdd } = props;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAdd();
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={(event) => onNewTodoChange(event.target.value)} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
