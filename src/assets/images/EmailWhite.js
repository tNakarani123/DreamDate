import * as React from "react"
import Svg, { Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg"

function EmailWhiteComponent(props) {
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
                fill="url(#paint0_radial_50_459)"
                fillOpacity={0.8}
            />
            <Path
                d="M27.193 28.404c1.47.76 3.195.76 4.614 0l7.962-4.057 1.825-.913A4.245 4.245 0 0037.74 21H21.31c-1.673 0-3.143 1.014-3.854 2.434l1.826.913 7.91 4.057z"
                fill="#FF115E"
            />
            <Path
                d="M27.193 28.404c1.47.76 3.195.76 4.614 0l7.962-4.057 1.825-.913A4.245 4.245 0 0037.74 21H21.31c-1.673 0-3.143 1.014-3.854 2.434l1.826.913 7.91 4.057z"
                fill="url(#paint1_radial_50_459)"
                fillOpacity={0.8}
            />
            <Path
                d="M32.77 30.23a7.263 7.263 0 01-3.245.76 7.263 7.263 0 01-3.245-.76l-7.252-3.703L17 25.513v9.635c0 2.333 1.927 4.26 4.26 4.26h16.48c2.333 0 4.26-1.927 4.26-4.26v-9.635l-2.028 1.014-7.201 3.702z"
                fill="#FF115E"
            />
            <Path
                d="M32.77 30.23a7.263 7.263 0 01-3.245.76 7.263 7.263 0 01-3.245-.76l-7.252-3.703L17 25.513v9.635c0 2.333 1.927 4.26 4.26 4.26h16.48c2.333 0 4.26-1.927 4.26-4.26v-9.635l-2.028 1.014-7.201 3.702z"
                fill="url(#paint2_radial_50_459)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_50_459"
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
                    id="paint1_radial_50_459"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(23.55048 7.53259 -6.99504 21.86986 17.674 21.237)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <RadialGradient
                    id="paint2_radial_50_459"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(24.39156 13.12516 -17.52798 32.57368 17.225 25.927)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default EmailWhiteComponent
