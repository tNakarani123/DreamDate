import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function VoterComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.552 5.745L13.244.355a.588.588 0 00-.77-.308L4.27 3.563a.587.587 0 00-.308.769l2.004 4.687a.586.586 0 00.539.356H8.44a.587.587 0 00.23-.047l6.573-2.813a.588.588 0 00.31-.77zm-2.847 4.802H2.158a.586.586 0 00-.586.586v8.281c0 .324.262.586.586.586h10.547a.586.586 0 00.586-.586v-8.281a.586.586 0 00-.586-.586z"
                fill="url(#paint0_linear_314_2686)"
            />
            <Path
                d="M13.877 8.203H.987A.586.586 0 00.4 8.79v2.344c0 .324.262.586.586.586h12.89a.586.586 0 00.587-.586V8.789a.586.586 0 00-.586-.586zm-5.102 5.445l-1.93 1.93-.757-.758a.586.586 0 10-.829.829l1.172 1.171a.584.584 0 00.829 0l2.344-2.343a.586.586 0 10-.829-.829zM8.042 6.41l3.894-1.669a.587.587 0 00-.462-1.078L7.579 5.332a.587.587 0 00.463 1.078z"
                fill="url(#paint1_linear_314_2686)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_314_2686"
                    x1={8.58574}
                    y1={20}
                    x2={8.58574}
                    y2={-0.00000238419}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FD5900" />
                    <Stop offset={1} stopColor="#FFDE00" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_314_2686"
                    x1={7.4316}
                    y1={16.9921}
                    x2={7.4316}
                    y2={3.61624}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFE59A" />
                    <Stop offset={1} stopColor="#FFFFD5" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default VoterComponent
