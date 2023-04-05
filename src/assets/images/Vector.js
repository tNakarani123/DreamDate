import * as React from "react"
import Svg, { Path } from "react-native-svg"

function VectorComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            {...props}
        >
            <Path d="M951.5 309.3c-24.7-58.3-60-110.8-105-155.8-45-45-97.4-80.3-155.8-105C630.3 23 566.1 10 500 10S369.7 23 309.3 48.5c-58.4 24.7-110.8 60-155.8 105-45 45-80.3 97.4-105 155.8C23 369.7 10 433.9 10 500s13 130.3 38.5 190.7c24.7 58.3 60 110.8 105 155.8 45 45 97.4 80.3 155.8 105C369.7 977 433.9 990 500 990s130.3-13 190.7-38.5c58.3-24.7 110.8-60 155.8-105 45-45 80.3-97.4 105-155.8C977 630.3 990 566.1 990 500s-13-130.3-38.5-190.7zM500 978.7C236.1 978.7 21.3 763.9 21.3 500S236.1 21.3 500 21.3 978.7 236 978.7 500 763.9 978.7 500 978.7z" />
        </Svg>
    )
}

export default VectorComponent
