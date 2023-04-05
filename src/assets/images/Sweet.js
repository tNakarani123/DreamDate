import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SweetComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 12 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M.313 0h10v10.938h-10V0z" fill="#663C28" />
            <Path d="M10.313 10l-1.25 1.25v2.5l1.25 1.25v-5z" fill="#AD6643" />
            <Path d="M0 10h10.625v8.125H0V10z" fill="#EB423F" />
            <Path
                d="M0 18.125l1.25-1.25V10H0v8.125zM10.625 18.125l-1.25-1.25V11.25h1.25v6.875z"
                fill="#D13330"
            />
            <Path d="M0 10l1.563 1.875 9.687 1.25L10.625 10H0z" fill="#F7CCA9" />
            <Path d="M1.25 16.875h8.125l1.25 1.25H0l1.25-1.25z" fill="#962523" />
            <Path
                d="M1.563 1.25h2.5v2.5h-2.5v-2.5zM6.563 1.25h2.5v2.5h-2.5v-2.5z"
                fill="#8C5237"
            />
            <Path
                d="M5.313 0l-1.25 1.25v2.5L5.313 5V0zM.313 0l1.25 1.25h2.5L5.313 0h-5zM10.313 0l-1.25 1.25v2.5L10.313 5V0zM5.313 0l1.25 1.25h2.5L10.313 0h-5z"
                fill="#AD6643"
            />
            <Path
                d="M1.563 6.25h2.5v2.5h-2.5v-2.5zM6.563 6.25h2.5v2.5h-2.5v-2.5z"
                fill="#8C5237"
            />
            <Path
                d="M5.313 5l-1.25 1.25v2.5L5.313 10V5zM.313 5l1.25 1.25h2.5L5.313 5h-5zM10.313 5l-1.25 1.25v2.5l1.25 1.25V5zM5.313 5l1.25 1.25h2.5L10.313 5h-5z"
                fill="#AD6643"
            />
        </Svg>
    )
}

export default SweetComponent
