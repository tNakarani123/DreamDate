import * as React from "react"
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg"

function CircleComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={30} cy={30} r={30} fill="#FF115E" />
            <Circle
                cx={30}
                cy={30}
                r={30}
                fill="url(#paint0_radial_54_80)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_54_80"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.074 -1.935 1.56) scale(81.4816 130.318)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default CircleComponent
