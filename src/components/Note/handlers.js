import {
  ENTER_KEY,
  ESC_KEY,
  STATUS
} from '../../constants';

export const makeEditable = function () {
  this.setState({...this.state, editing: true});
};

export const updateNoteTitle = function (e) {
  this.props.updateNoteTitle(this.props.id, e.target.value);
  if (e.keyCode === ENTER_KEY || e.type === 'blur' || e.keyCode === ESC_KEY) {
    this.setState({...this.state, editing: false});
  }
};

export const updateNoteStatus = function (e) {
  let status = e.target.checked ? STATUS.COMPLETED : STATUS.ACTIVE;
  this.props.updateNoteStatus(this.props.id, status);
};

export const deleteNote = function () {
  this.props.deleteNote(this.props.id);
};
