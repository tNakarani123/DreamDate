import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DogComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.096.774H13.87c-1.169.464-1.428-.322-3.87-.322-2.443 0-2.702.786-3.871.322H2.903l-.43 8.105c.268 3.186 2.244 4.92 3.803 5.551h7.447c1.559-.631 3.535-2.365 3.803-5.55l-.43-8.106z"
                fill="#F5DCB4"
            />
            <Path
                d="M13.871.774c3.632 1.087 1.655 6.694 3.994 9.117.335.348.929.193 1.069-.27.185-.61.37-1.578.34-2.96-.04-1.895.726-2.016.726-2.016S19.032.13 16.13.13c-.969 0-2.259.645-2.259.645z"
                fill="#965A50"
            />
            <Path
                d="M6.612 9.161a1.132 1.132 0 01-1.129-1.129v-.645c0-.621.508-1.13 1.13-1.13.62 0 1.128.509 1.128 1.13v.645c0 .621-.508 1.129-1.129 1.129z"
                fill="#4B3F4E"
            />
            <Path
                d="M6.612 6.258c-.055 0-.108.008-.16.016v1.597a.645.645 0 001.29 0v-.484c0-.621-.509-1.13-1.13-1.13z"
                fill="#5D5360"
            />
            <Path
                d="M6.613 7.548a.484.484 0 100-.967.484.484 0 000 .967z"
                fill="#fff"
            />
            <Path
                d="M13.387 9.161c-.621 0-1.13-.508-1.13-1.129v-.645c0-.621.509-1.13 1.13-1.13.62 0 1.129.509 1.129 1.13v.645c0 .621-.508 1.129-1.13 1.129z"
                fill="#4B3F4E"
            />
            <Path
                d="M13.387 6.258c-.055 0-.108.008-.161.016v1.597a.645.645 0 001.29 0v-.484c0-.621-.508-1.13-1.13-1.13z"
                fill="#5D5360"
            />
            <Path
                d="M13.387 7.548a.484.484 0 100-.968.484.484 0 000 .968z"
                fill="#fff"
            />
            <Path
                d="M17.865 9.891c.335.348.929.194 1.069-.27.106-.35.21-.822.276-1.418-.634-.316-1.175-1.324-1.508-3.034-.605-3.104-1.452-4.838-3.83-4.395 3.631 1.087 1.654 6.694 3.993 9.117z"
                fill="#824641"
            />
            <Path
                d="M6.276 14.43h1.53S5.12 12.629 4.676 9.443c-.863-6.197.78-8.05 2.2-8.524A1.803 1.803 0 016.13.774H2.903l-.43 8.105c.268 3.185 2.244 4.92 3.803 5.55z"
                fill="#E7C9A5"
            />
            <Path
                d="M6.129.774C2.497 1.861 4.474 7.468 2.136 9.891c-.336.348-.93.193-1.07-.27-.185-.61-.37-1.578-.34-2.96C.766 4.766 0 4.645 0 4.645S.968.13 3.871.13c.968 0 2.258.645 2.258.645z"
                fill="#965A50"
            />
            <Path
                d="M6.021.723C5.694.57 4.673.129 3.871.129.968.129 0 4.645 0 4.645s.766.121.726 2.016v.073C2.582-.308 5.434.475 6.02.723z"
                fill="#824641"
            />
            <Path
                d="M10 17.226c1.96 0 3.548-1.155 3.548-2.58 0-1.426-1.589-2.581-3.548-2.581-1.96 0-3.549 1.155-3.549 2.58 0 1.426 1.589 2.58 3.549 2.58z"
                fill="#BC8E78"
            />
            <Path
                d="M8.387 14.645v1.613a1.613 1.613 0 103.226 0v-1.613H8.387z"
                fill="#FF8087"
            />
            <Path
                d="M8.387 15.905a3.55 3.55 0 001.29-.415v.445a.323.323 0 00.645 0v-.45c.38.218.822.361 1.29.42v-1.26H8.388v1.26z"
                fill="#E6646E"
            />
            <Path
                d="M12.097 11.742H7.904c-1.336 0-2.42.794-2.42 1.774s1.084 1.774 2.42 1.774c.673 0 1.28-.202 1.718-.527a.634.634 0 01.378-.124c.134 0 .268.041.379.124.438.325 1.045.527 1.718.527 1.336 0 2.42-.794 2.42-1.774s-1.084-1.774-2.42-1.774z"
                fill="#D4AF91"
            />
            <Path
                d="M10 10.452c1.069 0 1.935.577 1.935 1.29 0 .687-.813 1.05-1.4 1.317-.34.155-.73.155-1.07 0-.587-.268-1.4-.63-1.4-1.317 0-.713.866-1.29 1.935-1.29z"
                fill="#5D5360"
            />
            <Path
                d="M9.022 11.389c-.045-.406.241-.84.241-.84-.703.193-1.199.654-1.199 1.193 0 .687.814 1.049 1.401 1.316.34.156.73.156 1.07 0 .126-.057.263-.12.4-.188-.794-.14-1.822-.664-1.913-1.481z"
                fill="#4B3F4E"
            />
        </Svg>
    )
}

export default DogComponent
