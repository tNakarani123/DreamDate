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

function MessageComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_156_119)" />
            <G clipPath="url(#clip0_156_119)">
                <Path
                    d="M25 10.834H15A4.172 4.172 0 0010.834 15v6.667a4.174 4.174 0 003.333 4.083v2.584a.833.833 0 001.296.693l4.787-3.194H25a4.171 4.171 0 004.167-4.166V15A4.172 4.172 0 0025 10.834zm-1.666 10h-6.667a.833.833 0 010-1.667h6.666a.833.833 0 010 1.666zM25 17.5H15a.833.833 0 110-1.666h10a.833.833 0 010 1.666z"
                    fill="url(#paint1_linear_156_119)"
                    fillOpacity={0.8}
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_156_119"
                    x1={3.39131}
                    y1={-86.6667}
                    x2={84.9707}
                    y2={-56.9316}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_156_119"
                    x1={-6.88873}
                    y1={-5.93935}
                    x2={35.8268}
                    y2={13.2288}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_156_119">
                    <Path fill="#fff" transform="translate(10 10)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default MessageComponent
