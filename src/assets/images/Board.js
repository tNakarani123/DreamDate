import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function BoardComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.334 13.849V6.151a1.667 1.667 0 00-.834-1.443L9.834.858a1.667 1.667 0 00-1.667 0L1.5 4.709a1.667 1.667 0 00-.833 1.443v7.698a1.667 1.667 0 00.833 1.442l6.667 3.85a1.666 1.666 0 001.667 0l6.666-3.85a1.666 1.666 0 00.834-1.442z"
                fill="url(#paint0_linear_325_114)"
            />
            <Path
                d="M9.833 19.141l6.667-3.85a1.666 1.666 0 00.833-1.443V6.151a1.666 1.666 0 00-.833-1.443L9.833.858A1.662 1.662 0 009 .636v18.73c.293 0 .58-.077.833-.224z"
                fill="url(#paint1_linear_325_114)"
            />
            <Path
                d="M17.105 5.308L9 9.988.896 5.307c.145-.25.354-.457.605-.6L8.167.858a1.676 1.676 0 011.667 0l6.667 3.85c.25.143.459.35.604.6z"
                fill="url(#paint2_linear_325_114)"
            />
            <Path
                d="M9.93 4.636a.57.57 0 01.002 1.078 2.047 2.047 0 01-1.859 0c-.515-.297-.52-.78-.008-1.078a2.06 2.06 0 011.864 0z"
                fill="url(#paint3_linear_325_114)"
            />
            <Path
                d="M6.709 14.822a1.704 1.704 0 01.773 1.339c0 .495-.35.694-.778.447a1.705 1.705 0 01-.776-1.344c.001-.493.35-.691.78-.442z"
                fill="url(#paint4_linear_325_114)"
            />
            <Path
                d="M4.837 11.52a1.702 1.702 0 01.774 1.339c0 .495-.35.694-.779.447a1.705 1.705 0 01-.775-1.345c0-.492.35-.69.78-.441z"
                fill="url(#paint5_linear_325_114)"
            />
            <Path
                d="M2.966 8.217a1.705 1.705 0 01.773 1.34c0 .495-.35.694-.779.446a1.705 1.705 0 01-.775-1.344c0-.493.35-.69.78-.442z"
                fill="url(#paint6_linear_325_114)"
            />
            <Path
                d="M11.602 10.63c.432-.25.78-.051.781.444a1.704 1.704 0 01-.776 1.342c-.428.248-.78.05-.78-.441a1.71 1.71 0 01.775-1.346z"
                fill="url(#paint7_linear_325_114)"
            />
            <Path
                d="M14.713 8.833c.432-.25.78-.05.782.445a1.705 1.705 0 01-.776 1.341c-.429.248-.777.049-.779-.443a1.706 1.706 0 01.773-1.343z"
                fill="url(#paint8_linear_325_114)"
            />
            <Path
                d="M11.613 14.204c.431-.25.78-.05.781.445a1.709 1.709 0 01-.776 1.341c-.429.247-.78.05-.781-.442a1.708 1.708 0 01.776-1.344z"
                fill="url(#paint9_linear_325_114)"
            />
            <Path
                d="M14.725 12.408c.43-.25.78-.05.78.445a1.703 1.703 0 01-.776 1.341c-.428.247-.776.049-.778-.443a1.705 1.705 0 01.774-1.343z"
                fill="url(#paint10_linear_325_114)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_325_114"
                    x1={-3.63967}
                    y1={1.98646}
                    x2={10.0212}
                    y2={10.6469}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EDF1F2" />
                    <Stop offset={1} stopColor="#C6CBCC" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_325_114"
                    x1={14.6446}
                    y1={6.84025}
                    x2={6.96583}
                    y2={11.3936}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#C6CBCC" />
                    <Stop offset={1} stopColor="#9FA5A6" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_325_114"
                    x1={0.994818}
                    y1={5.31186}
                    x2={21.8907}
                    y2={5.31186}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EDF0EF" />
                    <Stop offset={1} stopColor="#C6CBCC" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_325_114"
                    x1={8.24205}
                    y1={4.69865}
                    x2={9.94955}
                    y2={5.7699}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_325_114"
                    x1={6.15732}
                    y1={14.7646}
                    x2={7.25315}
                    y2={16.663}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_325_114"
                    x1={4.28581}
                    y1={11.4626}
                    x2={5.38164}
                    y2={13.3605}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_325_114"
                    x1={2.41374}
                    y1={8.16063}
                    x2={3.50999}
                    y2={10.0585}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_325_114"
                    x1={11.0553}
                    y1={11.2047}
                    x2={12.1553}
                    y2={11.8397}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_325_114"
                    x1={14.1675}
                    y1={9.40841}
                    x2={15.2671}
                    y2={10.0434}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_325_114"
                    x1={11.0657}
                    y1={14.7795}
                    x2={12.1661}
                    y2={15.4149}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_325_114"
                    x1={14.1783}
                    y1={12.9831}
                    x2={15.2778}
                    y2={13.6177}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#3E4154" />
                    <Stop offset={1} stopColor="#1B2129" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default BoardComponent
