import type { SVGProps } from "react";

export const SVGBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1728 7719" fill="none" {...props}>
    <g clip-path="url(#clip0_1_2)">
      <rect y="4490" width="854" height="1576" fill="#FDF8D5"/>
      <g style={{ mixBlendMode : 'multiply' }}>
        <path d="M1247 3341.3L1851 2933V4350L1247 3341.3Z" fill="#F9DF5E"/>
        <path d="M1247 3341.3L1851 2933V4350L1247 3341.3Z" fill="url(#pattern0)" fill-opacity="0.02" style={{ mixBlendMode : 'multiply' }} />
      </g>
    </g>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="3.38742" height="1.4439">
        <use transform="scale(0.00165563 0.000705716)"/>
      </pattern>
      <clipPath id="clip0_1_2">
        <rect width="1728" height="7719" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);