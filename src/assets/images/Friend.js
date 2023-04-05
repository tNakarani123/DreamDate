import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FriendComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 71 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={35.5} cy={35} r={35} fill="url(#paint0_linear_345_109)" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.37 35.243a5.392 5.392 0 013.71 1.467 8.998 8.998 0 00-2.839 5.002c-.289.03-.58.045-.87.045A8.17 8.17 0 0121 39.755c.468-2.586 2.743-4.51 5.37-4.51zm0-7a2.988 2.988 0 11.001 5.975 2.988 2.988 0 010-5.976zm14.187 1.226a4.558 4.558 0 11-9.116 0 4.558 4.558 0 019.116 0zm2.084 1.761a2.988 2.988 0 115.976 0 2.988 2.988 0 01-5.976 0zM27.933 42.04a12.205 12.205 0 0016.135.003c-.66-3.924-4.094-6.859-8.068-6.859-3.972 0-7.406 2.934-8.067 6.857zm13.987-5.33a5.393 5.393 0 013.71-1.467c2.628 0 4.903 1.926 5.37 4.511a8.17 8.17 0 01-6.241 1.958 8.994 8.994 0 00-2.839-5.002z"
                fill="url(#paint1_linear_345_109)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_345_109"
                    x1={6.43479}
                    y1={-151.667}
                    x2={149.199}
                    y2={-99.6302}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_345_109"
                    x1={-8}
                    y1={6.45076}
                    x2={50.1077}
                    y2={45.2192}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default FriendComponent
