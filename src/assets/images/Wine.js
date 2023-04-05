import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function WineComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.406 13.125c2.564-1.892 5.508-2.748 4.22-7.188L10.062.625c-.057-.202-.26-.313-.47-.313H2.407c-.21 0-.411.111-.468.313L.375 5.938c-1.287 4.133 1.654 5.237 4.219 7.187.866.659.781 1.366.781 1.563v2.968c-2.187.313-3.357 1.05-3.906 1.563-.293.273-.107.468 0 .468H10.53c.108 0 .293-.195 0-.468-.549-.513-1.777-1.179-3.906-1.563v-2.968c0-.197-.094-.917.781-1.563z"
                fill="url(#paint0_linear_265_562)"
            />
            <Path
                d="M10.688 5.313L9.594 1.405c-.05-.178-.156-.312-.469-.312h-6.25c-.312 0-.418.134-.469.312L1.313 5.313C.14 9.463 2.616 11.796 6 11.875c3.384-.079 5.86-2.411 4.688-6.563z"
                fill="url(#paint1_linear_265_562)"
            />
            <Path
                d="M10.688 5.313l-.15-.535C9.342 4.265 7.679 4.283 6 5c-1.672.666-3.48.527-4.61.033l-.077.28C.14 9.463 2.616 11.796 6 11.875c3.384-.079 5.86-2.411 4.688-6.562z"
                fill="url(#paint2_linear_265_562)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_265_562"
                    x1={-13.6167}
                    y1={11.845}
                    x2={0.549825}
                    y2={10.543}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F1F2F2" />
                    <Stop offset={1} stopColor="#E6E7E8" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_265_562"
                    x1={0.130684}
                    y1={7.20219}
                    x2={-9.949}
                    y2={8.81703}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F1F2F2" />
                    <Stop offset={1} stopColor="#E6E7E8" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_265_562"
                    x1={6.14287}
                    y1={1.72644}
                    x2={5.96053}
                    y2={8.83581}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E15C63" />
                    <Stop offset={0.4062} stopColor="#DE585F" />
                    <Stop offset={0.8264} stopColor="#D44B53" />
                    <Stop offset={1} stopColor="#CE444C" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default WineComponent
