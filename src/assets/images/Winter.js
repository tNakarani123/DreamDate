import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function WinterComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_325_504)">
                <Path
                    d="M20 10a.524.524 0 00-.525-.525h-.825l.786-.785a.525.525 0 00-.742-.742l-1.527 1.527h-.777l.786-.785a.525.525 0 00-.742-.742l-1.527 1.528h-3.64L13.84 6.9H16a.524.524 0 100-1.049h-1.11l.548-.549h2.16a.524.524 0 100-1.049h-1.11l.583-.583a.524.524 0 10-.742-.742l-.583.584V2.4a.524.524 0 10-1.05 0v2.16l-.548.55V3.998a.524.524 0 10-1.05 0v2.16l-2.574 2.575v-3.64l1.528-1.528a.525.525 0 00-.742-.742l-.786.786v-.777l1.528-1.527a.525.525 0 00-.742-.742l-.786.786V.524a.525.525 0 00-1.049 0v.826L8.69.564a.524.524 0 10-.742.742l1.527 1.527v.777l-.785-.786a.524.524 0 10-.742.742l1.528 1.527v3.64L6.9 6.16V4a.524.524 0 10-1.049 0V5.11l-.549-.549v-2.16a.524.524 0 10-1.049 0v1.111l-.583-.583a.524.524 0 10-.742.742l.584.583H2.4a.524.524 0 100 1.05h2.16l.55.548H3.998a.524.524 0 100 1.05h2.16l2.575 2.573h-3.64L3.565 7.948a.524.524 0 10-.742.742l.786.785h-.777L1.306 7.948a.524.524 0 10-.742.742l.786.785H.524a.524.524 0 000 1.05h.826l-.786.785a.524.524 0 10.742.742l1.527-1.528h.777l-.786.786a.524.524 0 10.742.742l1.527-1.528h3.64L6.16 13.1H4a.524.524 0 100 1.049H5.11l-.549.549h-2.16a.524.524 0 100 1.049h1.111l-.583.583a.524.524 0 10.742.742l.583-.584v1.111a.524.524 0 101.05 0v-2.16l.548-.549V16a.524.524 0 101.049 0v-2.16l2.574-2.574v3.64l-1.527 1.528a.525.525 0 00.742.742l.785-.786v.776l-1.527 1.528a.525.525 0 00.742.742l.785-.786v.825a.524.524 0 101.05 0v-.825l.785.786a.524.524 0 10.742-.742l-1.528-1.527v-.777l.786.786a.523.523 0 00.742 0 .525.525 0 000-.742l-1.528-1.527v-3.64l2.574 2.574V16a.524.524 0 101.05 0V14.89l.548.549v2.16a.524.524 0 101.05 0v-1.111l.583.583a.523.523 0 00.742 0 .525.525 0 000-.742l-.584-.583h1.111a.524.524 0 100-1.05h-2.16l-.549-.548H16a.524.524 0 100-1.05h-2.16l-2.574-2.573h3.64l1.528 1.527a.523.523 0 00.741 0 .524.524 0 000-.742l-.785-.785h.776l1.528 1.527a.523.523 0 00.741 0 .524.524 0 000-.742l-.785-.785h.825c.29 0 .525-.235.525-.525z"
                    fill="#80C7EA"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_325_504">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default WinterComponent
