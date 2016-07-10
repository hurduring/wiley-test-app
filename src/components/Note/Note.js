import React, {PropTypes} from 'react';
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

        {this.props.title}

      </div>
    );
  }
}


export default Note;
