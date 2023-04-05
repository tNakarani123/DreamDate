import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HandComponent(props) {
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
                d="M12.299.326v16.305c0 .18-.146.326-.327.326H1.452a.326.326 0 01-.327-.326v-.833c0-.105.076-.197.18-.214a1.09 1.09 0 000-2.152.217.217 0 01-.18-.214v-1.44c0-.105.076-.197.18-.214a1.09 1.09 0 000-2.151.217.217 0 01-.18-.215V7.76c0-.106.076-.197.18-.214a1.09 1.09 0 000-2.152.217.217 0 01-.18-.214v-1.44c0-.106.076-.197.18-.214a1.09 1.09 0 000-2.152.217.217 0 01-.18-.214V.326c0-.18.146-.326.326-.326h10.521c.18 0 .327.146.327.326z"
                fill="#EFEDEF"
            />
            <Path
                d="M11.972 0h-1.276c.18 0 .327.146.327.326v16.305c0 .18-.146.326-.327.326h1.276c.18 0 .327-.146.327-.326V.326A.326.326 0 0011.972 0z"
                fill="#E3E0E4"
            />
            <Path
                d="M10.186 4.63H4.328a.302.302 0 010-.604h5.858a.302.302 0 110 .604zM8.345 8.78H4.328a.302.302 0 010-.603h4.017a.302.302 0 110 .603zM10.186 12.931H4.328a.302.302 0 110-.603h5.858a.302.302 0 110 .604z"
                fill="#A4ACE3"
            />
            <Path
                d="M17.81 6.923L14.5 2.77a1.286 1.286 0 00-1.885-.136L8.2 6.78a.504.504 0 00-.08.636l.188.3a1.166 1.166 0 001.727.276l2.131-1.753c.231-.19.58-.1.69.177l.58 1.454c.123.31.095.661-.078.947l-1.421 2.36v7.501h4.23v-5.373l1.85-5.127a1.305 1.305 0 00-.207-1.256z"
                fill="#FFCDBE"
            />
            <Path
                d="M17.81 6.923L14.502 2.77a1.286 1.286 0 00-1.614-.332c.149.08.285.19.397.332l3.309 4.152c.282.354.36.83.206 1.256l-1.85 5.127v5.373h1.216v-5.373l1.85-5.127a1.305 1.305 0 00-.206-1.256z"
                fill="#EBAE9D"
            />
            <Path
                d="M5.462 10.832a.302.302 0 01-.15-.563l1.55-.895a.302.302 0 01.301.523l-1.55.895a.3.3 0 01-.15.04z"
                fill="#FFD064"
            />
            <Path
                d="M17.898 2.598l-.773.446.652 1.13.773-.447a.652.652 0 00-.652-1.129z"
                fill="#E175A5"
            />
            <Path
                d="M16.755 2.837L7.029 8.452a1.017 1.017 0 001.017 1.761l9.726-5.615a.217.217 0 00.08-.296l-.8-1.386a.217.217 0 00-.297-.08z"
                fill="#5766CC"
            />
            <Path
                d="M17.852 4.302l-.427-.74c.073.127.048.278-.056.338L7.644 9.515c-.342.197-.775.13-1.122-.132a1.017 1.017 0 001.524.83l9.726-5.615a.217.217 0 00.08-.296z"
                fill="#3D4EC4"
            />
            <Path
                d="M12.337 13.992l-1.65-.943a1.59 1.59 0 01-.585-.58L7.98 8.822a1.08 1.08 0 011.774-1.22l1.573 1.953s2.958.757 2.886.83c-.072.071-1.876 3.607-1.876 3.607z"
                fill="#FFCDBE"
            />
            <Path
                d="M11.191 14.923v1.225l2.86.391 2.86-.39v-1.226a.37.37 0 00-.371-.371h-4.978a.37.37 0 00-.37.37z"
                fill="#E175A5"
            />
            <Path
                d="M16.54 14.552h-1.164a.37.37 0 01.37.37v1.226h1.165v-1.225a.37.37 0 00-.371-.371z"
                fill="#CA59A6"
            />
            <Path
                d="M10.396 19.799v-3.167c0-.267.217-.483.484-.483h6.342c.267 0 .483.216.483.483v3.167c0 .111-.09.201-.201.201h-6.906a.201.201 0 01-.202-.201z"
                fill="#80B6FC"
            />
            <Path
                d="M17.223 16.149h-1.164c.267 0 .483.216.483.483V20h.962c.112 0 .202-.09.202-.201v-3.167a.483.483 0 00-.483-.483z"
                fill="#5392F9"
            />
        </Svg>
    )
}

export default HandComponent