import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FacebookComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25z"
                fill="#3B5998"
            />
            <Path
                d="M15.642 12.99h-2.23v8.17h-3.38v-8.17H8.426v-2.872h1.607V8.259c0-1.329.632-3.41 3.41-3.41l2.503.01v2.788H14.13c-.298 0-.717.15-.717.783v1.69h2.526l-.296 2.87z"
                fill="#fff"
            />
        </Svg>
    )
}

export default FacebookComponent
