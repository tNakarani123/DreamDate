import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function AllyComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.25 3.286c0-.768.491-1.45 1.22-1.693a11.298 11.298 0 015.17-.466l3.603.515c1.653.236 3.337.12 4.942-.338l1.143-.326c.4-.115.797.185.797.6v1.047l-1.94.554c-1.605.459-3.29.574-4.942.338L6.775 3.02a11.875 11.875 0 00-5.434.49L.25 3.875v-.59z"
                fill="url(#paint0_linear_302_2669)"
            />
            <Path
                d="M.25 3.875l1.09-.364c1.75-.582 3.61-.75 5.435-.49l3.468.496c1.653.236 3.337.12 4.942-.338l1.94-.554V4.5l-1.94.554c-1.605.459-3.29.574-4.942.338l-3.468-.496a11.875 11.875 0 00-5.434.49L.25 5.75V3.875z"
                fill="url(#paint1_linear_302_2669)"
            />
            <Path
                d="M.25 5.75l1.09-.364c1.75-.583 3.61-.75 5.435-.49l3.468.496c1.653.236 3.337.12 4.942-.338l1.94-.554v1.875l-1.94.554c-1.605.459-3.29.574-4.942.338L6.775 6.77a11.875 11.875 0 00-5.434.49L.25 7.625V5.75z"
                fill="url(#paint2_linear_302_2669)"
            />
            <Path
                d="M.25 7.625l1.09-.364c1.75-.583 3.61-.75 5.435-.49l3.468.496c1.653.236 3.337.12 4.942-.338l1.94-.554V8.25l-1.94.554c-1.605.459-3.29.574-4.942.338l-3.468-.496a11.875 11.875 0 00-5.434.49L.25 9.5V7.625z"
                fill="url(#paint3_linear_302_2669)"
            />
            <Path
                d="M.25 9.5l1.09-.364c1.75-.582 3.61-.75 5.435-.49l3.468.496c1.653.236 3.337.12 4.942-.338l1.94-.554v1.875l-1.94.554c-1.605.459-3.29.574-4.942.338l-3.468-.496a11.876 11.876 0 00-5.434.49l-1.091.364V9.5z"
                fill="url(#paint4_linear_302_2669)"
            />
            <Path
                d="M.25 11.375l1.09-.364c1.75-.582 3.61-.75 5.435-.49l3.468.496c1.653.236 3.337.12 4.942-.338l1.94-.554v.46c0 .838-.555 1.574-1.36 1.804l-.58.165c-1.605.459-3.29.574-4.942.338l-3.468-.496a11.876 11.876 0 00-5.434.49l-.268.09a.625.625 0 01-.823-.593v-1.008z"
                fill="url(#paint5_linear_302_2669)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_302_2669"
                    x1={3.41438}
                    y1={0.281172}
                    x2={3.25125}
                    y2={4.04805}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFA776" />
                    <Stop offset={1} stopColor="red" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_302_2669"
                    x1={3.41438}
                    y1={2.03937}
                    x2={4.09}
                    y2={7.77437}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFC960" />
                    <Stop offset={1} stopColor="#FF1F1F" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_302_2669"
                    x1={15.7187}
                    y1={7.625}
                    x2={14.1112}
                    y2={1.3225}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFB800" />
                    <Stop offset={1} stopColor="#FFF281" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_302_2669"
                    x1={2.71125}
                    y1={6.11438}
                    x2={3.73312}
                    y2={11.7175}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#D9F46D" />
                    <Stop offset={1} stopColor="#00D179" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_302_2669"
                    x1={2.71125}
                    y1={7.98938}
                    x2={3.73312}
                    y2={13.5925}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7DA9FF" />
                    <Stop offset={1} stopColor="#1D4EFF" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_302_2669"
                    x1={7}
                    y1={9.73437}
                    x2={7.37125}
                    y2={14.1419}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4B25B8" />
                    <Stop offset={1} stopColor="#8E70E2" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default AllyComponent
