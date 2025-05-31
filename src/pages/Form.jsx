import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formr">
    <div style={{ display: "flex", flexDirection: "column", width: "280px" }}>
      <label style={{ fontSize: "12px", color: "gray" }}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        style={{
          padding: "14px",
          margin: "3px 3px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
        focused={focused.toString()}
      />
      <span
        style={{
          fontSize: "17px",
          padding: "3px",
          color: "red",
          display: "none",
        }}
      >
        {errorMessage}
      </span>
    </div>
    </div>
  );
};

export default FormInput;
