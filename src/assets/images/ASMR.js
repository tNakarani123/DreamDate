import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ASMRComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_325_1564)">
                <Path
                    d="M12.89 6.445C12.89 2.895 9.997 0 6.446 0 2.895 0 0 2.894 0 6.445c0 1.63.305 3.235.598 4.793.28 1.512.574 3.098.574 4.621 0 2.262 1.84 4.141 4.101 4.141.41 0 .797-.059 1.172-.176 1.688-.504 2.93-2.113 2.93-3.965 0-.28-.023-.55-.082-.82-.281-1.406.738-3.063 1.71-4.035a6.4 6.4 0 001.888-4.559z"
                    fill="#FED2A4"
                />
                <Path
                    d="M11.004 11.004c-.973.973-1.992 2.629-1.711 4.035.059.27.082.54.082.82 0 1.852-1.242 3.461-2.93 3.965V0c3.551 0 6.446 2.894 6.446 6.445a6.4 6.4 0 01-1.887 4.559z"
                    fill="#FFBD86"
                />
                <Path
                    d="M10.453 5.543c-.34-1.582-1.64-2.836-3.246-3.129a4.106 4.106 0 00-4.863 4.031c0 1.887.48 3.832.832 5.86a2.077 2.077 0 002.05 1.758 2.06 2.06 0 001.22-.41 2.05 2.05 0 00.82-1.266l.082-.446a4.075 4.075 0 00-.903-3.468A4.064 4.064 0 003.527 7.03c-.011-.199-.011-.387-.011-.586a2.93 2.93 0 012.93-2.93 3 3 0 01.55.047c1.125.211 2.074 1.126 2.309 2.227a2.924 2.924 0 01-.785 2.73l.832.833a4.168 4.168 0 001.101-3.81z"
                    fill="#F6A96C"
                />
                <Path
                    d="M20 9.375h-5.938v1.172H20V9.375zM19.113 17.517l-4.726-2.344.524-1.049 4.726 2.344-.524 1.049zM14.91 5.798l-.523-1.048 4.726-2.344.524 1.048-4.726 2.344z"
                    fill="#FF9F00"
                />
                <Path
                    d="M6.445 8.473a4.075 4.075 0 01.903 3.468l-.082.446a2.05 2.05 0 01-.82 1.265v-5.18zM9.352 9.352l-.832-.833a2.924 2.924 0 00.785-2.73C9.07 4.687 8.12 3.773 6.996 3.562a3.003 3.003 0 00-.55-.046V2.344c.245 0 .503.023.761.07 1.606.293 2.906 1.547 3.246 3.129a4.167 4.167 0 01-1.101 3.809z"
                    fill="#EA9B58"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_325_1564">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ASMRComponent