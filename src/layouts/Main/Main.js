import React, { PropTypes } from 'react';
import './styles.scss';

const Main = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
