import * as React from "react"
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function Active_MapComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 50 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={30} cy={30} r={30} fill="url(#paint0_linear_345_115)" />
            <G clipPath="url(#clip0_345_115)">
                <Path
                    d="M41.143 18a.857.857 0 00-.383.09l-6.496 3.249-7.345-3.265c-.012-.005-.025-.006-.038-.011a.912.912 0 00-.205-.052 1.28 1.28 0 00-.209 0 .912.912 0 00-.205.052c-.013.005-.026.006-.038.011l-7.715 3.429a.857.857 0 00-.509.783v18.857a.857.857 0 001.205.783l7.367-3.274 7.366 3.274c.012.005.026 0 .04.008a.757.757 0 00.648-.014c.014-.007.03 0 .043-.01l6.857-3.428a.857.857 0 00.474-.768V18.858a.857.857 0 00-.857-.858zM25.714 37.157l-6 2.667v-16.98l6-2.667v16.98zm7.715 2.667l-6-2.667v-16.98l6 2.666v16.98zm6.857-2.64l-5.143 2.572v-16.94l5.143-2.572v16.94z"
                    fill="#7842C2"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_345_115"
                    x1={-58}
                    y1={-54.8926}
                    x2={81.796}
                    y2={7.83967}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_345_115">
                    <Path fill="#fff" transform="translate(18 18)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Active_MapComponent
