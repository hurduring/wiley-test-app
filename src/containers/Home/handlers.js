import uuid from 'uuid';
import {
  ENTER_KEY,
  STATUS
} from '../../constants';

export const addNewNote = function (e) {
  if (e.keyCode !== ENTER_KEY) {
    return;
  }

  this.setState({
    ...this.state,
    newTodo: '',
    todoList: [
      ...this.state.todoList,
      {id: uuid.v1(), title: e.target.value.trim(), status: STATUS.ACTIVE}
    ]
  });
};

export const updateNewNote = function (e) {
  this.setState({...this.state, newTodo: e.target.value});
};
