import React, {PropTypes} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import './styles.scss';

import {
  makeEditable,
  deleteNote,
  updateNoteTitle,
  updateNoteStatus
} from './handlers';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      let node = ReactDOM.findDOMNode(this.refs.editField);
      node.focus();
      node.setSelectionRange(0, node.value.length);
    }
  }

  render() {
    return (
      <div className="note">

        <div className={classNames({hidden: this.state.editing, "note__complete-button checkbox-wrap": true})}>
          <input
            id={`complete-${this.props.id}`}
            type="checkbox"
            checked={this.props.status}
            onChange={updateNoteStatus.bind(this)}
          />
          <label htmlFor={`complete-${this.props.id}`}>
            <i className={classNames({
                "fa fa-circle-o": !this.props.status,
                "fa fa-check-circle-o": this.props.status
                })}>
            </i>
          </label>
        </div>

        <div
          className={classNames({hidden: this.state.editing, "note__title": true})}
        >
          {this.props.title}
        </div>

        <div
          className={classNames({hidden: this.state.editing, "note__edit-button": true})}
          onClick={makeEditable.bind(this)}
        >
          <i className="fa fa-edit"></i>
        </div>

        <div
          className={classNames({hidden: this.state.editing, "note__delete-button": true})}
          onClick={deleteNote.bind(this)}
        >
          <i className="fa fa-remove"></i>
        </div>

        <input
          ref="editField"
          className={classNames({visible: this.state.editing, "note__input": true})}
          type="text"
          value={this.props.title}
          onKeyDown={updateNoteTitle.bind(this)}
          onBlur={updateNoteTitle.bind(this)}
          onChange={updateNoteTitle.bind(this)}
        />

      </div>
    );
  }
}

Note.propTypes = {
  onEdit: PropTypes.func,
  onSubmit: PropTypes.func,
  onRemove: PropTypes.func,
  onComplete: PropTypes.func,
  status: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.string
};

export default Note;
