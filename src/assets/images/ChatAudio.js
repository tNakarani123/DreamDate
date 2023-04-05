import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatAudioComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M28.19 15.988h-.067v-2.472c0-7.23-5.894-13.112-13.124-13.112C7.77.404 1.877 6.286 1.877 13.516v2.472H1.81C.81 15.988 0 16.734 0 17.732l.004 4.624c0 .997.811 1.834 1.809 1.834h.123c.186.937.904 1.406 1.761 1.406h.994c.997 0 1.873-.931 1.873-1.93v-7.345c0-1.013-.893-1.739-1.873-1.739h-.237v-1.255C4.454 7.497 9.17 2.752 15 2.752c5.83 0 10.545 4.744 10.545 10.575v1.255h-.236c-.98 0-1.873.726-1.873 1.739v7.346c0 .998.876 1.93 1.873 1.93h.993c.858 0 1.576-.47 1.762-1.406h.123c.998 0 1.81-.87 1.81-1.868L30 17.761c0-.997-.811-1.773-1.81-1.773z"
                fill="#fff"
            />
        </Svg>
    )
}

export default ChatAudioComponent
