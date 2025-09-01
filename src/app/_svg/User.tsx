import * as React from "react"
import { SVGProps } from "react"
const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    fill="#ffff"
    stroke="#ffff"
    viewBox="0 0 60.671 60.671"
    {...props}
  >
    <ellipse
      cx={30.336}
      cy={12.097}
      rx={11.997}
      ry={12.097}
      style={{
        fill: "#ffff",
      }}
    />
    <path
      d="M35.64 30.079H25.031c-7.021 0-12.714 5.739-12.714 12.821v17.771h36.037V42.9c0-7.082-5.693-12.821-12.714-12.821z"
      style={{
        fill: "#ffff",
      }}
    />
  </svg>
)
export default User
