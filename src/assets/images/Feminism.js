import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FeminismComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9 15.5a1.25 1.25 0 01-.703-.218c-3.07-2.084-4.399-3.512-5.132-4.406C1.602 8.972.855 7.016.875 4.9.9 2.473 2.847.5 5.215.5c1.721 0 2.914.97 3.608 1.778a.235.235 0 00.354 0C9.872 1.469 11.065.5 12.787.5c2.367 0 4.314 1.973 4.338 4.4.021 2.118-.727 4.073-2.289 5.977-.733.893-2.063 2.322-5.132 4.406A1.25 1.25 0 019 15.5z"
                fill="url(#paint0_linear_314_2677)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_314_2677"
                    x1={9.00042}
                    y1={0.5}
                    x2={9.00034}
                    y2={15.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FD6700" />
                    <Stop offset={1} stopColor="#FFCE00" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default FeminismComponent
