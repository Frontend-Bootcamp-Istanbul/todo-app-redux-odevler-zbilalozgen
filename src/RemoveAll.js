import React from "react";
import {
  removeAll,
  showNotification,
  hideNotification
} from "./actionCreators/actionCreaters";
import { connect } from "react-redux";
import { ButtonMain, RemoveAllButton } from "./Components";

class RemoveAll extends React.Component {
  removeAll = () => {
    this.props.removeAll();
    window.localStorage.removeItem("todos");
    this.props.showNotification("removed!", "All todos");
    setTimeout(this.props.hideNotification, 2000);
  };
  render() {
    return (
      <RemoveAllButton
        onClick={() => {
          this.removeAll();
        }}
      >
        Tümünü Sil
      </RemoveAllButton>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeAll: todos => {
    dispatch(removeAll());
  },
  showNotification: (message, newTodo) => {
    dispatch(showNotification(message, newTodo));
  },
  hideNotification: () => {
    dispatch(hideNotification());
  }
});

export default connect(null, mapDispatchToProps)(RemoveAll);
