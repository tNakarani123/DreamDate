import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FoodComponent(props) {
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
                d="M20 15.417c0-.92-.746-1.667-1.667-1.667H1.667c-.92 0-1.667.746-1.667 1.667v1.25A3.334 3.334 0 003.333 20h13.334A3.334 3.334 0 0020 16.667v-1.25z"
                fill="url(#paint0_linear_95_963)"
            />
            <Path
                d="M20 11.667a2.085 2.085 0 00-2.083-2.084H2.083A2.085 2.085 0 00.61 13.14c.39.39.92.61 1.473.61h15.834A2.085 2.085 0 0020 11.667z"
                fill="url(#paint1_linear_95_963)"
            />
            <Path
                d="M20 7.745A7.745 7.745 0 0012.255 0h-4.51A7.745 7.745 0 000 7.745c0 1.016.823 1.838 1.837 1.838h16.326A1.837 1.837 0 0020 7.746v-.001z"
                fill="url(#paint2_linear_95_963)"
            />
            <Path
                d="M5 9.583c1.451 0 3.913 1.618 5.274 2.6.583.42 1.37.42 1.952-.001 1.36-.981 3.823-2.599 5.274-2.599H5z"
                fill="url(#paint3_linear_95_963)"
            />
            <Path
                d="M1.708 13.75h4.083a2.084 2.084 0 11-4.083 0z"
                fill="url(#paint4_linear_95_963)"
            />
            <Path
                d="M5.875 13.75H9.96a2.084 2.084 0 11-4.083 0z"
                fill="url(#paint5_linear_95_963)"
            />
            <Path
                d="M10.042 13.75h4.083a2.084 2.084 0 11-4.083 0z"
                fill="url(#paint6_linear_95_963)"
            />
            <Path
                d="M14.208 13.75h4.083a2.084 2.084 0 11-4.083 0z"
                fill="url(#paint7_linear_95_963)"
            />
            <Path
                d="M2.917 5.208h.416a.417.417 0 000-.833h-.416a.417.417 0 000 .833z"
                fill="url(#paint8_linear_95_963)"
            />
            <Path
                d="M5.833 3.958h.417a.417.417 0 000-.833h-.417a.417.417 0 000 .833z"
                fill="url(#paint9_linear_95_963)"
            />
            <Path
                d="M8.75 2.292h.417a.417.417 0 000-.834H8.75a.417.417 0 000 .834z"
                fill="url(#paint10_linear_95_963)"
            />
            <Path
                d="M10.417 4.792h.416a.417.417 0 000-.834h-.416a.417.417 0 000 .834z"
                fill="url(#paint11_linear_95_963)"
            />
            <Path
                d="M13.75 3.542h.417a.417.417 0 000-.834h-.417a.417.417 0 000 .834z"
                fill="url(#paint12_linear_95_963)"
            />
            <Path
                d="M16.667 6.042h.416a.417.417 0 000-.834h-.416a.417.417 0 000 .834z"
                fill="url(#paint13_linear_95_963)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_95_963"
                    x1={14.1667}
                    y1={11.6667}
                    x2={14.1667}
                    y2={19.9625}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFCC6C" />
                    <Stop offset={1} stopColor="#E68E26" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_95_963"
                    x1={4.58333}
                    y1={9.58325}
                    x2={4.58333}
                    y2={13.7499}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F48132" />
                    <Stop offset={1} stopColor="#DC4822" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_95_963"
                    x1={11.25}
                    y1={0}
                    x2={11.25}
                    y2={9.58333}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFCC6C" />
                    <Stop offset={1} stopColor="#E68E26" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_95_963"
                    x1={11.25}
                    y1={9.58325}
                    x2={11.25}
                    y2={12.4978}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E15E3C" />
                    <Stop offset={1} stopColor="#95341B" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_95_963"
                    x1={3.74984}
                    y1={13.75}
                    x2={3.74984}
                    y2={16.25}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4C800B" />
                    <Stop offset={0.40625} stopColor="#3D5E13" stopOpacity={0.703125} />
                    <Stop offset={1} stopColor="#4E7916" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_95_963"
                    x1={7.91683}
                    y1={13.75}
                    x2={7.91683}
                    y2={16.25}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4C800B" />
                    <Stop offset={0.40625} stopColor="#3D5E13" stopOpacity={0.703125} />
                    <Stop offset={1} stopColor="#4E7916" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_95_963"
                    x1={12.0833}
                    y1={13.75}
                    x2={12.0833}
                    y2={16.25}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4C800B" />
                    <Stop offset={0.40625} stopColor="#3D5E13" stopOpacity={0.703125} />
                    <Stop offset={1} stopColor="#4E7916" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_95_963"
                    x1={16.2498}
                    y1={13.75}
                    x2={16.2498}
                    y2={16.25}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4C800B" />
                    <Stop offset={0.40625} stopColor="#3D5E13" stopOpacity={0.703125} />
                    <Stop offset={1} stopColor="#4E7916" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_95_963"
                    x1={2.5}
                    y1={4.79167}
                    x2={3.75}
                    y2={4.79167}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F48132" />
                    <Stop offset={1} stopColor="#DC4822" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_95_963"
                    x1={5.4165}
                    y1={3.54167}
                    x2={6.6665}
                    y2={3.54167}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F48132" />
                    <Stop offset={1} stopColor="#DC4822" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_95_963"
                    x1={8.3335}
                    y1={1.87492}
                    x2={9.5835}
                    y2={1.87492}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F48132" />
                    <Stop offset={1} stopColor="#DC4822" />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_95_963"
                    x1={10}
                    y1={4.37492}
                    x2={11.25}
                    y2={4.37492}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F48132" />
                    <Stop offset={1} stopColor="#DC4822" />
                </LinearGradient>
                <LinearGradient
                    id="paint12_linear_95_963"
                    x1={13.3335}
                    y1={3.12492}
                    x2={14.5835}
                    y2={3.12492}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F48132" />
                    <Stop offset={1} stopColor="#DC4822" />
                </LinearGradient>
                <LinearGradient
                    id="paint13_linear_95_963"
                    x1={16.25}
                    y1={5.62492}
                    x2={17.5}
                    y2={5.62492}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F48132" />
                    <Stop offset={1} stopColor="#DC4822" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default FoodComponent
