import * as React from "react"
import Svg, { Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg"

function ProfileComponent(props) {
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
                stroke="url(#paint0_radial_155_8407)"
                strokeOpacity={0.8}
                strokeWidth={1.5}
            />
            <Path
                d="M25 24.655c-2.14 0-3.88-1.741-3.88-3.88 0-2.14 1.74-3.881 3.88-3.881 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88zm0-6.511c-1.45 0-2.63 1.18-2.63 2.63s1.18 2.63 2.63 2.63 2.63-1.18 2.63-2.63-1.18-2.63-2.63-2.63z"
                fill="url(#paint1_radial_155_8407)"
                fillOpacity={0.8}
            />
            <Path
                d="M27.425 33.106h-4.85c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88h4.85c2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88zm-4.85-6.51c-1.45 0-2.63 1.18-2.63 2.63s1.18 2.63 2.63 2.63h4.85c1.45 0 2.63-1.18 2.63-2.63s-1.18-2.63-2.63-2.63h-4.85z"
                fill="url(#paint2_radial_155_8407)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_155_8407"
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
                    id="paint1_radial_155_8407"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.074 -10.559 34.737) scale(10.539 16.8557)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <RadialGradient
                    id="paint2_radial_155_8407"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(12.30288 7.33047 -10.31606 17.31366 18.808 25.577)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default ProfileComponent
