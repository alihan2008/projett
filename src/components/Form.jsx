import React, { useState } from 'react';
import './Form.css'; 
import Button from './UI/Button';
import Input from './UI/Input'; 

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const formData = {
    email,
    date,
    id: Math.random().toString(),
  };

  const submitHandler = (e) => {
    e.preventDefault();  
    props.save(formData);
    setEmail("");
    setDate("");
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className="form-container">
      {isFormVisible && (
        <div className="form-content">
          <Button className="minus-button" onClick={toggleFormVisibility} type="button">-</Button>
          <form onSubmit={submitHandler}>
            <Input className="input" value={email} onChange={emailChangeHandler} type="email" placeholder="Email" />
            <Input className="input" value={date} onChange={dateChangeHandler} type="date" placeholder="Date" />
            <div className="button-group">
              <Button onClick={toggleFormVisibility} type="button">Cancel</Button>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </div>
      )}
      {!isFormVisible && (
        <Button onClick={toggleFormVisibility} type="button">Form</Button>
      )}
    </div>
  );
};

export default Form;
