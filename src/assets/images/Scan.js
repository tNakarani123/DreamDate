import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ScanComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1 3.614V1h2.614M21 3.614V1h-2.613M1 18.386V21h2.614M21 18.386V21h-2.613M3.738 6.602h2.614V3.987H3.738v2.615zM15.648 6.602h2.614V3.987h-2.614v2.615zM3.738 18.013h2.614v-2.614H3.738v2.614zM11.872 8.76v4.19h-3.9M8.137 14.859v1.826M10.958 18.012h1.867v-3.195M17.93 14.277v3.735M17.805 16.768h-2.573M15.44 11.332v2.116M18.137 8.552h-3.112M16.892 8.676v1.743M3.738 8.51h4.606M5.15 11.747v1.867M8.095 3.988v1.784M10.751 3.987v2.075M8.095 4.858h2.655M13.033 3.988v3.278M1.642 11h18.713M14.485 15.025h.54M10.045 8.676v-.54M10.21 16.352h.54"
                stroke="#000"
                strokeWidth={1.2}
                strokeMiterlimit={22.926}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ScanComponent
