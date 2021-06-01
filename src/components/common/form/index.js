import React from 'react';
import DatePicker from 'react-datepicker2';

export const Input = (props) => {
  return (
    <>
      <input {...props}  />
    </>
  );
};

export const TextArea = (props) => {
  return (
    <>
      <textarea {...props} >
        {props.children}
      </textarea>
    </>
  );
};

export const Label = (props) => {
  return (
    <>
      <label {...props} >
        {props.children}
      </label>
    </>
  );
};

export const Button = (props) => {
  return (
    <>
      <button {...props} >
        {props.children}
      </button>
    </>
  );
};

export const Select = (props) => {
  return (
    <>
      <select {...props} >
        {props.children}
      </select>
    </>
  );
};

export const Option = (props) => {
  return (
    <>
      <option {...props} >
        {props.children}
      </option>
    </>
  );
};

export const ReactDatePicker = (props) => {
  return (
    <>
     <DatePicker isGregorian={true} {...props} timePicker={false} />
    </>
  );
};
