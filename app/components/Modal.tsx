import { ReactNode, useCallback, useEffect } from "react";
import { Transition } from "react-transition-group";

type ModalProps = {
  children: ReactNode,
  modalState: boolean,
  closeModal: Function
}

export const Modal = ({ children, modalState, closeModal }: ModalProps) => {  
  const onKeyDown = useCallback((event: { key: any; preventDefault: () => void; }) => { 
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [])
  
  useEffect(() => {
    if (modalState) {
      document.addEventListener('keydown', onKeyDown);
      return;
    }
    
    document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown, modalState]);
  
  return (
    <Transition in={modalState} timeout={0}>
      {(state : boolean ) => (
        <>
          <div 
            aria-hidden 
            onClick={() => closeModal()}
            className={`
              transition-${state}
              transition-opacity
              duration-500
              fixed
              top-0
              left-0
              h-full
              w-full
              bg-black
              opacity-0
              [&.transition-entered]:opacity-40
              [&.transition-exited]:opacity-0
              [&.transition-exited]:hidden
            `}
          ></div>
          <div
            className={`
              transition-${state}
              [&.transition-entered]:translate-x-0
              [&.transition-exited]:translate-x-full
              translate-x-full
              bg-halfColonialWhite
              container
              transition-all
              duration-500
              fixed
              h-full
              max-w-4xl
              p-7
              right-0
              top-0
              w-full
              z-100
            `}
          >
            <div className="flex items-center justify-end">
              <div className="transform rotate-90 translate-x-1/2 origin-left">
                <button className="button" onClick={() => closeModal()}>
                  x | Close
                </button>
              </div>
            </div>
            {children}
          </div>
        </>
      )}
    </Transition>
  );
}
    