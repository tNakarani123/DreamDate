import * as React from "react"
import Svg, { Rect, Defs, RadialGradient, Stop } from "react-native-svg"

function ButtonTwoComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 315 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={315} height={60} rx={30} fill="#F1487F" />
            <Rect
                width={315}
                height={60}
                rx={30}
                fill="url(#paint0_radial_34_311)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_34_311"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(10.449 -8.345 16.386) scale(312.516 178.382)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default ButtonTwoComponent
