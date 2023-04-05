import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Active_ProfileComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 50 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={30} cy={30} r={30} fill="url(#paint0_linear_345_117)" />
            <Path
                d="M30 29.517a5.439 5.439 0 01-5.432-5.433A5.438 5.438 0 0130 18.652a5.438 5.438 0 015.433 5.432A5.439 5.439 0 0130 29.517zm0-9.115a3.686 3.686 0 00-3.682 3.682A3.687 3.687 0 0030 27.767a3.687 3.687 0 003.683-3.683A3.686 3.686 0 0030 20.402zM33.395 41.348h-6.79a5.438 5.438 0 01-5.432-5.432 5.438 5.438 0 015.432-5.432h6.79a5.438 5.438 0 015.432 5.432 5.438 5.438 0 01-5.432 5.432zm-6.79-9.114a3.686 3.686 0 00-3.682 3.682 3.686 3.686 0 003.682 3.682h6.79a3.686 3.686 0 003.682-3.682 3.686 3.686 0 00-3.682-3.682h-6.79z"
                fill="#7842C2"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_345_117"
                    x1={-58}
                    y1={-54.8926}
                    x2={81.796}
                    y2={7.83967}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default Active_ProfileComponent
