import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SmokingComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M19.974 11.531H0v3.73h19.974v-3.73z" fill="#E4E9ED" />
            <Path
                d="M17.984.74s-1.688.735-1.688 3.403c0 2.26 2.37 2.479 2.37 4.276 0 1.335-.382 1.743-.382 1.743S20 8.8 20 6.867c0-2.832-2.642-1.362-2.016-6.128z"
                fill="#C7D9E5"
            />
            <Path d="M6.668 11.531H0v3.73h6.668v-3.73z" fill="#F49F00" />
            <Path d="M7.34 11.531H5.995v3.73H7.34v-3.73z" fill="#BABECB" />
            <Path d="M19.974 13.915H0v1.346h19.974v-1.345z" fill="#D7D9DB" />
            <Path d="M19.974 11.531h-1.812v3.73h1.812v-3.73z" fill="#A5A7B7" />
            <Path d="M19.974 13.915h-1.812v1.346h1.812v-1.345z" fill="#9396A3" />
            <Path d="M6.668 13.915H0v1.346h6.668v-1.345z" fill="#DD8903" />
            <Path d="M7.34 13.915H5.995v1.346H7.34v-1.345z" fill="#9EA3B2" />
        </Svg>
    )
}

export default SmokingComponent
