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

function EditProfileComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={25} cy={25} r={25} fill="url(#paint0_linear_425_308)" />
            <G clipPath="url(#clip0_425_308)">
                <Path
                    d="M30.833 25.039a.833.833 0 00-.833.833v6.667c0 .459-.373.833-.833.833H17.5a.834.834 0 01-.833-.833V20.872c0-.46.373-.833.833-.833h6.667a.833.833 0 100-1.667H17.5a2.503 2.503 0 00-2.5 2.5V32.54c0 1.378 1.122 2.5 2.5 2.5h11.667c1.378 0 2.5-1.122 2.5-2.5v-6.667a.833.833 0 00-.834-.833z"
                    fill="url(#paint1_linear_425_308)"
                />
                <Path
                    d="M22.813 24.279a.421.421 0 00-.114.212l-.59 2.947a.418.418 0 00.491.49l2.946-.59a.415.415 0 00.214-.113l6.593-6.594-2.946-2.945-6.594 6.593z"
                    fill="url(#paint2_linear_425_308)"
                />
                <Path
                    d="M34.39 15.649a2.085 2.085 0 00-2.946 0l-1.153 1.153 2.946 2.946 1.153-1.154c.393-.392.61-.916.61-1.472a2.07 2.07 0 00-.61-1.473z"
                    fill="url(#paint3_linear_425_308)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_425_308"
                    x1={4.23914}
                    y1={-108.333}
                    x2={106.213}
                    y2={-71.1645}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.739583} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_425_308"
                    x1={-1.11116}
                    y1={3.12409}
                    x2={37.7212}
                    y2={20.5498}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_425_308"
                    x1={12.1918}
                    y1={8.30743}
                    x2={36.0765}
                    y2={19.0263}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_425_308"
                    x1={25.7388}
                    y1={10.7314}
                    x2={36.7104}
                    y2={15.6554}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </LinearGradient>
                <ClipPath id="clip0_425_308">
                    <Path fill="#fff" transform="translate(15 15)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default EditProfileComponent
