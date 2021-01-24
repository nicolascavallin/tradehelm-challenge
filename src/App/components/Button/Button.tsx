import React from "react";
import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = ({children, primary = false, loading = false, ...props}: Props) => {
  return (
    <button {...props} className={primary ? "button primary" : "button"} disabled={loading}>
      {!loading && children}
      {loading && <i className="bx bx-loader-circle bx-spin bx-lg" />}
    </button>
  );
};

export default Button;
