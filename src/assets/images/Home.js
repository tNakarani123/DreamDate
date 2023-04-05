import * as React from "react"
import Svg, { Circle, Path, Defs, RadialGradient, Stop } from "react-native-svg"

function HomeComponent(props) {
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
                stroke="url(#paint0_radial_155_155)"
                strokeOpacity={0.8}
                strokeWidth={1.5}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.598 16.214a3.385 3.385 0 00-4.196 0l-5.729 4.523a3.385 3.385 0 00-1.287 2.657v6.835a3.385 3.385 0 003.385 3.386h1.562a.26.26 0 00.26-.26v-3.126a2.865 2.865 0 012.865-2.864h2.084a2.865 2.865 0 012.864 2.864v3.125c0 .144.117.26.26.26h1.563a3.385 3.385 0 003.386-3.385v-6.835a3.386 3.386 0 00-1.288-2.657l-5.73-4.523zm-5.164-1.226a4.948 4.948 0 016.132 0l5.73 4.523a4.948 4.948 0 011.881 3.883v6.835a4.948 4.948 0 01-4.948 4.948h-1.562a1.823 1.823 0 01-1.823-1.823V30.23c0-.719-.583-1.302-1.302-1.302h-2.084c-.719 0-1.302.583-1.302 1.302v3.125a1.823 1.823 0 01-1.823 1.823h-1.562a4.948 4.948 0 01-4.948-4.948v-6.835c0-1.514.693-2.945 1.882-3.883l5.73-4.523z"
                fill="url(#paint1_radial_155_155)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_155_155"
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
                    id="paint1_radial_155_155"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(20.83444 20.07698 -32.10504 33.3163 14.015 14.556)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default HomeComponent
