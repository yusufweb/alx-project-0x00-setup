import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button className={`bg-orange-600 ${style}`}>
      <p>{title}</p>
    </button>
  );
};

export default Button;
