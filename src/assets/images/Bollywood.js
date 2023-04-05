import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function BollywoodComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_300_454)">
                <Path
                    d="M12.467 3.714c.008-.003.009-.003 0 0zM10.55 1.941c-.01.004-.01.004 0 0zm0 0h.001zm-1.426 3.06c.28-.109 3.194-1.23 3.343-1.287l2.062-1.906-.635-1.153-3.343 1.286-2.05 1.883L9.124 5zM5.786 6.283l-.004.002.004-.002zm-.004.002L7.57 4.963l-.362-1.737-3.343 1.286-1.877 1.51.45 1.549c.28-.108 3.196-1.23 3.343-1.285zM3.859 4.514l.007-.002-.007.002zm13.955 3.728h-2.1l-2.345 1.172h-1.171V8.242H8.682L6.338 9.414H5.167V8.242H.237a.586.586 0 00-.587.586V10c0 .324.262.586.586.586h.586l1.11 1.172-1.11 1.171v4.688l1 1.172h14.46l.947-1.172v-4.688l-1.211-1.171 1.21-1.172h.586A.586.586 0 0018.4 10V8.828a.586.586 0 00-.585-.586z"
                    fill="url(#paint0_linear_300_454)"
                />
                <Path
                    d="M11.369 15.273a2.346 2.346 0 00-2.344-2.343 2.346 2.346 0 00-2.344 2.343 2.346 2.346 0 002.344 2.344 2.346 2.346 0 002.344-2.344zM.822 17.617v1.797c0 .324.262.586.586.586h15.234a.586.586 0 00.586-.586v-1.797H.822zm15.732-16.13l-.4-1.1a.586.586 0 00-.751-.35l-1.51.618-1.426 3.06 3.737-1.476a.585.585 0 00.35-.751zM9.124 5c.006-.002.005-.002 0 0zm0 0l1.427-3.059-3.342 1.285-1.428 3.06L9.124 5zM7.209 3.226c-.013.005-.012.005 0 0zm-7.227 2.78c-.01.003-.009.003 0 0zM2.438 7.57l1.428-3.06C3.724 4.568.159 5.938-.018 6.007l.003-.002a.585.585 0 00-.35.75l.4 1.102c.112.307.453.46.752.35a100936.265 100936.265 0 001.651-.635zm10.931 3.015l2.344-2.344h-3.515l-2.344 2.344H6.338l2.344-2.344H5.167l-2.344 2.344H.822v2.343h16.406v-2.343H13.37z"
                    fill="url(#paint1_linear_300_454)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_300_454"
                    x1={9.02539}
                    y1={18.7888}
                    x2={9.02539}
                    y2={0.655235}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FD3A84" />
                    <Stop offset={1} stopColor="#FFA68D" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_300_454"
                    x1={8.41395}
                    y1={20}
                    x2={8.41395}
                    y2={0.00000476837}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFC2CC" />
                    <Stop offset={1} stopColor="#FFF2F4" />
                </LinearGradient>
                <ClipPath id="clip0_300_454">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BollywoodComponent
