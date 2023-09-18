import { ReactNode, useState } from "react";

type WrapperProps = {
  children: ReactNode,
}

export const LiquidDropHover = ({ children } : WrapperProps)  => {
  const [hasHovered, hover] = useState(false);
  return (
    <div onMouseEnter={() => hover(true)} className={`button button--liquid-drop w-max ${hasHovered ? '' : 'default-hover-animation-state'}`}>
      {children}
    </div>
  );
};  
