import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RunningComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.893 2.104C7.256 1.467 7.206.982 7.665.251c.46-.73 1.91.365 1.91.365v4.097"
                fill="#FEE372"
            />
            <Path
                d="M19.616 7.132c0 1.245-1.704 2.137-3.76 2.137H4.87c-.988 0-1.815-.11-2.49-.267C.746 8.622 0 7.97 0 7.97l.73-1.76 1.798.088 17.088.833z"
                fill="#CCE6F6"
            />
            <Path
                d="M19.616 7.132s-2.002.73-4.708.73c-1.968 0-8.573-.873-12.03-1.35-1.295-.177-2.148-.3-2.148-.3-.519-.718.506-3.185 1.081-4.433A2.088 2.088 0 013.453.57a1.69 1.69 0 01.2-.012c.362 0 .595.605.945 1.19.327.55.756 1.082 1.49 1.082C7.601 2.83 9.574.616 9.574.616c3.876 2.655 6.875 3.837 6.875 3.837s2.503.014 3.112.623c.609.608.54 1.731.054 2.056z"
                fill="#FB6572"
            />
            <Path
                d="M2.88 6.513l-.5 2.489C.746 8.622 0 7.97 0 7.97l.73-1.76 1.798.088.351.214z"
                fill="#9DCAE0"
            />
            <Path
                d="M4.598 1.748C3.765.7 2.178 4.305 2.879 6.513 1.583 6.335.73 6.212.73 6.212c-.519-.718.506-3.185 1.081-4.433A2.088 2.088 0 013.453.57c.067-.008.133-.012.2-.012.362 0 .596.605.945 1.19z"
                fill="#EA394E"
            />
            <Path
                d="M10.904 1.493l-3.676 4.09C5.984 4.844 4.192 4.237 2.874 3.85a33.125 33.125 0 00-1.737-.463c.126-.337.26-.667.39-.967l1.62.53.459.149a1.899 1.899 0 001.578-.185l.338-.207c.166.077.353.122.566.122C7.603 2.83 9.576.617 9.576.617c.456.312.9.604 1.328.876zM19.616 7.132s-2.002.73-4.708.73c-.578 0-1.557-.075-2.74-.194 0-.627 1.604-2.106 2.821-2.214.217 1.056 1.462.758 2.409.433.946-.325 2.164-.811 2.164-.811.609.609.54 1.731.054 2.056z"
                fill="#4695BC"
            />
            <Path
                d="M3.148 2.95a6.637 6.637 0 00-.274.9 33.113 33.113 0 00-1.737-.462c.126-.337.26-.667.39-.968l1.62.53z"
                fill="#0E708E"
            />
            <Path
                d="M14.99 5.454c-1.217.108-2.821 1.587-2.821 2.214a169.214 169.214 0 01-3.484-.395c0-.607-.597-1.18-1.456-1.69l3.675-4.09c3.212 2.04 5.547 2.96 5.547 2.96.569.568-.243.893-1.46 1.001z"
                fill="#FEE372"
            />
            <Path
                d="M11.283 2.838a.306.306 0 01-.216-.522l.784-.785a.306.306 0 01.433.433l-.785.785a.305.305 0 01-.216.09zM12.289 3.402a.305.305 0 01-.217-.523l.785-.785a.306.306 0 01.433.433l-.785.785a.305.305 0 01-.216.09zM13.294 3.965a.305.305 0 01-.216-.522l.785-.785a.306.306 0 11.433.433l-.785.785a.305.305 0 01-.217.09zM14.3 4.529a.306.306 0 01-.216-.522l.784-.786a.306.306 0 01.433.433l-.784.785a.305.305 0 01-.217.09z"
                fill="#FB6572"
            />
            <Path
                d="M9.552 2.189a.31.31 0 01-.298-.235.31.31 0 01.152-.34c.208-.114.477.067.45.303a.311.311 0 01-.304.272z"
                fill="#1E2628"
            />
        </Svg>
    )
}

export default RunningComponent
