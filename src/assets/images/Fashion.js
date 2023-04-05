import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FashionComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.5 2.168h-15a.417.417 0 01-.417-.417c0-.23.187-.417.32-.417h15c.327 0 .513.187.513.417a.417.417 0 01-.416.417z"
                fill="url(#paint0_linear_95_847)"
            />
            <Path
                d="M1.667 3a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0-1.666a.417.417 0 100 .834.417.417 0 000-.834z"
                fill="url(#paint1_linear_95_847)"
            />
            <Path
                d="M18.333 3a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0-1.666a.416.416 0 100 .833.416.416 0 000-.833z"
                fill="url(#paint2_linear_95_847)"
            />
            <Path
                d="M17.321 3.417l2.444 1.19a.417.417 0 01.222.479l-.33 1.282a.418.418 0 01-.192.255c-.436.258-1.686 1.123-1.686 2.597l2.043 3.58a.83.83 0 01-.048.9c-.559.767-1.927 2.215-4.286 2.215-2.36 0-3.727-1.448-4.286-2.214a.83.83 0 01-.048-.9l2.042-3.58c0-1.475-1.25-2.34-1.685-2.598a.417.417 0 01-.193-.255l-.329-1.282a.416.416 0 01.221-.478l2.445-1.19h3.666z"
                fill="url(#paint3_linear_95_847)"
            />
            <Path
                opacity={0.5}
                d="M17.921 8.387h-4.866c.094.267.142.55.141.833h4.584c0-.284.047-.566.141-.833z"
                fill="url(#paint4_linear_95_847)"
            />
            <Path
                d="M17.322 3.417c0 1.15-.821 2.083-1.834 2.083-1.012 0-1.833-.932-1.833-2.083h3.667z"
                fill="url(#paint5_linear_95_847)"
            />
            <Path
                d="M17.322 3.417l-.001-.002h-1.416V1.332a1.25 1.25 0 00-2.5 0h.833a.417.417 0 01.834 0v2.083h-1.417v.003c0 .283.05.565.152.83h3.362a2.32 2.32 0 00.152-.83z"
                fill="url(#paint6_linear_95_847)"
            />
            <Path
                d="M11.53 14.666v-6.25l1.874 3.373a.417.417 0 00.579.155l1.375-.825a.416.416 0 00.154-.552l-3.18-6.004a1.666 1.666 0 00-1.198-.865l-1.687-.28H6.114l-1.687.28a1.667 1.667 0 00-1.2.865L.049 10.567a.417.417 0 00.154.552l1.376.825a.417.417 0 00.578-.155L4.03 8.418v6.249a.833.833 0 00.834.833h5.833a.833.833 0 00.833-.833z"
                fill="url(#paint7_linear_95_847)"
            />
            <Path
                d="M7.364 8.833h.833V15.5h-.833V8.833z"
                fill="url(#paint8_linear_95_847)"
            />
            <Path
                d="M9.447 3.417l.89.891a.416.416 0 01-.063.641l-.827.551.955.956a.416.416 0 010 .589L7.78 9.666 5.158 7.045a.416.416 0 010-.59l.956-.955-.828-.55a.417.417 0 01-.063-.642l.89-.89h3.334z"
                fill="url(#paint9_linear_95_847)"
            />
            <Path
                d="M6.114 3.417l1.666 6.22 1.667-6.22H6.114z"
                fill="url(#paint10_linear_95_847)"
            />
            <Path
                d="M8.197 3.417V1.334a1.25 1.25 0 00-2.5 0h.833a.417.417 0 01.833 0v2.083h-1.25l.224.834h2.886l.224-.834h-1.25z"
                fill="url(#paint11_linear_95_847)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_95_847"
                    x1={9.99969}
                    y1={1.2074}
                    x2={9.99969}
                    y2={2.26479}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EDF1F2" />
                    <Stop offset={1} stopColor="#C6CBCC" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_95_847"
                    x1={1.6665}
                    y1={0.453897}
                    x2={1.6665}
                    y2={2.9023}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#C6CBCC" />
                    <Stop offset={1} stopColor="#9FA5A6" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_95_847"
                    x1={18.333}
                    y1={0.453897}
                    x2={18.333}
                    y2={2.9023}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#C6CBCC" />
                    <Stop offset={1} stopColor="#9FA5A6" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_95_847"
                    x1={15.4879}
                    y1={3.41748}
                    x2={15.4879}
                    y2={16.0356}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FF9E9E" />
                    <Stop offset={1} stopColor="#DB585B" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_95_847"
                    x1={15.488}
                    y1={8.4018}
                    x2={15.488}
                    y2={9.28106}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E85155" />
                    <Stop offset={1} stopColor="#C21D2C" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_95_847"
                    x1={15.4881}
                    y1={3.60557}
                    x2={15.4881}
                    y2={5.36357}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E85155" />
                    <Stop offset={1} stopColor="#C21D2C" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_95_847"
                    x1={15.3631}
                    y1={0.0773047}
                    x2={15.3631}
                    y2={4.30207}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_95_847"
                    x1={7.78028}
                    y1={3.46735}
                    x2={7.78028}
                    y2={15.3331}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4793EB" />
                    <Stop offset={1} stopColor="#2367EC" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_95_847"
                    x1={7.78045}
                    y1={8.70317}
                    x2={7.78045}
                    y2={15.3326}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2B50D2" />
                    <Stop offset={1} stopColor="#182EA5" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_95_847"
                    x1={7.78023}
                    y1={3.61811}
                    x2={7.78023}
                    y2={9.1208}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2B50D2" />
                    <Stop offset={1} stopColor="#182EA5" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_95_847"
                    x1={7.78041}
                    y1={3.46744}
                    x2={7.78041}
                    y2={15.3332}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4793EB" />
                    <Stop offset={1} stopColor="#2367EC" />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_95_847"
                    x1={7.57178}
                    y1={0.190371}
                    x2={7.57178}
                    y2={4.29467}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default FashionComponent
