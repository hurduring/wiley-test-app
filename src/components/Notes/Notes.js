import React, {PropTypes} from 'react';
import Note from '../Note';
import {
  MODE
} from '../../constants';
import './styles.scss';

const Notes = ({todoList, mode, ...handlers}) => {

  let list = todoList
    .filter((item) => {
      switch (mode) {
        case MODE.ACTIVE:
          return item.status === MODE.ACTIVE;
        case MODE.COMPLETED:
          return item.status === MODE.COMPLETED;
        default:
          return true;
      }
    })
    .map((item, key) => {
      return (
        <Note
          key={key}
          id={item.id}
          title={item.title}
          status={item.status}
          updateNoteTitle={handlers.updateNoteTitle}
          updateNoteStatus={handlers.updateNoteStatus}
          deleteNote={handlers.deleteNote}
        />
      );
    });


  return (
    <div className="notes">{list}</div>
  );

};

Notes.propTypes = {
  updateNoteTitle: PropTypes.func,
  updateNoteStatus: PropTypes.func,
  deleteNote: PropTypes.func,
  todoList: PropTypes.array,
  mode: PropTypes.number
};

export default Notes;
