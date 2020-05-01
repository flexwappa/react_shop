import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.clicked} type="button" className={`btn btn-success ${props.styles}`}><h4>{props.text}</h4></button>
  );
}

export default Button;
