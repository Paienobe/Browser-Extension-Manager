import Text, { TextPreset } from "../Text/Text";

type ButtonProps = {
  text: string;
  textPreset: TextPreset;
  className?: string;
  clickFunction: () => void;
};

const Button = ({
  text,
  textPreset,
  className,
  clickFunction,
}: ButtonProps) => {
  return (
    <button
      className={`px-[1.25rem] py-[0.5rem] shadow rounded-(--radius-full) smooth-transition cursor-pointer ${className}`}
      onClick={(e) => {
        e.preventDefault();
        clickFunction();
      }}
    >
      <Text content={text} text_preset={textPreset} />
    </button>
  );
};

export default Button;
