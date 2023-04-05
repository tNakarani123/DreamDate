import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PaypalComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M14.197 1.543C13.333.555 11.729.062 9.508.062H3.332c-.37 0-.74.37-.864.74L0 16.975c0 .37.247.617.494.617H4.32l.988-6.049v.247c.123-.37.493-.74.864-.74h1.852c3.58 0 6.296-1.482 7.16-5.556v-.37c-.123 0-.123 0 0 0 .124-1.606-.123-2.593-.988-3.581z"
                fill="#263B80"
            />
            <Path
                d="M15.061 5.123v.37c-.864 4.198-3.58 5.556-7.16 5.556H6.049c-.37 0-.74.37-.864.74L3.95 19.322c0 .246.124.493.494.493h3.21c.37 0 .74-.247.74-.617v-.123l.618-3.828V15c0-.37.37-.618.74-.618h.494c3.087 0 5.556-1.234 6.173-4.938.247-1.481.124-2.84-.617-3.704a1.264 1.264 0 00-.74-.617z"
                fill="#139AD6"
            />
        </Svg>
    )
}

export default PaypalComponent
