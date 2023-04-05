import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PencilComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_262_156)">
                <Path
                    d="M.177 19.823a.604.604 0 00.657.132l1.441-.594.036-1.672-2.134 2.134z"
                    fill="#16202D"
                />
                <Path
                    d="M.64 17.725l-.595 1.441a.604.604 0 00.132.657l2.667-1.6-2.205-.498z"
                    fill="#2D3E53"
                />
                <Path
                    d="M5.299 18.116l.035-2.81-3.557 3.557.498.498L5.3 18.116z"
                    fill="#FFD19C"
                />
                <Path
                    d="M1.884 14.701L.639 17.725l1.138 1.138 3.735-2.24L1.884 14.7z"
                    fill="#FFF0BE"
                />
                <Path
                    d="M19.647 2.06l-.854-.853-5.478 5.905 4.624-1.637 1.708-1.707a1.207 1.207 0 000-1.707z"
                    fill="#FF3187"
                />
                <Path
                    d="M18.792 1.207L17.94.354a1.207 1.207 0 00-1.707 0L14.524 2.06l-.569 5.69 4.837-4.836a1.207 1.207 0 000-1.708z"
                    fill="#FF5178"
                />
                <Path
                    d="M11.964 5.475l4.695 1.281 1.28-1.28-.853-.854-5.122.853z"
                    fill="#DFF5FF"
                />
                <Path
                    d="M17.085 4.622l-2.56-2.561-1.28 1.28.853 4.269 2.987-2.988z"
                    fill="#fff"
                />
                <Path
                    d="M4.445 17.262l.854.854 11.36-11.36-.854-.854-7.759 3.601-3.6 7.76z"
                    fill="#FFB24A"
                />
                <Path
                    d="M1.883 14.7L13.24 3.343l2.56 2.56-11.358 11.36-2.56-2.561z"
                    fill="#FFD23B"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_262_156">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default PencilComponent
