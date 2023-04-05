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

function FavoriteComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={35} cy={35} r={35} fill="url(#paint0_linear_124_429)" />
            <G clipPath="url(#clip0_124_429)">
                <Path
                    d="M39.219 26.25A5.791 5.791 0 0035 28.081a5.781 5.781 0 00-10 3.95c0 5.757 9.284 11.407 9.688 11.628a.625.625 0 00.643 0C35.716 43.438 45 37.788 45 32.031a5.788 5.788 0 00-5.781-5.781zM35 42.388c-1.616-1.032-8.75-5.85-8.75-10.357a4.531 4.531 0 018.237-2.603.626.626 0 001.022 0 4.531 4.531 0 018.241 2.603c0 4.503-7.134 9.322-8.75 10.357z"
                    fill="url(#paint1_linear_124_429)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_124_429"
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
                    id="paint1_linear_124_429"
                    x1={5.66667}
                    y1={10.2409}
                    x2={49.9896}
                    y2={32.9736}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_124_429">
                    <Path fill="#fff" transform="translate(25 25)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default FavoriteComponent
