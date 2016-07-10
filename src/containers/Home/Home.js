import React from 'react';
import TodoInput from '../../components/TodoInput';
import Notes from '../../components/Notes';
import Controls from '../../components/Controls';
import {
  addNewNote,
  updateNewNote,
  updateNoteStatus,
  updateNoteTitle,
  deleteNote,
  changeMode,
  changeSort
} from './handlers';
import {
  MODE,
  SORT
} from '../../constants';

import './styles.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
      todoList: [],
      mode: MODE.ACTIVE,
      sort: SORT.ASC
    };
  }

  render() {
    return (
      <div className="home-container">
        <Controls
          mode={this.state.mode}
          sort={this.state.sort}
          changeMode={changeMode.bind(this)}
          changeSort={changeSort.bind(this)}
        />
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
