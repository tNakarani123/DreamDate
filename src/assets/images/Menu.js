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

function MenuComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_411_3508)" />
            <G clipPath="url(#clip0_411_3508)">
                <Path
                    d="M20.334 14.444a2.222 2.222 0 100-4.444 2.222 2.222 0 000 4.444z"
                    fill="url(#paint1_linear_411_3508)"
                />
                <Path
                    d="M20.334 22.222a2.222 2.222 0 100-4.445 2.222 2.222 0 000 4.445z"
                    fill="url(#paint2_linear_411_3508)"
                />
                <Path
                    d="M20.334 30a2.222 2.222 0 100-4.444 2.222 2.222 0 000 4.444z"
                    fill="url(#paint3_linear_411_3508)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_411_3508"
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
                    id="paint1_linear_411_3508"
                    x1={13.815}
                    y1={5.93385}
                    x2={24.1703}
                    y2={10.5807}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_411_3508"
                    x1={13.815}
                    y1={13.7112}
                    x2={24.1703}
                    y2={18.3581}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_411_3508"
                    x1={13.815}
                    y1={21.4895}
                    x2={24.1703}
                    y2={26.1364}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_411_3508">
                    <Path fill="#fff" transform="translate(10 10)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default MenuComponent
