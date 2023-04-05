import * as React from "react"
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    RadialGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function LikeComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={25}
                cy={25}
                r={24.25}
                stroke="url(#paint0_radial_155_8406)"
                strokeOpacity={0.8}
                strokeWidth={1.5}
            />
            <G clipPath="url(#clip0_155_8406)">
                <Path
                    d="M29.219 17.25A5.791 5.791 0 0025 19.081a5.78 5.78 0 00-10 3.95c0 5.757 9.284 11.407 9.688 11.628a.625.625 0 00.643 0C25.716 34.438 35 28.788 35 23.031a5.788 5.788 0 00-5.781-5.781zM25 33.388c-1.616-1.032-8.75-5.85-8.75-10.357a4.531 4.531 0 018.238-2.603.626.626 0 001.021 0 4.531 4.531 0 018.241 2.603c0 4.503-7.134 9.322-8.75 10.357z"
                    fill="url(#paint1_radial_155_8406)"
                    fillOpacity={0.8}
                />
            </G>
            <Defs>
                <RadialGradient
                    id="paint0_radial_155_8406"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.074 -1.613 1.3) scale(67.9013 108.598)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <RadialGradient
                    id="paint1_radial_155_8406"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(40.268 -16.646 29.588) scale(25.5734 40.3653)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <ClipPath id="clip0_155_8406">
                    <Path fill="#fff" transform="translate(15 16)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default LikeComponent
