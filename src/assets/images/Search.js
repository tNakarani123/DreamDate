import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SearchComponent(props) {
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
                d="M19.116 11.61c-4.132 0-7.498 3.366-7.498 7.498s3.366 7.505 7.498 7.505a7.453 7.453 0 004.671-1.646l3.124 3.122a.836.836 0 001.181-1.18l-3.123-3.123a7.467 7.467 0 001.647-4.678c0-4.133-3.368-7.499-7.5-7.499zm0 1.666c3.232 0 5.832 2.6 5.832 5.832 0 3.231-2.6 5.838-5.832 5.838a5.824 5.824 0 01-5.832-5.838c0-3.232 2.6-5.832 5.832-5.832z"
                fill="#8041C6"
            />
        </Svg>
    )
}

export default SearchComponent
