import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function HumanComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_314_2696)">
                <G clipPath="url(#clip1_314_2696)">
                    <Path
                        d="M14.682 3.565v-2.28c0-.71.575-1.285 1.284-1.285h2.002c.456 0 .87.185 1.169.484.299.299.484.712.484 1.168v.757l-.6.996-2.558.681-1.781-.52z"
                        fill="url(#paint0_linear_314_2696)"
                    />
                    <Path
                        d="M19.62 1.722a1.54 1.54 0 01-1.03 1.375c-1.303.464-2.605.565-3.909.468C10.387 3.248 6.093.783 1.8 2.08a1.998 1.998 0 00-1.42 1.914v13.54c0 .693.675 1.18 1.337.973 5.495-1.721 10.99 2.779 16.485 1.12a2 2 0 001.42-1.914V1.652l-.002.07z"
                        fill="url(#paint1_linear_314_2696)"
                    />
                    <Path
                        d="M17.153 2.255c-.508.1-1.037.148-1.599.148-.252 0-.516-.01-.784-.03l-.088-.007v1.2c.915.067 1.81.035 2.692-.137a.596.596 0 10-.221-1.174z"
                        fill="#0097CD"
                    />
                    <Path
                        d="M12.477 7.995c-1.69.237-3.38-.435-5.07-.156a.4.4 0 00-.338.395v1.588c0 .242.214.43.454.396 1.69-.237 3.38.435 5.07.155a.401.401 0 00.337-.394V8.39a.399.399 0 00-.453-.396z"
                        fill="url(#paint2_linear_314_2696)"
                    />
                    <Path
                        d="M12.477 11.822c-1.69.237-3.38-.436-5.07-.156a.4.4 0 00-.338.395v1.588c0 .242.214.43.454.395 1.69-.237 3.38.436 5.07.156a.4.4 0 00.337-.395v-1.588a.399.399 0 00-.453-.395z"
                        fill="url(#paint3_linear_314_2696)"
                    />
                </G>
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_314_2696"
                    x1={17.1512}
                    y1={4.98869}
                    x2={17.1512}
                    y2={0.902231}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1683CE" />
                    <Stop offset={1} stopColor="#80C1EF" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_314_2696"
                    x1={10.0002}
                    y1={16.109}
                    x2={10.0002}
                    y2={-2.23885}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1683CE" />
                    <Stop offset={1} stopColor="#80C1EF" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_314_2696"
                    x1={9.99985}
                    y1={10.4429}
                    x2={9.99985}
                    y2={7.77004}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F2D64A" />
                    <Stop offset={1} stopColor="#F7E89B" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_314_2696"
                    x1={9.99985}
                    y1={14.2696}
                    x2={9.99985}
                    y2={11.5967}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F2D64A" />
                    <Stop offset={1} stopColor="#F7E89B" />
                </LinearGradient>
                <ClipPath id="clip0_314_2696">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
                <ClipPath id="clip1_314_2696">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default HumanComponent
