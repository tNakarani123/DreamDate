import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatCameraComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.226 10.35A3.23 3.23 0 0110 13.574a3.229 3.229 0 01-3.225-3.226A3.229 3.229 0 0110 7.124a3.23 3.23 0 013.226 3.225zM20 5.77v9.16c0 1.222-.99 2.212-2.212 2.212H2.212A2.212 2.212 0 010 14.931V5.768c0-1.221.99-2.211 2.212-2.211h2.72v-.765c0-1.07.866-1.936 1.935-1.936h6.266c1.07 0 1.935.867 1.935 1.936v.764h2.72c1.222 0 2.212.99 2.212 2.212zm-5.116 4.58A4.89 4.89 0 0010 5.464a4.89 4.89 0 00-4.884 4.884A4.89 4.89 0 0010 15.233a4.89 4.89 0 004.884-4.884z"
                fill="#fff"
            />
        </Svg>
    )
}

export default ChatCameraComponent
