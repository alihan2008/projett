import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="input"
    />
  );
};

export default Input;
