import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PrimeComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 66 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M53.831 43.422H12.169l.97-6.743h39.722l.97 6.743z"
                fill="#431A71"
            />
            <Path
                d="M65.166 12.44L52.9 37.199H13.101L.834 12.441l11.761 3.353a6.08 6.08 0 00-.23 1.654 6.013 6.013 0 109.947-4.54L33 .579l10.688 12.328a6.011 6.011 0 109.946 4.54c0-.56-.077-1.116-.229-1.654l11.761-3.351z"
                fill="#8041C6"
            />
        </Svg>
    )
}

export default PrimeComponent
