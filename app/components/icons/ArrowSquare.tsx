import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.176 4.804V.268h20.448V20.68h-4.536V7.864a181.357 181.357 0 0 1-4.788 4.968L3.464 23.704.188 20.428 11.024 9.556c1.98-1.98 3.276-3.204 4.932-4.752H3.176Z"
      opacity={0.97}
      style={{
        mixBlendMode: "multiply",
      }}
    />
  </svg>
);
export default SvgArrowSquare;
