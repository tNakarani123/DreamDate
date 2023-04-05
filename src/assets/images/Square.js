import * as React from "react"
import Svg, { Rect, Defs, RadialGradient, Stop } from "react-native-svg"

function SquareComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 148 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={147.5} height={150} rx={20} fill="#FF115E" />
            <Rect
                width={147.5}
                height={150}
                rx={20}
                fill="url(#paint0_radial_99_1070)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_99_1070"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.556 -4.783 3.85) scale(201.959 323.134)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default SquareComponent
