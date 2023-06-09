import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ComedyComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                fill="#FFCA28"
            />
            <Path
                d="M15.612 8.138a.625.625 0 01-.625-.625c0-.689-.56-1.25-1.25-1.25s-1.25.561-1.25 1.25a.625.625 0 01-1.25 0c0-1.38 1.122-2.5 2.5-2.5 1.38 0 2.5 1.12 2.5 2.5 0 .346-.28.625-.625.625zM8.112 8.138a.625.625 0 01-.625-.625c0-.689-.561-1.25-1.25-1.25-.688 0-1.25.561-1.25 1.25a.625.625 0 01-1.25 0c0-1.38 1.122-2.5 2.5-2.5 1.38 0 2.5 1.12 2.5 2.5 0 .346-.28.625-.625.625z"
                fill="#6D4C41"
            />
            <Path
                d="M17.097 11.511a.626.626 0 00-.497-.248H3.375a.62.62 0 00-.498.247.624.624 0 00-.105.548c.904 3.21 3.871 5.455 7.214 5.455 3.342 0 6.31-2.244 7.214-5.455a.62.62 0 00-.103-.547z"
                fill="#FAFAFA"
            />
        </Svg>
    )
}

export default ComedyComponent
