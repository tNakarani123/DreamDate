import * as React from "react"
import Svg, {
    Circle,
    Path,
    Defs,
    RadialGradient,
    Stop,
    LinearGradient
} from "react-native-svg"

function Active_HomeComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 50 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={30.5}
                cy={65.5}
                r={2.5}
                fill="url(#paint0_radial_345_114)"
                fillOpacity={0.8}
            />
            <Circle cx={30} cy={30} r={30} fill="url(#paint1_linear_345_114)" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.35 20.72a3.791 3.791 0 00-4.7 0l-6.416 5.065a3.791 3.791 0 00-1.442 2.976v7.655a3.792 3.792 0 003.791 3.792h1.75c.162 0 .292-.13.292-.291v-3.5a3.208 3.208 0 013.208-3.209h2.334a3.208 3.208 0 013.208 3.209v3.5c0 .16.13.291.292.291h1.75a3.792 3.792 0 003.791-3.791V28.76c0-1.16-.531-2.257-1.442-2.976L32.35 20.72zm-5.784-1.374a5.542 5.542 0 016.868 0l6.417 5.066a5.542 5.542 0 012.107 4.35v7.654a5.542 5.542 0 01-5.541 5.542h-1.75a2.042 2.042 0 01-2.042-2.041v-3.5c0-.806-.653-1.459-1.458-1.459h-2.334c-.805 0-1.458.653-1.458 1.459v3.5a2.042 2.042 0 01-2.042 2.041h-1.75a5.542 5.542 0 01-5.541-5.541V28.76c0-1.696.776-3.298 2.108-4.35l6.416-5.065z"
                fill="#7842C2"
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_345_114"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.074 -63.982 66.217) scale(6.79013 10.8598)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <LinearGradient
                    id="paint1_linear_345_114"
                    x1={-58}
                    y1={-54.8926}
                    x2={81.796}
                    y2={7.83967}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default Active_HomeComponent
