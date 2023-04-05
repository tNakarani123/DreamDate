import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrowComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M3.828 6.778H16v2H3.828l5.364 5.364-1.414 1.414L0 7.778 7.778 0l1.414 1.414-5.364 5.364z"
                fill="black"
            />
        </Svg>
    )
}

export default RightArrowComponent
