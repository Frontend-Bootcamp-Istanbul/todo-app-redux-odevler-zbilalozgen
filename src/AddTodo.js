import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  showNotification,
  hideNotification
} from "./actionCreators/actionCreaters";
import { ButtonMain, TextInput } from "./Components";

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
    this.props.showNotification("added to Todos!", newTodo);
    setTimeout(this.props.hideNotification, 2000);
  };

  render() {
    return (
      <form onSubmit={e => this.addTodo(e, this.state.inputVal)}>
        <TextInput
          type="text"
          value={this.state.inputVal}
          onChange={this.changeInput}
        />
        <ButtonMain>Ekle</ButtonMain>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch(addTodo(todo));
  },
  showNotification: (message, newTodo) => {
    dispatch(showNotification(message, newTodo));
  },
  hideNotification: () => {
    dispatch(hideNotification());
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
