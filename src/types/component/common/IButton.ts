export interface ICommonButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  level: "primary" | "secondary" | "tertiary" | "outlined";
  typeButton: "primary" | "neutral";
  size: "small" | "medium" | "large" | "full-width";
  title: string;
  startIcon?: React.ReactElement | string;
  endIcon?: React.ReactElement | string;
  disabled?: boolean;
  handleButton?: () => void;
  className?: string;
}
