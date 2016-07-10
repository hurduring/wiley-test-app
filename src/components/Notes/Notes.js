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
          title={item.title}
          id={item.id}
          status={item.status}
        />
      );
    });


  return (
    <div className="notes">{list}</div>
  );

};

export default Notes;
