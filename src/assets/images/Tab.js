import * as React from "react"
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg"

function TabComponent(props) {
    return (
        <Svg
            width={props.width}
            height={100}
            viewBox="0 0 375 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M0 0s85.5 15.5 187.5 15.5S375 0 375 0v100H0V0z" fill="#FE5B73" />
            <Path
                d="M0 0s85.5 15.5 187.5 15.5S375 0 375 0v100H0V0z"
                fill="url(#paint0_radial_124_413)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_124_413"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(14.477 -10.026 14.766) scale(377.871 292.718)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default TabComponent
