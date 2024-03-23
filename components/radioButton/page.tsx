import React from "react";

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label style={{ color: "black" }}>{value}</label>
    </>
  );
};

export default RadioButton;
