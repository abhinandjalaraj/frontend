import * as React from "react"
import { SVGProps } from "react"
const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="m0 8 3.08-3.695a6.405 6.405 0 0 1 9.84 0L16 8l-3.08 3.695a6.405 6.405 0 0 1-9.84 0L0 8Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Eye
