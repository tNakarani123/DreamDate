import * as React from "react"
import Svg, { Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg"

function AddBtnComponent(props) {
    return (
        <Svg
            width={props.height}
            height={props.width}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={22.5}
                cy={22.5}
                r={22.5}
                fill="url(#paint0_radial_67_763)"
                fillOpacity={0.8}
            />
            <Path
                d="M21.703 28.077v-9.603h1.91v9.603h-1.91zm-3.842-3.85v-1.91h9.602v1.91h-9.602z"
                fill="#8041C6"
            />
            <Path
                d="M21.703 28.077v-9.603h1.91v9.603h-1.91zm-3.842-3.85v-1.91h9.602v1.91h-9.602z"
                fill="url(#paint1_radial_67_763)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_67_763"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.074 -1.451 1.17) scale(61.1112 97.7386)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.53} />
                </RadialGradient>
                <RadialGradient
                    id="paint1_radial_67_763"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(58.931 -1.419 19.628) scale(26.468 37.4439)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default AddBtnComponent
