export interface ButtonProps {
  content: string;
}

export const Button = ({ content }: ButtonProps) => {
  return <button>{content}</button>;
};
