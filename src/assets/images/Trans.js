import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TransComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.888.49l-.002.001c-.5.586-.43 1.466.156 1.966l.96.82-3.25 1.875 1.494 2.636 3.25-1.875.209 1.245a1.394 1.394 0 002.757-.047l.454-3.429a2.104 2.104 0 00-1.255-2.21L13.498.113a1.394 1.394 0 00-1.61.376z"
                fill="#83DEFF"
            />
            <Path
                d="M8.835 15.143h-.909v-1.507a1.515 1.515 0 00-3.03 0v1.507h-.91a1.515 1.515 0 100 3.03h.91v.312a1.515 1.515 0 003.03 0v-.312h.91a1.515 1.515 0 000-3.03z"
                fill="#FF8DE4"
            />
            <Path
                d="M6.43 1.785c-.422 0-.834.04-1.232.119 0 0-1.604 1.858-.331 3.3a3.333 3.333 0 112.282 6.2s-.102 2.541 2.802 2.045A6.364 6.364 0 006.43 1.784z"
                fill="#B18CD9"
            />
            <Path
                d="M9.951 13.45A6.364 6.364 0 115.197 1.904a14.77 14.77 0 00-.33 3.299 3.333 3.333 0 002.282 6.2c.711.774 1.629 1.472 2.802 2.045z"
                fill="#996ACC"
            />
        </Svg>
    )
}

export default TransComponent
