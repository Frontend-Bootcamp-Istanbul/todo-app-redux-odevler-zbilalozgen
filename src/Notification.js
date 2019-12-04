import React, { Component } from "react";
import { connect } from "react-redux";

class Notification extends Component {
  render() {
    return (
      <div className="todo-list">{`${this.props.newTodo} ${this.props.message} `}</div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  newTodo: state.newTodo
});

export default connect(mapStateToProps)(Notification);
