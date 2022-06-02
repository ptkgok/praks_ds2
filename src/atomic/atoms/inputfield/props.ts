import { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: any[]
}