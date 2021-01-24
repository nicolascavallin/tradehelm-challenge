import React from "react";
import "./input.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className="input-container">
      <input {...props} />
    </div>
  );
};

export default Input;
