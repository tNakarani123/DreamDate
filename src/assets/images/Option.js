import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function OptionComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_336_2043)" fill="#8041C6">
                <Path d="M12.5 0C5.596 0 0 5.596 0 12.5S5.596 25 12.5 25 25 19.404 25 12.5 19.404 0 12.5 0zm0 23.438c-6.04 0-10.938-4.897-10.938-10.938C1.563 6.46 6.46 1.562 12.5 1.562c6.04 0 10.938 4.897 10.938 10.938 0 6.04-4.897 10.938-10.938 10.938z" />
                <Path d="M12.5 14.063a1.563 1.563 0 100-3.126 1.563 1.563 0 000 3.126zM17.969 14.063a1.562 1.562 0 100-3.125 1.562 1.562 0 000 3.124zM7.031 14.063a1.563 1.563 0 100-3.126 1.563 1.563 0 000 3.126z" />
            </G>
            <Defs>
                <ClipPath id="clip0_336_2043">
                    <Path fill="#fff" d="M0 0H25V25H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default OptionComponent
