import React, {PropTypes} from 'react';
import './styles.scss';

const TodoInput = ({title, addNewNote, updateNewNote}) => {

  return (
    <div className="new-todo-wrap">
      <input
        className="new-todo"
        placeholder="What do you want to do in the future?"
        value={title}
        onKeyDown={addNewNote}
        onChange={updateNewNote}
        autoFocus={true}
      />
    </div>
  );

};

TodoInput.propTypes = {
  title: PropTypes.string,
  addNewNote: PropTypes.func,
  updateNewNote: PropTypes.func
};

export default TodoInput;
