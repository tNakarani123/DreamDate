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

function LoveComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={35} cy={35} r={35} fill="url(#paint0_linear_345_111)" />
            <G clipPath="url(#clip0_345_111)">
                <Path
                    d="M50 29.35c0 9.34-14.219 18.866-14.822 19.266a.318.318 0 01-.172.053.32.32 0 01-.175-.053C34.225 48.216 20 38.69 20 29.35c0-4.422 3.597-8.019 8.022-8.019a8.065 8.065 0 016.981 4.075 8.043 8.043 0 016.975-4.075c4.425 0 8.022 3.597 8.022 8.019z"
                    fill="url(#paint1_linear_345_111)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_345_111"
                    x1={5.93479}
                    y1={-151.667}
                    x2={148.699}
                    y2={-99.6302}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_345_111"
                    x1={-9}
                    y1={-3.67913}
                    x2={58.584}
                    y2={29.6023}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_345_111">
                    <Path fill="#fff" transform="translate(20 20)" d="M0 0H30V30H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default LoveComponent
