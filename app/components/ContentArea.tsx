import classnames from 'classnames';
import { Children, ReactNode } from 'react';

interface IContentAreaProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  layout: "standard" | "reverse";
  topComponent?: boolean;
  image: string;
  textVerticalPosition: "top" | "middle" | "bottom";
}

export default function ContentArea(props: IContentAreaProps) {
  const section_classes = classnames(props.className, {
    "ContentArea": true,
    "ContentArea--reverse": props.layout === `reverse`,
    "Component--header-padded": props.topComponent,
    "hero": props.topComponent,
  });
  const text_classes = classnames({
    "ContentArea__text": true,
    "justify-start": props.textVerticalPosition === "top",
    "justify-center": props.textVerticalPosition === "middle",
    "justify-end": props.textVerticalPosition === "bottom",
  });
  return (
    <section
      id={props.id}
      className={section_classes}
    >
      <div
        className={text_classes}
      >
        {props.children}
      </div>
      <div
        className='ContentArea__media'
      >
        <img
          src={props.image}
        />
      </div>
    </section>
  );
}