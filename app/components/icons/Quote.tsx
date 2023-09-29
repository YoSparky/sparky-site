import * as React from "react";
import type { SVGProps } from "react";
const SvgQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 67 55"
    {...props}
  >
    <path
      fill="currentColor"
      d="M29.454 54.398H.744V24.47C.744 11.594 10.488.98 29.454.98v15.486c-3.132 0-5.568 0-7.656.348-4.176.696-6.09 3.654-6.09 8.7v3.654h13.746v25.23Zm8.352 0V24.47c0-12.876 9.744-23.49 28.71-23.49v15.486c-3.132 0-5.568 0-7.656.348-4.176.696-6.09 3.654-6.09 8.7v3.654h13.746v25.23h-28.71Z"
      opacity={0.97}
      style={{
        mixBlendMode: "multiply",
      }}
    />
  </svg>
);
export default SvgQuote;
