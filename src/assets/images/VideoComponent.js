import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function VideoComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_478_350)" />
            <Path
                d="M29.843 15.038h0a.524.524 0 00-.518-.01h0l-4.44 2.425V16.12v0a2.221 2.221 0 00-2.22-2.219h0H12.12h0A2.221 2.221 0 009.9 16.119v8.365h0a2.221 2.221 0 002.218 2.219h10.548a2.221 2.221 0 002.218-2.219v0-1.308l4.441 2.425c.163.089.36.085.518-.009h0a.524.524 0 00.257-.45v-9.654a.524.524 0 00-.257-.45zm-6.007 9.446c0 .647-.524 1.17-1.17 1.171H12.118c-.647 0-1.17-.524-1.171-1.17v-8.366c0-.647.524-1.17 1.17-1.171h10.548c.646 0 1.17.524 1.17 1.17v8.366zm1.048-5.837l4.168-2.276v7.888l-4.168-2.276v-3.336z"
                fill="url(#paint1_linear_478_350)"
                stroke="url(#paint2_linear_478_350)"
                strokeWidth={0.2}
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_478_350"
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
                    id="paint1_linear_478_350"
                    x1={-9.33333}
                    y1={2.47016}
                    x2={27.8113}
                    y2={28.9223}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_478_350"
                    x1={-9.33333}
                    y1={2.47016}
                    x2={27.8113}
                    y2={28.9223}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default VideoComponent
