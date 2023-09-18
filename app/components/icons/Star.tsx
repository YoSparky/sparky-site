import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      fill="#E0E34A"
      fillRule="evenodd"
      d="M.427 9.973a.512.512 0 0 0-.427.5c0 .247.183.456.427.5a11.08 11.08 0 0 1 9.05 9.667c.023.203.192.36.396.36a.401.401 0 0 0 .395-.36c.591-5.338 4.978-9.532 10.4-9.824a.347.347 0 0 0 .332-.343.347.347 0 0 0-.331-.344c-5.403-.29-9.777-4.454-10.394-9.765A.408.408 0 0 0 9.873 0a.408.408 0 0 0-.402.364 11.08 11.08 0 0 1-9.044 9.61Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStar;
