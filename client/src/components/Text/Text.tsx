type TextProps = {
  type?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text_preset?: TextPreset;
  className?: string;
  content: string;
};

export type TextPreset =
  | "text-preset-1"
  | "text-preset-2"
  | "text-preset-3"
  | "text-preset-4"
  | "text-preset-5"
  | "text-preset-6"
  | "logo-preset";

const Text = ({
  type = "p",
  text_preset = "text-preset-5",
  className = "",
  content,
}: TextProps) => {
  const Tag = type;
  return <Tag className={`${text_preset} ${className}`}>{content}</Tag>;
};

export default Text;
