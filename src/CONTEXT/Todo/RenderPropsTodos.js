import React from "react";

class RenderPropsTodos extends React.Component {
  state = {
    todos: [
      { id: 1, desc: "Fix the bugs assigned", completionStatus: false },
      { id: 2, desc: "Clean Sonar Violations", completionStatus: false },
    ],
    user: { name: "Ajay Nallanagula", canDelete: true },
  };

  handleDelete = (todo) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter(({ id }) => id != todo.id);
    this.setState((prevState) => ({ ...prevState, todos: updatedTodos }));
  };

  render() {
    const { user, todos } = this.state;
    return (
      <TodoList
        todos={todos}
        renderTodoItem={(todo) => {
          return (
            <div style={{ padding: "5px" }}>
              <TodoItem
                todo={todo}
                onDelete={this.handleDelete}
                canDelete={user.canDelete}
              />
            </div>
          );
        }} 
      />
    );
  }
}

class TodoList extends React.Component {
  render() {
    const { todos, renderTodoItem } = this.props;
    return (
      <>
        <h1 style={{ color: "burlywood" }}>Todo List</h1>
        <div>{todos.map((todo) => renderTodoItem(todo))}</div>
      </>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    const { onDelete, canDelete, todo } = this.props;
    const styleObj = {
      width: "30%",
      height: "70px",
      backgroundColor: "bisque",
      margin: "auto",
      padding: "20px",
      borderRadius: "25px",
    };
    return (
      <div style={styleObj}>
        <div>
          <p>{`${todo.id}. ${todo.desc}`}</p>
        </div>
        <div>
          <button disabled={!canDelete} onClick={() => onDelete(todo)}>
            Take Action!!
          </button>
        </div>
      </div>
    );
  }
}

export default RenderPropsTodos;
