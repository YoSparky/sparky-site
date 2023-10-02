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
      document.body.classList.add('h-screen', 'overflow-hidden');
      return;
    }
    
    document.removeEventListener('keydown', onKeyDown);
    document.body.classList.remove('h-screen', 'overflow-hidden');
  }, [onKeyDown, modalState]);
  
  return (
    <Transition 
      in={modalState} 
      timeout={modalState ? 0 : 500} 
      appear 
      unmountOnExit
    >
      {(state) => (
        <>
          <div 
            aria-hidden 
            onClick={() => closeModal()}
            className={`
              transition-${state}
              transition-all
              duration-500
              fixed
              top-0
              left-0
              h-full
              w-full
              bg-black
              opacity-0
              [&.transition-entered]:opacity-60
              z-[99]
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
              max-w-[100vw]
              md:max-w-4xl
              overflow-y-scroll
              p-7
              pb-16
              right-0
              top-0
              bottom-0
              w-full
              z-[100]
            `}
          >
            <div className="flex items-center justify-end sticky top-0 z-10">
              <div className="md:transform md:rotate-90 md:translate-x-1/2 md:origin-left bg-halfColonialWhite">
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
    