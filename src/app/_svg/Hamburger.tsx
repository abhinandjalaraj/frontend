import * as React from "react"
import { SVGProps } from "react"
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <title>{"hamburger"}</title>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M18 16H2a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4Zm0-8H2a2 2 0 0 0 0 4h16a2 2 0 0 0 0-4ZM2 4h16a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4Z"
    />
  </svg>
)
export default Hamburger
