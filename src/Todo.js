import React from "react";
import { connect } from "react-redux";
import {
  showNotification,
  hideNotification,
  removeTodo
} from "./actionCreators/actionCreaters";

function Todo(props) {
  const { content, id, checked } = props;
  let itemClass = "todo-item";
  if (checked) {
    itemClass += " checked";
  }
  return (
    <div
      className={itemClass}
      onClick={() => {
        props.onCheckedToggle(id);
      }}
    >
      {content}
      <span
        className="remove-todo"
        onClick={e => {
          e.stopPropagation();
          props.removeTodo(id);
          props.showNotification("removed from Todos!", content);
          setTimeout(props.hideNotification, 2000);
        }}
      >
        X
      </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  removeTodo: id => {
    dispatch(removeTodo(id));
  },
  showNotification: (message, newTodo) => {
    dispatch(showNotification(message, newTodo));
  },
  hideNotification: () => {
    dispatch(hideNotification());
  }
});

export default connect(null, mapDispatchToProps)(Todo);
