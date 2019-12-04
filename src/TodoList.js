import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleTodo } from "./actionCreators/actionCreaters";
import Notification from "./Notification";
import { AddTodoWrapper, Header3 } from "./Components";

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
      <>
        <AddTodoWrapper>
          <Header3>
            Todos <span>{this.props.todos.length}</span>
          </Header3>
          {this.props.todos.map(todo => {
            return (
              <Todo
                {...todo}
                key={todo.id}
                onCheckedToggle={e => this.toggleTodo(todo.id)}
              />
            );
          })}
        </AddTodoWrapper>
        <Notification />
      </>
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
