import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatGalleryComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M24.81.65H5.31C2.43.65 0 3.08 0 5.99v16.02c0 2.91 2.43 5.34 5.34 5.34h19.35c2.88 0 5.34-2.43 5.34-5.34V5.99c.12-2.91-2.31-5.34-5.22-5.34zm2.13 21.51c0 1.23-.9 2.28-2.13 2.28H5.31c-1.23 0-2.28-1.08-2.28-2.28V5.99c0-1.23 1.08-2.28 2.28-2.28h19.35c1.23 0 2.28 1.08 2.28 2.28v16.17z"
                fill="#fff"
            />
            <Path
                d="M22.08 5.84c-.6 0-1.23.3-1.68.75-.45.45-.6.93-.6 1.53 0 1.23 1.08 2.28 2.28 2.28 1.2 0 2.28-1.08 2.28-2.28 0-1.2-1.08-2.28-2.28-2.28zM20.25 12.08c-.45-1.08-1.98-1.23-2.73-.3l-1.98 2.91c-.6.93-1.98.93-2.58 0l-.6-.75c-.6-.93-1.98-.75-2.58.15l-3.39 5.34c-.6 1.08 0 2.43 1.38 2.43h14.31c1.08 0 1.83-1.23 1.38-2.28l-3.21-7.5z"
                fill="#fff"
            />
        </Svg>
    )
}

export default ChatGalleryComponent
