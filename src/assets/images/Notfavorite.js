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

function NotfavoriteComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={35} cy={35} r={35} fill="url(#paint0_linear_124_427)" />
            <G clipPath="url(#clip0_124_427)">
                <Path
                    d="M35.874 34.512l5.84-5.84a.97.97 0 10-1.373-1.375L34.5 33.138l-5.84-5.84a.97.97 0 10-1.375 1.373l5.84 5.841-5.84 5.841a.97.97 0 101.374 1.374l5.84-5.84 5.842 5.84a.97.97 0 001.374 0 .97.97 0 000-1.374l-5.84-5.84z"
                    fill="url(#paint1_linear_124_427)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_124_427"
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
                    id="paint1_linear_124_427"
                    x1={12.5}
                    y1={13.2893}
                    x2={47.4488}
                    y2={28.9726}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_124_427">
                    <Path fill="#fff" transform="translate(27 27)" d="M0 0H15V15H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default NotfavoriteComponent
