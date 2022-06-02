import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "gray";
  variant?: "outline";
  icon?: React.ReactNode;
};
