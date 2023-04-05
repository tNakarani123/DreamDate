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

function MapComponent(props) {
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
                stroke="url(#paint0_radial_155_8405)"
                strokeOpacity={0.8}
                strokeWidth={1.5}
            />
            <G clipPath="url(#clip0_155_8405)">
                <Path
                    d="M34.286 15a.714.714 0 00-.32.075l-5.412 2.707-6.121-2.72c-.01-.005-.021-.005-.032-.01a.712.712 0 00-.084-.025.73.73 0 00-.087-.018 1.055 1.055 0 00-.174 0 .73.73 0 00-.087.018.71.71 0 00-.084.026c-.01.004-.022.004-.032.009l-6.429 2.857a.714.714 0 00-.424.653v15.714a.714.714 0 001.005.653l6.138-2.729 6.138 2.729c.011.004.023 0 .033.006a.63.63 0 00.541-.012c.011-.005.024 0 .036-.008l5.714-2.857a.714.714 0 00.395-.64V15.716a.714.714 0 00-.714-.715zM21.429 30.964l-5 2.223V19.036l5-2.222v14.15zm6.428 2.223l-5-2.223v-14.15l5 2.222v14.15zm5.714-2.2l-4.285 2.143V19.013l4.285-2.143v14.117z"
                    fill="url(#paint1_radial_155_8405)"
                    fillOpacity={0.8}
                />
            </G>
            <Defs>
                <RadialGradient
                    id="paint0_radial_155_8405"
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
                    id="paint1_radial_155_8405"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.075 -11.673 26.548) scale(27.1603 43.439)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <ClipPath id="clip0_155_8405">
                    <Path fill="#fff" transform="translate(15 15)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default MapComponent
