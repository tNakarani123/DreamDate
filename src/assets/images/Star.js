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

function StarComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={40} cy={40} r={40} fill="url(#paint0_linear_124_428)" />
            <G clipPath="url(#clip0_124_428)">
                <Path
                    d="M29.834 55.609a1.86 1.86 0 01-1.813-2.275l2.252-9.919-7.636-6.697a1.86 1.86 0 011.054-3.255l10.104-.917 3.994-9.348a1.86 1.86 0 013.422-.002l3.994 9.35 10.102.917c.744.067 1.371.57 1.601 1.28.23.708.018 1.485-.544 1.975l-7.636 6.696 2.252 9.918a1.86 1.86 0 01-2.768 2.01L39.5 50.135l-8.712 5.21a1.864 1.864 0 01-.954.264zm9.666-7.717c.331 0 .659.09.954.264l8.222 4.918-2.125-9.361a1.86 1.86 0 01.59-1.813l7.21-6.323-9.54-.867a1.858 1.858 0 01-1.546-1.127L39.5 24.76l-3.77 8.823a1.853 1.853 0 01-1.541 1.123l-9.541.867 7.21 6.323c.516.452.742 1.146.59 1.814l-2.124 9.361 8.222-4.916c.295-.175.623-.264.954-.264zm-5.782-15.165l-.002.003.002-.003zm11.561-.005l.002.003-.002-.003z"
                    fill="url(#paint1_linear_124_428)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_124_428"
                    x1={6.78262}
                    y1={-173.333}
                    x2={169.941}
                    y2={-113.863}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_124_428"
                    x1={-11.8334}
                    y1={-8.61873}
                    x2={68.5174}
                    y2={29.0061}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_124_428">
                    <Path fill="#fff" transform="translate(22 22)" d="M0 0H35V35H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default StarComponent
