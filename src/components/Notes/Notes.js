import React, {PropTypes} from 'react';
import './styles.scss';

const Notes = ({todoList, mode, ...handlers}) => {

  let list = todoList
    .filter((item) => {
     //filter notes with unwanted statuses
     return true;
    })
    .map((item, key) => {
      return (
        <div>{item.title}</div>
      );
    });


  return (
    <div className="notes">{list}</div>
  );

};

export default Notes;
