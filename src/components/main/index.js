import React from 'react';
import PropTypes from 'prop-types';

export const Main = (props) => {
  return (
    <main style={{background: props.bg}}>
      <h1>Welcome on main page id: {props.obj.id}</h1>
    </main>
  )
};

Main.propTypes = {
  bg: PropTypes.string.isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
  })
};
