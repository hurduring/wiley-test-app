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


export const updateNoteTitle = function (id, title) {
  let todoList = this.state.todoList.map((item) => {
    return item.id !== id ? item : {...item, title: title};
  });
  this.setState({
    ...this.state,
    todoList: todoList,
    editing: ''
  });
};

export const updateNoteStatus = function (id, status) {
  let todoList = this.state.todoList.map((item) => {
    return item.id !== id ? item : {...item, status: status};
  });
  this.setState({
    ...this.state,
    todoList: todoList
  });
};

export const deleteNote = function (id) {
  let todoList = this.state.todoList.filter((item) => {
    return item.id !== id;
  });
  this.setState({
    ...this.state,
    todoList: todoList
  });
};
