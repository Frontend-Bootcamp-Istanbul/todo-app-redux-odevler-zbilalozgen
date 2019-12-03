import React from "react";
import { removeAll } from "./actionCreators/actionCreaters";
import { connect } from "react-redux";

class RemoveAll extends React.Component {
  removeAll = () => {
    this.props.removeAll();
    window.localStorage.removeItem("todos");
  };
  render() {
    return (
      <button
        className="remove-all"
        onClick={() => {
          this.removeAll();
        }}
      >
        Tümünü Sil
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeAll: todos => {
    dispatch(removeAll());
  }
});

export default connect(null, mapDispatchToProps)(RemoveAll);
