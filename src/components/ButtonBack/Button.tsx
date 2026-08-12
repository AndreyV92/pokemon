import type { ButtonType } from "@/types/types";

export const Button = ({ children, onClick, className }: ButtonType) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
