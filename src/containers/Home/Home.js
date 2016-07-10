import React from 'react';
import TodoInput from '../../components/TodoInput';
import Notes from '../../components/Notes';
import Controls from '../../components/Controls';
import {
  addNewNote,
  updateNewNote,
  updateNoteStatus,
  updateNoteTitle,
  deleteNote
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
        <Controls/>
        <TodoInput
          title={this.state.newTodo}
          addNewNote={addNewNote.bind(this)}
          updateNewNote={updateNewNote.bind(this)}
        />
        <Notes
          todoList={this.state.todoList}
          mode={this.state.mode}
          updateNoteTitle={updateNoteTitle.bind(this)}
          updateNoteStatus={updateNoteStatus.bind(this)}
          deleteNote={deleteNote.bind(this)}
        />
      </div>
    );
  }
}

export default Home;
