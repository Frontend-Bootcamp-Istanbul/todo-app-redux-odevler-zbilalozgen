import React from "react";
import { connect } from "react-redux";
import {
  showNotification,
  hideNotification,
  removeTodo
} from "./actionCreators/actionCreaters";
import styled from "styled-components";

function Todo(props) {
  const TodoDiv = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
    text-decoration: ${props.checked ? "line-through" : "none"};
  `;

  const RemoveTodo = styled.span`
    background-color: #76030b;
    font-weight: bold;
    display: inline-block;
    margin-left: 10px;
    padding: 5px;
    color: #fff;
    border-radius: 5px;
  `;

  const { content, id, checked } = props;

  return (
    <TodoDiv
      onClick={() => {
        props.onCheckedToggle(id);
      }}
    >
      {content}
      <RemoveTodo
        onClick={e => {
          e.stopPropagation();
          props.removeTodo(id);
          props.showNotification("removed from Todos!", content);
          setTimeout(props.hideNotification, 2000);
        }}
      >
        X
      </RemoveTodo>
    </TodoDiv>
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
