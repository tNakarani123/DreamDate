import * as React from "react"
import Svg, {
    G,
    Circle,
    Path,
    Defs,
    RadialGradient,
    Stop,
    LinearGradient,
    ClipPath
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LogoComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#filter0_b_47_51)">
                <Circle cx={40} cy={40} r={40} fill="url(#paint0_radial_47_51)" />
            </G>
            <G clipPath="url(#clip0_47_51)">
                <Path
                    d="M40.453 45.49c-1.034-1.003-1.907-2.299-3.115-2.937-3.922-2.07-8.013.75-8.083 5.542-.06 4.12 1.945 7.401 4.663 10.216 5.506 5.7 7.548 5.532 12.368-.789 6.983-9.156 4.175-19.57-6.342-24.059-1.588-.678-3.245-1.992-4.102-3.471-1.739-3 .105-6.479 3.5-7.017 5.363-.85 9.649 1.402 13.106 5.333 6.655 7.573 7.831 17.147 2.43 26.17-3.19 5.33-7.452 10.036-11.53 14.759-2.24 2.596-5.37 1.881-7.414-.808-2.303-3.032-4.956-5.788-7.332-8.767-1.96-2.459-4.3-4.82-5.494-7.653-3.475-8.246 3.167-17.58 11.918-16.924 1.967.148 4.114 1.066 5.718 2.267 3.005 2.25 2.703 5.77-.29 8.137v.001z"
                    fill="url(#paint1_linear_47_51)"
                />
                <Path
                    d="M40.453 45.49c-1.034-1.003-1.907-2.299-3.115-2.937-3.922-2.07-8.013.75-8.083 5.542-.06 4.12 1.945 7.401 4.663 10.216 5.506 5.7 7.548 5.532 12.368-.789 6.983-9.156 4.175-19.57-6.342-24.059-1.588-.678-3.245-1.992-4.102-3.471-1.739-3 .105-6.479 3.5-7.017 5.363-.85 9.649 1.402 13.106 5.333 6.655 7.573 7.831 17.147 2.43 26.17-3.19 5.33-7.452 10.036-11.53 14.759-2.24 2.596-5.37 1.881-7.414-.808-2.303-3.032-4.956-5.788-7.332-8.767-1.96-2.459-4.3-4.82-5.494-7.653-3.475-8.246 3.167-17.58 11.918-16.924 1.967.148 4.114 1.066 5.718 2.267 3.005 2.25 2.703 5.77-.29 8.137v.001z"
                    fill="url(#paint2_linear_47_51)"
                />
                <Path
                    d="M26.705 23.692c3.169.115 5.71 2.86 5.653 6.108-.053 3.02-2.793 5.786-5.668 5.72-3.37-.077-5.71-2.776-5.539-6.385.132-2.73 2.993-5.537 5.554-5.444z"
                    fill="url(#paint3_linear_47_51)"
                />
                <Path
                    d="M26.705 23.692c3.169.115 5.71 2.86 5.653 6.108-.053 3.02-2.793 5.786-5.668 5.72-3.37-.077-5.71-2.776-5.539-6.385.132-2.73 2.993-5.537 5.554-5.444z"
                    fill="url(#paint4_linear_47_51)"
                />
                <Path
                    d="M34.574 8.573c3.168.115 5.709 2.86 5.652 6.108-.053 3.02-2.793 5.787-5.667 5.72-3.37-.076-5.713-2.776-5.54-6.385.13-2.73 2.994-5.536 5.555-5.443z"
                    fill="url(#paint5_linear_47_51)"
                />
                <Path
                    d="M34.574 8.573c3.168.115 5.709 2.86 5.652 6.108-.053 3.02-2.793 5.787-5.667 5.72-3.37-.076-5.713-2.776-5.54-6.385.13-2.73 2.994-5.536 5.555-5.443z"
                    fill="url(#paint6_linear_47_51)"
                />
            </G>
            <Defs>
                <RadialGradient
                    id="paint0_radial_47_51"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(44.074 -2.58 2.079) scale(108.642 173.758)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
                <LinearGradient
                    id="paint1_linear_47_51"
                    x1={22.1672}
                    y1={46.8272}
                    x2={58.2856}
                    y2={46.8272}
                    gradientUnits="userSpaceOnUse"
                >

                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_47_51"
                    x1={25.2296}
                    y1={-81.3302}
                    x2={102.853}
                    y2={-60.0672}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_47_51"
                    x1={21.1426}
                    y1={29.6048}
                    x2={32.3596}
                    y2={29.6048}
                    gradientUnits="userSpaceOnUse"
                >

                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_47_51"
                    x1={22.0931}
                    y1={-1.94624}
                    x2={45.2444}
                    y2={6.0536}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_47_51"
                    x1={29.0093}
                    y1={14.4881}
                    x2={40.2262}
                    y2={14.4881}
                    gradientUnits="userSpaceOnUse"
                >

                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_47_51"
                    x1={29.9613}
                    y1={-17.0646}
                    x2={53.1128}
                    y2={-9.06459}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <ClipPath id="clip0_47_51">
                    <Path
                        fill="#fff"
                        transform="translate(21.143 8.571)"
                        d="M0 0H37.1429V62.2857H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default LogoComponent
