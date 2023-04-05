import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BackpackingComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_325_540)">
                <Path
                    d="M0 15.273l1.172 1.172 1.21-1.172 1.173-1.098-1.172-1.245H1.172C.525 12.93 0 13.454 0 14.102v1.171z"
                    fill="#725D57"
                />
                <Path
                    d="M20 15.273l-1.172 1.172-1.21-1.172-1.173-1.098 1.172-1.245h1.211c.647 0 1.172.524 1.172 1.172v1.171z"
                    fill="#68544F"
                />
                <Path
                    d="M12.93 2.93a.58.58 0 01-.586.586.58.58 0 01-.586-.586c0-.973-.785-1.758-1.758-1.758s-1.758.785-1.758 1.758a.58.58 0 01-.586.586.58.58 0 01-.586-.586 2.93 2.93 0 015.86 0z"
                    fill="#53433F"
                />
                <Path
                    d="M10 1.172V0a2.93 2.93 0 012.93 2.93.58.58 0 01-.586.586.58.58 0 01-.586-.586c0-.973-.785-1.758-1.758-1.758z"
                    fill="#3E322E"
                />
                <Path
                    d="M2.383 15.273H0v3.555C0 19.475.525 20 1.172 20h1.21l1.173-2.27-1.172-2.457z"
                    fill="#53433F"
                />
                <Path
                    d="M17.617 15.273H20v3.555c0 .647-.525 1.172-1.172 1.172h-1.21l-1.173-2.27 1.172-2.457z"
                    fill="#3E322E"
                />
                <Path
                    d="M17.617 7.3V20h-2.344l-1.171-1.758H5.898L4.727 20H2.383V7.3c0-.316.258-.585.586-.585H17.03c.329 0 .586.27.586.586z"
                    fill="#FF4B00"
                />
                <Path
                    d="M17.617 7.3V20h-2.344l-1.171-1.758H10V6.715h7.031c.329 0 .586.27.586.586z"
                    fill="#DD3400"
                />
                <Path
                    d="M17.617 5.86v1.757a2.93 2.93 0 01-2.93 2.93H5.313a2.93 2.93 0 01-2.93-2.93V5.86h15.234z"
                    fill="#53433F"
                />
                <Path
                    d="M17.617 5.86v1.757a2.93 2.93 0 01-2.93 2.93H10V5.859h7.617z"
                    fill="#3E322E"
                />
                <Path
                    d="M18.79 4.102v1.171c0 .973-.786 1.758-1.759 1.758H2.97A1.755 1.755 0 011.21 5.273V4.102c0-.973.785-1.758 1.758-1.758h2.344l1.171 1.172 1.172-1.172h4.688l1.172 1.172 1.171-1.172h2.344c.973 0 1.758.785 1.758 1.758z"
                    fill="#73BCFF"
                />
                <Path
                    d="M18.79 4.102v1.171c0 .973-.786 1.758-1.759 1.758H10V2.344h2.344l1.172 1.172 1.171-1.172h2.344c.973 0 1.758.785 1.758 1.758z"
                    fill="#3AAAFF"
                />
                <Path
                    d="M15.273 15.86V20H4.727v-4.14c0-.973.785-1.758 1.757-1.758h5.274l.586 1.171.586-1.171h.586c.972 0 1.757.785 1.757 1.757z"
                    fill="#53433F"
                />
                <Path
                    d="M15.273 15.86V20H10v-5.898h1.758l.586 1.171.586-1.171h.586c.972 0 1.757.785 1.757 1.757z"
                    fill="#3E322E"
                />
                <Path
                    d="M12.344 16.445a.586.586 0 00.586-.586v-1.757h-1.172v1.757c0 .324.262.586.586.586z"
                    fill="#DFD7D5"
                />
                <Path
                    d="M6.484 12.93a1.172 1.172 0 01-1.171-1.172V2.344h2.343v9.414c0 .647-.524 1.172-1.172 1.172z"
                    fill="#EDE9E8"
                />
                <Path
                    d="M13.516 12.93a1.172 1.172 0 01-1.172-1.172V2.344h2.344v9.414c0 .647-.525 1.172-1.172 1.172z"
                    fill="#DFD7D5"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_325_540">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BackpackingComponent