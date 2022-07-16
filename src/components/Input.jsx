import React from "react";

const Input = ({ header, id, name, type, placeholder, pattern }) => {
  return (
    <div>
      <div className="input-container">
        <label htmlFor={id}>{header}</label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
          pattern={pattern}
        />
      </div>
    </div>
  );
};

export default Input;
