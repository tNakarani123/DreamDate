import * as React from "react"
import Svg, { Rect, Defs, RadialGradient, Stop } from "react-native-svg"

function ButtonComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 230 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={230} height={60} rx={30} fill="#F1487F" />
            <Rect
                width={230}
                height={60}
                rx={30}
                fill="url(#paint0_radial_24_127)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_24_127"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(14.175 -6.144 9.212) scale(231.449 175.868)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default ButtonComponent
