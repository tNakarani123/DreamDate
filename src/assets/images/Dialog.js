import * as React from "react"
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg"


function DialogComponent(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 315 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        width={315}
        height={400}
        rx={20}
        fill="url(#paint0_linear_221_351)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_221_351"
          x1={26.7066}
          y1={-866.667}
          x2={699.097}
          y2={-673.665}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#075791" />
          <Stop offset={0.739583} stopColor="#8041C6" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default DialogComponent
