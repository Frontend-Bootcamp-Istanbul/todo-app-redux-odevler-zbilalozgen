import React, { Component } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RemoveAll from "./RemoveAll";
import "./App.css";
import Filters from "./Filters";
import { connect } from "react-redux";
import { setFilter, setTodos, addTodo } from "./actionCreators/actionCreaters";
import styled from "styled-components";
import { AddTodoWrapper, Header3 } from "./Components";

const Container = styled.div`
  background-color: whitesmoke;
  border-radius: 3px;
  width: 850px;
  margin: 30px auto;
  border: 1px solid #ddd;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Güncel proplar", this.props);
    // Component oluştuktan sonra gerekli olan datayı localstoragedan geyiriyoruz.
    let localTodos = window.localStorage.getItem("todos");
    if (localTodos) {
      localTodos = JSON.parse(localTodos);
    }
    this.props.addTodos(localTodos || []);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevProps.todos) !== JSON.stringify(this.props.todos)) {
      window.localStorage.setItem("todos", JSON.stringify(this.props.todos));
    }
  }

  filterTodos = (todos, filterType) => {
    if (filterType === "all") {
      return todos;
    } else if (filterType === "completed") {
      return todos.filter(todo => todo.checked);
    } else {
      return todos.filter(todo => !todo.checked);
    }
  };

  render() {
    console.log("App props", this.props);
    return (
      <div>
        <Container>
          <AddTodoWrapper>
            <Header3>Todo Ekle / Sil</Header3>
            <AddTodo />
            <RemoveAll />
            <Filters />
          </AddTodoWrapper>
          <TodoList
            todos={this.filterTodos(this.props.todos, this.props.activeFilter)}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeFilter: state.activeFilter,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodos: todos => {
    dispatch(setTodos(todos));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
