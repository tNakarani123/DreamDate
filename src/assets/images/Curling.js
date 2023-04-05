import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CurlingComponent(props) {
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
                d="M8.484 4.882L9.66 2.53H10l.588-1.177L10 .177H7.896L3.778 7.235l3.111.588L10 7.236l.588-1.176L10 4.882H8.484z"
                fill="#607DA5"
            />
            <Path
                d="M15.882 2.53a1.176 1.176 0 000-2.353H10V2.53h5.882zM13.778 4.882H10v2.353l2.477.588 2.477-.588-1.176-2.353z"
                fill="#385C8E"
            />
            <Path
                d="M3.098 7.235A3.101 3.101 0 000 10.333v2.196l5 .588 5-.588.588-2.647L10 7.235H3.098z"
                fill="#FF884D"
            />
            <Path
                d="M20 10.333a3.101 3.101 0 00-3.098-3.098H10v5.294l5 .588 5-.588v-2.196z"
                fill="#FF4D4D"
            />
            <Path
                d="M.007 14.921a3.102 3.102 0 003.09 2.902H10V14.92l-4.997-.04-4.996.04z"
                fill="#FF884D"
            />
            <Path
                d="M19.993 14.921l-4.997-.04-4.996.04v2.902h6.902a3.102 3.102 0 003.09-2.902z"
                fill="#FF4D4D"
            />
            <Path
                d="M4.706 12.53l-.588.588-.589-.589v-1.764h1.177v1.764zM7.06 12.53l-.589.588-.588-.589v-1.764h1.176v1.764z"
                fill="#FFF5F5"
            />
            <Path
                d="M0 12.53c0 .039-.002 2.25.007 2.391H10l.588-1.196L10 12.53H0z"
                fill="#B3D9FF"
            />
            <Path
                d="M20 12.53H10v2.391h9.993c.01-.165.007-.032.007-2.392z"
                fill="#9BF"
            />
        </Svg>
    )
}

export default CurlingComponent
