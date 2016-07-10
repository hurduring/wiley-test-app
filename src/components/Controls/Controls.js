import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {
  MODE,
  SORT
} from '../../constants';
import {
  changeMode,
  changeSort
} from './handlers';

import './styles.scss';

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controls">

        <button
          className={classNames({"controls__button_selected" : this.props.mode === MODE.ALL, controls__button: true})}
          onClick={changeMode.bind(this, MODE.ALL)}>
          all
        </button>

        <button
          className={classNames({"controls__button_selected" : this.props.mode === MODE.ACTIVE, controls__button: true})}
          onClick={changeMode.bind(this, MODE.ACTIVE)}>
          active
        </button>

        <button
          className={classNames({"controls__button_selected" : this.props.mode === MODE.COMPLETED, controls__button: true})}
          onClick={changeMode.bind(this, MODE.COMPLETED)}>
          completed
        </button>

        <button className="controls__button controls__button_sort" onClick={changeSort.bind(this)}>
          {this.props.sort === SORT.ASC ? 'ASC' : 'DESC'}
        </button>

      </div>
    );
  }
}

Controls.propTypes = {
  mode: PropTypes.number,
  sort: PropTypes.number,
  changeMode: PropTypes.func,
  changeSort: PropTypes.func
};


export default Controls;
