import React from "react";
import { connect } from "react-redux";
import { addTodo } from "./actionCreators/actionCreaters";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    const newVal = e.target.value;
    this.setState({
      inputVal: newVal
    });
  }

  addTodo = (e, newTodo) => {
    e.preventDefault();
    this.props.addTodo({
      content: newTodo,
      id: Math.random(),
      checked: false
    });
    this.setState({
      inputVal: ""
    });
  };

  render() {
    return (
      <form onSubmit={e => this.addTodo(e, this.state.inputVal)}>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.changeInput}
        />
        <button>Ekle</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch(addTodo(todo));
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
