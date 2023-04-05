import * as React from "react"
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    RadialGradient,
    ClipPath
} from "react-native-svg"

function BusinessComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 71 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={35.5} cy={35} r={35} fill="url(#paint0_linear_345_110)" />
            <G clipPath="url(#clip0_345_110)">
                <Path
                    d="M47.5 26.25h-6.25V25c0-1.379-1.121-2.5-2.5-2.5h-7.5a2.502 2.502 0 00-2.5 2.5v1.25H22.5a2.503 2.503 0 00-2.5 2.5v3.75c0 1.379 1.121 2.5 2.5 2.5h10v-.625c0-.345.28-.625.625-.625h3.75c.346 0 .625.28.625.625V35h10c1.379 0 2.5-1.121 2.5-2.5v-3.75c0-1.379-1.121-2.5-2.5-2.5zm-8.75 0h-7.5V25h7.5v1.25z"
                    fill="url(#paint1_radial_345_110)"
                />
                <Path
                    d="M49.653 35.674a.626.626 0 00-.655.062 2.468 2.468 0 01-1.498.514h-10v1.875c0 .345-.28.625-.625.625h-3.75a.625.625 0 01-.625-.625V36.25h-10a2.468 2.468 0 01-1.498-.514.625.625 0 00-1.002.498V45c0 1.379 1.121 2.5 2.5 2.5h25c1.379 0 2.5-1.121 2.5-2.5v-8.766a.625.625 0 00-.347-.56z"
                    fill="url(#paint2_radial_345_110)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_345_110"
                    x1={6.43479}
                    y1={-151.667}
                    x2={149.199}
                    y2={-99.6302}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <RadialGradient
                    id="paint1_radial_345_110"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(21.97 -48.78 63.649) scale(31.5618 35.0455)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <RadialGradient
                    id="paint2_radial_345_110"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(29.26988 11.2332 -12.02582 31.3352 20.27 35.962)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <ClipPath id="clip0_345_110">
                    <Path fill="#fff" transform="translate(20 20)" d="M0 0H30V30H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BusinessComponent
