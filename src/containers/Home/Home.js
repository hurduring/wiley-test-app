import React from 'react';
import TodoInput from '../../components/TodoInput';
import Notes from '../../components/Notes';
import {
  addNewNote,
  updateNewNote
} from './handlers';
import {MODE} from '../../constants';

import './styles.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      todoList: [],
      mode: MODE.ACTIVE
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
        <Notes

        />
      </div>
    );
  }
}

export default Home;
