import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TakeoutComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2 4.233l-.583 1.787h-1.653l.566-2.264.92-.07.747.547h.004z"
                fill="#A38671"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.334 6.02l-.074.747-1.17 11.687a1 1 0 01-1 .9H5.903a1 1 0 01-1-.9L3.739 6.767l-.073-.747h12.668z"
                fill="#CAD0D7"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.666 6.02L6.8 9.47a.667.667 0 00.493.217h5.414a.667.667 0 00.493-.217l3.134-3.45H3.666z"
                fill="#E4E8EB"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.667 15.354v2c0 .184-.15.334-.334.334H7.666a.333.333 0 01-.333-.334v-2h5.334z"
                fill="#D94452"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 13.354h4v2H8v-2z"
                fill="#EB5463"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 13.354H8l.193-.16 1.474-1.23.333-.277.334.277 1.476 1.23.19.16z"
                fill="#D94452"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.834 3.686L10.75 6.02H9.177l-.083-2.334.907-.333.833.333z"
                fill="#A38671"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.927.98v.04l-.093 2.666h-1.74L9 1.02a.963.963 0 111.927-.036V.979zM15.037 1.66v.036L14.2 4.233l-1.667-.477.647-2.593a.963.963 0 111.86.497h-.003z"
                fill="#EB5463"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.334 7.687H13a.333.333 0 010-.667h.334a.333.333 0 010 .667zM11.667 7.687H8.333a.333.333 0 110-.667h3.334a.333.333 0 110 .667zM7 7.687h-.334a.333.333 0 010-.667H7a.333.333 0 010 .667z"
                fill="#F4F6F8"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.766 15.354h-.433v.51l-.85-.566a.333.333 0 01.366-.554l.917.61zM13.516 15.298l-.85.566v-.51h-.43l.914-.61a.334.334 0 01.366.554zM12.85 13.298l-.85.566v-.51l-.19-.16.666-.45a.333.333 0 01.367.554h.007zM8.193 13.194l-.193.16v.51l-.85-.566a.333.333 0 01.366-.554l.677.45zM10.333 11.354v.61l-.334-.277-.333.277v-.61a.333.333 0 01.667 0z"
                fill="#F76C82"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.74 6.767L.58 10.244a.333.333 0 11-.494-.447L3.419 6.13a.334.334 0 01.247-.11l.073.747zM19.891 10.267a.333.333 0 01-.47-.023l-3.16-3.477.073-.747c.094 0 .184.04.247.11l3.334 3.667a.333.333 0 01-.024.47z"
                fill="#A9B0BB"
            />
        </Svg>
    )
}

export default TakeoutComponent
