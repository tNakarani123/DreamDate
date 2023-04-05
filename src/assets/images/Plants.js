import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlantsComponent(props) {
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
                d="M8.04 2.867C6.293 1.12 2.874.918.454.918A.454.454 0 000 1.372c0 2.42.203 5.84 1.949 7.587a4.229 4.229 0 002.989 1.067A4.529 4.529 0 008.04 8.96c1.302-1.302 1.54-4.552 0-6.092zM19.546 2.714c-2.42 0-5.84.203-7.587 1.95-1.544 1.543-1.302 4.788 0 6.09a4.53 4.53 0 003.103 1.068 4.23 4.23 0 002.989-1.067C19.798 9.007 20 5.588 20 3.168a.454.454 0 00-.454-.454z"
                fill="#4CAF50"
            />
            <Path
                d="M9.536 19.082a.454.454 0 01-.454-.454C9.082 8.996 5.55 6.58 4.22 5.67a3.55 3.55 0 01-.454-.344.454.454 0 01.642-.642c.103.087.211.166.325.237 1.181.808 3.962 2.71 4.924 8.951a10.882 10.882 0 015.974-7.428.491.491 0 01.635.2.421.421 0 01-.181.588l-.074.034c-4.978 2.34-6.024 7.47-6.024 11.362 0 .25-.201.452-.451.454z"
                fill="#388E3C"
            />
        </Svg>
    )
}

export default PlantsComponent