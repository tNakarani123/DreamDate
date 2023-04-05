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

function AudioComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={20} cy={20} r={20} fill="url(#paint0_linear_411_3524)" />
            <G clipPath="url(#clip0_411_3524)">
                <Path
                    d="M14.075 23.295a21.219 21.219 0 007.057 5.528c1.032.49 2.412 1.07 3.95 1.169.095.004.186.008.282.008 1.031 0 1.86-.356 2.536-1.09.004-.004.012-.012.016-.02.24-.29.514-.552.8-.83.195-.186.394-.38.585-.58.882-.92.882-2.088-.009-2.98l-2.49-2.49c-.423-.44-.929-.671-1.46-.671-.53 0-1.04.232-1.474.667l-1.484 1.483a7.933 7.933 0 00-.41-.215 5.138 5.138 0 01-.456-.249c-1.351-.858-2.578-1.976-3.75-3.415-.593-.75-.991-1.38-1.269-2.022.39-.352.754-.721 1.107-1.082.124-.128.252-.256.38-.385.448-.448.689-.966.689-1.492s-.236-1.044-.688-1.492l-1.235-1.235c-.145-.145-.282-.286-.423-.43-.273-.283-.56-.573-.841-.834-.427-.418-.928-.638-1.459-.638-.526 0-1.032.22-1.475.642l-1.55 1.55a3.185 3.185 0 00-.95 2.04c-.078.99.104 2.042.577 3.315.725 1.968 1.82 3.796 3.444 5.748zm-3.009-8.977c.05-.55.261-1.01.659-1.409l1.542-1.541c.24-.232.505-.353.762-.353.253 0 .51.12.746.36.278.258.539.527.82.813.141.145.287.29.432.44l1.235 1.234c.257.257.39.518.39.775s-.133.518-.39.775l-.386.39c-.385.39-.746.758-1.144 1.11l-.02.021c-.344.344-.29.672-.207.92l.012.033c.319.767.762 1.497 1.454 2.367 1.244 1.533 2.553 2.723 3.995 3.638.179.117.37.208.548.299.165.083.319.161.455.248l.046.025c.137.07.27.104.402.104.332 0 .547-.211.617-.282l1.55-1.55c.24-.24.502-.369.759-.369.315 0 .572.195.733.37l2.5 2.494c.497.497.492 1.036-.013 1.562-.174.187-.357.365-.551.552-.29.281-.593.572-.866.899-.477.514-1.045.754-1.778.754-.07 0-.145-.004-.216-.008-1.36-.087-2.623-.618-3.572-1.07a20.156 20.156 0 01-6.718-5.263c-1.546-1.86-2.586-3.593-3.274-5.45-.427-1.139-.588-2.055-.522-2.888z"
                    fill="url(#paint1_linear_411_3524)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_411_3524"
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
                    id="paint1_linear_411_3524"
                    x1={-9.22321}
                    y1={-8.29752}
                    x2={37.2582}
                    y2={12.4818}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_411_3524">
                    <Path fill="#fff" transform="translate(10 10)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default AudioComponent