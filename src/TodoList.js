import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleTodo } from "./actionCreators/actionCreaters";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleTodo = id => {
    this.props.toggleTodo(id);
    window.localStorage.setItem("todos", JSON.stringify(this.props.todos));
  };

  render() {
    return (
      <div className="todo-list">
        <h3>
          Todos <span>{this.props.todos.length}</span>
        </h3>
        {this.props.todos.map(todo => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              onCheckedToggle={e => this.toggleTodo(todo.id)}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => {
    dispatch(toggleTodo(id));
  }
});

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
