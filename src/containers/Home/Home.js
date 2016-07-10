import React from 'react';
import TodoInput from '../../components/TodoInput';
import {
  addNewNote,
  updateNewNote
} from './handlers'

import './styles.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      todoList: []
    };
  }

  render() {
    return (
      <div className="home-container">
        <TodoInput
          title={this.state.newTodo}
          addNewNote={addNewNote.bind(this)}
          updateNewNote={updateNewNote.bind(this)}
        />
      </div>
    );
  }
}

export default Home;
