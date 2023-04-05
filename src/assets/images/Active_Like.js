import * as React from "react"
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function Active_LikeComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 50 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={30} cy={30} r={30} fill="url(#paint0_linear_345_116)" />
            <G clipPath="url(#clip0_345_116)">
                <Path
                    d="M35.773 19.563a7.24 7.24 0 00-5.273 2.289A7.227 7.227 0 0018 26.789c0 7.195 11.605 14.258 12.11 14.535a.781.781 0 00.804 0C31.394 41.047 43 33.984 43 26.79a7.235 7.235 0 00-7.227-7.227zM30.5 39.733c-2.02-1.289-10.938-7.312-10.938-12.945a5.664 5.664 0 0110.297-3.254.782.782 0 001.278 0 5.664 5.664 0 0110.3 3.254c0 5.629-8.917 11.652-10.937 12.945z"
                    fill="#7842C2"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_345_116"
                    x1={-58}
                    y1={-54.8926}
                    x2={81.796}
                    y2={7.83967}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_345_116">
                    <Path fill="#fff" transform="translate(18 18)" d="M0 0H25V25H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Active_LikeComponent
