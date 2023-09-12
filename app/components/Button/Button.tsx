import { MouseEventHandler, ReactNode } from "react";

type ModalProps = {
  children: ReactNode,
  onClick: MouseEventHandler
}

export const Button = ({ onClick, children }: ModalProps) => {
  return (
    <button className="rounded-full px-4 py-2 border border-current" onClick={onClick}>
      {children}
    </button>
  );
}