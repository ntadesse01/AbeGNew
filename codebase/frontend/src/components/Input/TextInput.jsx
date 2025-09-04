import React from "react";

const TextInput = ({placeholder,type,name,onChange,value}) => {
  return (
    
      <div className="form-group col-md-12">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          required
          onChange={onChange}
        />
      </div>
    
  );
};

export default TextInput;
