import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function FilterComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={20} cy={20} r={19.25} stroke="#8041C6" strokeWidth={1.5} />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 15.833c0-.46.373-.833.833-.833h13.334a.833.833 0 010 1.667H13.333a.833.833 0 01-.833-.834zM15 20c0-.46.373-.833.833-.833h8.334a.833.833 0 010 1.666h-8.334A.833.833 0 0115 20zm3.333 4.167c0-.46.373-.834.834-.834h1.666a.833.833 0 010 1.667h-1.666a.833.833 0 01-.834-.833z"
                fill="#8041C6"
            />
        </Svg>
    )
}

export default FilterComponent
