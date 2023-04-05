import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function HeartComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M20 6.234c0 6.227-9.48 12.577-9.881 12.843a.212.212 0 01-.115.036.213.213 0 01-.117-.036C9.483 18.811 0 12.461 0 6.234A5.352 5.352 0 015.348.888a5.377 5.377 0 014.654 2.716 5.362 5.362 0 014.65-2.716A5.352 5.352 0 0120 6.234z"
                fill="url(#paint0_linear_325_1184)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_325_1184"
                    x1={3.48156}
                    y1={13.5804}
                    x2={16.5196}
                    y2={0.542423}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FB2E7B" />
                    <Stop offset={1} stopColor="#FF855D" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default HeartComponent
