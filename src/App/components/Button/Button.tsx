import React, {useEffect, useRef} from "react";
import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  loading?: boolean;
  focus?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  primary = false,
  focus = false,
  loading = false,
  ...props
}: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focus) {
      ref.current?.focus();
    }
  }, [focus]);

  return (
    <button
      ref={ref}
      {...props}
      className={primary ? "button primary" : "button"}
      disabled={loading}
    >
      {!loading && children}
      {loading && <i className="bx bx-loader-circle bx-spin bx-lg" />}
    </button>
  );
};

export default Button;
