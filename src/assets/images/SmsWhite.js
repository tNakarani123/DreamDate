import * as React from "react"
import Svg, { Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg"

function SmsWhiteComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={30}
                cy={30}
                r={30}
                fill="url(#paint0_radial_50_47)"
                fillOpacity={0.8}
            />
            <Path
                d="M33.977 17H25.66A2.662 2.662 0 0023 19.66V39.34A2.662 2.662 0 0025.659 42h8.318a2.662 2.662 0 002.66-2.659V19.659A2.662 2.662 0 0033.976 17zm-4.159 22.727a1.136 1.136 0 110-2.272 1.136 1.136 0 010 2.272zm1.705-19.318h-3.41a.568.568 0 010-1.136h3.41a.568.568 0 110 1.136z"
                fill="#FF125E"
            />
            <Path
                d="M33.977 17H25.66A2.662 2.662 0 0023 19.66V39.34A2.662 2.662 0 0025.659 42h8.318a2.662 2.662 0 002.66-2.659V19.659A2.662 2.662 0 0033.976 17zm-4.159 22.727a1.136 1.136 0 110-2.272 1.136 1.136 0 010 2.272zm1.705-19.318h-3.41a.568.568 0 010-1.136h3.41a.568.568 0 110 1.136z"
                fill="url(#paint1_radial_50_47)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_50_47"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.074 -1.935 1.56) scale(81.4816 130.318)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <RadialGradient
                    id="paint1_radial_50_47"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(13.30451 23.61575 -32.3211 18.20888 23.123 17.744)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default SmsWhiteComponent
