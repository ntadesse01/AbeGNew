import React from "react";

const TextInput = ({placeholder,type,name}) => {
  return (
    
      <div className="form-group col-md-12">
        <input
          type={type}
          name={name}
          value=""
          placeholder={placeholder}
          required
        />
      </div>
    
  );
};

export default TextInput;
