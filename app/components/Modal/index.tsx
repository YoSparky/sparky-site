import { MouseEventHandler, ReactNode } from "react";
import { Button } from "../Button";

type ModalProps = {
  children: ReactNode,
  modalState: Boolean,
  closeModal: MouseEventHandler
}

export const Modal = ({ children, modalState, closeModal }: ModalProps) => {
  return (
    <div className={`
      ${modalState && 'active'}
      [&.active]:opacity-100
      [&.active]:translate-x-0
      bg-halfColonialWhite
      container
      duration-500
      fixed
      h-full
      max-w-4xl
      opacity-0
      p-7
      right-0
      top-0
      transform
      transition-all
      translate-x-full
      w-full
      z-100
    `}>
      <div className="flex items-center justify-end">
        <span className="absolute right-0 origin-left top-0 -translate-y-1/4 translate-x-1/2">
          <div className={`origin-left ${modalState ? 'animate-swing' : 'transform rotate-90'}`}>
            <Button onClick={closeModal}>
              x | Close
            </Button>
          </div>
        </span>
      </div>
      {children}
    </div>
  );
}
