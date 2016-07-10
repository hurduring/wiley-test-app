import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './styles.scss';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    return (
      <div className="note">

        <div className={classNames({hidden: this.state.editing, "note__complete-button checkbox-wrap": true})}>
          <input
            id={`complete-${this.props.id}`}
            type="checkbox"
            checked={this.props.status}
          />
          <label htmlFor={`complete-${this.props.id}`}>
            <i
              className={
                  classNames({
                    "fa fa-circle-o": !this.props.status,
                    "fa fa-check-circle-o": this.props.status
                  })
                }
            >
            </i>
          </label>
        </div>

        <div className={classNames({hidden: this.state.editing, "note__title": true})}>
          {this.props.title}
        </div>

        <div className={classNames({hidden: this.state.editing, "note__edit-button": true})}>
          <i className="fa fa-edit"></i>
        </div>

        <div className={classNames({hidden: this.state.editing, "note__delete-button": true})}>
          <i className="fa fa-remove"></i>
        </div>

        <input
          className={classNames({visible: this.state.editing, "note__input": true})}
          type="text"
          value={this.props.title}
        />

      </div>
    );
  }
}


export default Note;