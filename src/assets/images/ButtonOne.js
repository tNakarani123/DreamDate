import * as React from "react"
import Svg, { Rect, Defs, RadialGradient, Stop } from "react-native-svg"

function ButtonOneComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 280 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={280} height={60} rx={30} fill="#F1487F" />
            <Rect
                width={280}
                height={60}
                rx={30}
                fill="url(#paint0_radial_38_11)"
                fillOpacity={0.8}
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_38_11"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(273.18545 56.67792 -36.08008 173.90466 2.519 1.785)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default ButtonOneComponent
