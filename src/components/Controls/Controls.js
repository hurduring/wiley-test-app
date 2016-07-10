import React, {PropTypes} from 'react';
import './styles.scss';
import {
  MODE
} from '../../constants';

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controls">

        <button
          className="controls__button"
        >all
        </button>

        <button
          className="controls__button"
        > active
        </button>

        <button
          className="controls__button">
          completed
        </button>

        <button className="controls__button controls__button_sort">
          Sort
        </button>

      </div>
    );
  }
}


export default Controls;
