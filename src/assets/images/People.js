import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function PeopleComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_95_791)">
                <Path
                    d="M7.347.615A2.159 2.159 0 004.776.28h-.001a2.158 2.158 0 00-3.142 1.302A2.158 2.158 0 00.33 4.725a2.158 2.158 0 001.302 3.143c.133.48.414.87.775 1.143L7.347.615z"
                    fill="url(#paint0_linear_95_791)"
                />
                <Path
                    d="M12.653.615A2.159 2.159 0 0115.225.28a2.159 2.159 0 013.143 1.302 2.158 2.158 0 011.302 3.142 2.158 2.158 0 01-1.302 3.143 2.14 2.14 0 01-.776 1.143L12.653.615z"
                    fill="url(#paint1_linear_95_791)"
                />
                <Path
                    d="M3.142 4.365A.598.598 0 102.07 3.83a8.819 8.819 0 00-.94 3.98v.071c0 .573.054 1.137.16 1.687h1.222a7.687 7.687 0 01-.187-1.687v-.07c0-1.24.295-2.41.817-3.446z"
                    fill="#CFCDD4"
                />
                <Path
                    d="M6.367 13.113l.836 3.444L6.367 20H2.21a7.778 7.778 0 014.158-6.887z"
                    fill="url(#paint2_linear_95_791)"
                />
                <Path
                    d="M17.767 20h-4.133l-1.036-3.437 1.035-3.437A7.778 7.778 0 0117.767 20z"
                    fill="url(#paint3_linear_95_791)"
                />
                <Path
                    d="M13.633 13.126V20H6.367v-6.887a7.746 7.746 0 013.621-.892c1.317 0 2.558.327 3.645.905z"
                    fill="url(#paint4_linear_95_791)"
                />
                <Path
                    d="M7.416 15.101l1.668 2.18c.462.603 1.37.603 1.832 0l1.682-2.197-5.182.017z"
                    fill="url(#paint5_linear_95_791)"
                />
                <Path
                    d="M4.288 17.634a.336.336 0 00-.336.337V20h.673v-2.03a.336.336 0 00-.337-.337zM15.712 17.634c.186 0 .337.15.337.337V20h-.673v-2.03c0-.186.15-.337.336-.337z"
                    fill="#BA7C63"
                />
                <Path
                    d="M17.652 10.234a1.922 1.922 0 100-3.843 1.922 1.922 0 000 3.843z"
                    fill="url(#paint6_linear_95_791)"
                />
                <Path
                    d="M2.325 10.234a1.922 1.922 0 100-3.843 1.922 1.922 0 000 3.843z"
                    fill="url(#paint7_linear_95_791)"
                />
                <Path
                    d="M2.325 7.81A7.663 7.663 0 0110 .148c4.226.007 7.67 3.473 7.651 7.699.02 4.225-3.425 7.692-7.65 7.698a7.663 7.663 0 01-7.676-7.663v-.07z"
                    fill="url(#paint8_linear_95_791)"
                />
                <Path
                    d="M5.549 9.9c.416 0 .754-.271.754-.606 0-.335-.338-.607-.754-.607-.417 0-.755.272-.755.607 0 .335.338.606.755.606zM14.428 9.9c.417 0 .755-.271.755-.606 0-.335-.338-.607-.755-.607-.416 0-.754.272-.754.607 0 .335.338.606.754.606z"
                    fill="#FF748F"
                />
                <Path
                    d="M6.842 9.294a1.496 1.496 0 100-2.993 1.496 1.496 0 000 2.993zM13.134 9.294a1.496 1.496 0 100-2.993 1.496 1.496 0 000 2.993z"
                    fill="#fff"
                />
                <Path
                    d="M7.336 8.244a.299.299 0 01-.262-.155.26.26 0 00-.232-.137.26.26 0 00-.232.137.299.299 0 01-.524-.288.851.851 0 01.756-.447c.32 0 .602.168.756.447a.299.299 0 01-.262.443zM13.629 8.244a.299.299 0 01-.262-.155.26.26 0 00-.233-.137.26.26 0 00-.232.137.299.299 0 01-.523-.288.851.851 0 01.755-.447c.32 0 .602.168.756.447a.299.299 0 01-.261.443z"
                    fill="#383842"
                />
                <Path
                    d="M12.087 4.395H7.89a.319.319 0 010-.637h4.198a.319.319 0 110 .637zM11.45 2.807H8.527a.319.319 0 010-.638h2.923a.319.319 0 010 .638z"
                    fill="#EDAE7C"
                />
                <Path
                    d="M12.506 8.61a2.442 2.442 0 00-2.061-.693c-.295.04-.594.04-.89 0-.73-.1-1.498.131-2.06.694a2.44 2.44 0 00-.711 1.896.785.785 0 00.73.73A2.44 2.44 0 0010 9.572a2.44 2.44 0 002.487 1.664.785.785 0 00.73-.73 2.44 2.44 0 00-.711-1.895z"
                    fill="url(#paint9_linear_95_791)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_95_791"
                    x1={0.0498061}
                    y1={4.50561}
                    x2={7.34694}
                    y2={4.50561}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#CCD3D3" />
                    <Stop offset={1} stopColor="#EBEBEB" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_95_791"
                    x1={12.6533}
                    y1={4.50561}
                    x2={19.9505}
                    y2={4.50561}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#CCD3D3" />
                    <Stop offset={1} stopColor="#EBEBEB" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_95_791"
                    x1={4.70624}
                    y1={19.9999}
                    x2={4.70624}
                    y2={13.1133}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#D6997F" />
                    <Stop offset={0.9995} stopColor="#C3816A" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_95_791"
                    x1={15.1828}
                    y1={19.9999}
                    x2={15.1828}
                    y2={13.126}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#D6997F" />
                    <Stop offset={0.9995} stopColor="#C3816A" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_95_791"
                    x1={6.36719}
                    y1={16.1105}
                    x2={13.6333}
                    y2={16.1105}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#02C09E" />
                    <Stop offset={0.9794} stopColor="#77E2D1" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_95_791"
                    x1={10.0068}
                    y1={17.7333}
                    x2={10.0068}
                    y2={15.0839}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7B695" />
                    <Stop offset={1} stopColor="#F7CBB5" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_95_791"
                    x1={17.6516}
                    y1={10.2341}
                    x2={17.6516}
                    y2={6.39087}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7CBB5" />
                    <Stop offset={1} stopColor="#F7B695" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_95_791"
                    x1={2.32495}
                    y1={10.2341}
                    x2={2.32495}
                    y2={6.39087}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7CBB5" />
                    <Stop offset={1} stopColor="#F7B695" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_95_791"
                    x1={9.98834}
                    y1={15.5441}
                    x2={9.98834}
                    y2={0.14747}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F7B695" />
                    <Stop offset={1} stopColor="#F7CBB5" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_95_791"
                    x1={10.0003}
                    y1={11.2423}
                    x2={10.0003}
                    y2={7.89451}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#746F80" />
                    <Stop offset={0.9777} stopColor="#BFBDC3" />
                </LinearGradient>
                <ClipPath id="clip0_95_791">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default PeopleComponent
