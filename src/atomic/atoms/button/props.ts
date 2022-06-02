import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: "primary" | "secondary" | "gray";
  variant?: "outline";
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large" | "fullWidth";
  width?: string;
};
