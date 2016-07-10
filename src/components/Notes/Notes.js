import React, {PropTypes} from 'react';
import Note from '../Note';
import './styles.scss';

const Notes = ({todoList, mode, ...handlers}) => {

  let list = todoList
    .filter((item) => {
      //filter notes with unwanted statuses
      return true;
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
