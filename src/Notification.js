import React, { Component } from "react";
import { connect } from "react-redux";
import { AddTodoWrapper } from "./Components";

class Notification extends Component {
  render() {
    return (
      <AddTodoWrapper>
        {" "}
        {`${this.props.newTodo} ${this.props.message} `}
      </AddTodoWrapper>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  newTodo: state.newTodo
});

export default connect(mapStateToProps)(Notification);
