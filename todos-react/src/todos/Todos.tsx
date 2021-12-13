import { Component, ReactNode } from "react";

import { Todo } from "./model";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

interface State {
  todos: Todo[];
  newTodo: string;
}

class Todos extends Component {
  state: State = {
    todos: [
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
    ],
    newTodo: 'DEF',
  }

  handleNewTodoChange = (newTodo: string) => {
    this.setState({
      newTodo
    })
  }

  handleAdd = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          title: this.state.newTodo,
          completed: false,
        }
      ]
    })
  }

  render(): ReactNode {
    const { newTodo, todos } = this.state;
    return (
      <div className="Todos">
        <TodoForm newTodo={newTodo} onNewTodoChange={this.handleNewTodoChange} onAdd={this.handleAdd} />
        <TodoList items={todos} />
      </div>
    )
  }
}

export default Todos;
