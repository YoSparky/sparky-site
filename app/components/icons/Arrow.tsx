import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={9}
    fill="none"
    viewBox="0 0 9 9"
    {...props}
  >
    <path
      fill="currentColor"
      d="m4.06.866-.7.896 3.388 2.492-1.806-.098H0V5.29h4.942l1.764-.098L3.36 7.74l.7.826 4.27-3.402v-.882L4.06.866Z"
    />
  </svg>
);
export default SvgArrow;
