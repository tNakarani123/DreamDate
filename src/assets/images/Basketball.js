import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BasketballComponent(props) {
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
                d="M19.23 10a9.194 9.194 0 01-2.508 6.326 9.203 9.203 0 01-7.045 2.9 9.219 9.219 0 01-7.946-5.117A9.19 9.19 0 01.77 10a9.24 9.24 0 01.716-3.571 9.245 9.245 0 012.512-3.442A9.211 9.211 0 0110 .77a9.22 9.22 0 014.083.95 9.255 9.255 0 014.781 5.697A9.237 9.237 0 0119.231 10z"
                fill="#F80"
            />
            <Path
                d="M19.231 10a9.194 9.194 0 01-2.508 6.326 9.202 9.202 0 01-7.046 2.9 9.194 9.194 0 01-4.256-1.209c.046.002.091.005.137.006a8.657 8.657 0 00.592.002 9.203 9.203 0 006.74-3.22 9.194 9.194 0 002.222-6.007 9.236 9.236 0 00-.367-2.584A9.252 9.252 0 0010.46.78a9.213 9.213 0 013.624.939 9.255 9.255 0 014.782 5.697A9.236 9.236 0 0119.232 10z"
                fill="#E14F01"
            />
            <Path
                d="M17.172 9.399a9.194 9.194 0 01-2.509 6.326 9.202 9.202 0 01-7.045 2.9 9.274 9.274 0 01-1.223-.124 9.177 9.177 0 01-.974-.484c.046.002.091.005.137.006a8.657 8.657 0 00.592.002 9.203 9.203 0 006.74-3.22 9.194 9.194 0 002.222-6.007 9.236 9.236 0 00-.367-2.584A9.252 9.252 0 0010.46.78c.368.018.73.058 1.085.118a9.255 9.255 0 015.261 5.917 9.236 9.236 0 01.367 2.584z"
                fill="#F06B02"
            />
            <Path
                d="M8.376 3.348c-.613.413-1.21.89-1.78 1.415l.167.129c.281.217.547.423.808.618l.007.006a49.45 49.45 0 015.055 4.783c1.69 1.847 3.16 3.765 4.376 5.709a8.637 8.637 0 01-.287.319c-2.877-4.633-6.677-8.247-9.402-10.49a57.116 57.116 0 01-.81-.62l-.217-.168a16.565 16.565 0 00-1.569 1.759C5.776 7.9 6.448 9.64 6.776 12.11c.343 2.792 1.612 5.37 3.493 7.116a8.622 8.622 0 01-.592-.001 11.476 11.476 0 01-1.994-2.783 12.693 12.693 0 01-1.316-4.28c-.31-2.343-.932-3.992-1.894-5.021-2.139 2.924-2.868 5.89-2.045 8.14a9.168 9.168 0 01-.696-1.173l-.003-.024a7.475 7.475 0 01.147-2.412c.34-1.57 1.132-3.234 2.291-4.81l.006-.009c-.552-.396-1.126-.552-1.662-.45-.507.095-.974.426-1.36.96.095-.319.206-.631.334-.935.294-.221.613-.367.95-.43.652-.124 1.338.059 1.986.527.475-.613.994-1.194 1.542-1.73-.74-.564-1.529-1.133-2.293-1.514.107-.101.216-.2.327-.295.768.403 1.543.967 2.268 1.52A15.565 15.565 0 018.03 3.085a3.302 3.302 0 01-.603-.657c-.27-.402-.383-.813-.33-1.192.151-.05.304-.097.459-.139-.204.532.127 1.193.83 1.75.196-.125.393-.246.59-.359 1.363-.78 2.687-1.205 3.903-1.26.414.136.817.301 1.203.492-1.44-.276-3.129.111-4.9 1.126-.145.082-.289.17-.432.26.147.092.305.181.474.265.582.286 1.222.5 1.903.634 3.971.784 6.49 1.887 7.736 3.412.12.409.21.829.272 1.258-.365-.93-1.13-1.715-2.327-2.39-1.353-.764-3.237-1.378-5.76-1.876a8.083 8.083 0 01-2.006-.669 5.234 5.234 0 01-.667-.391z"
                fill="#333"
            />
            <Path
                d="M1.644 9.127c.072-.52.18-.912.094-.914-.086-.002-.32.436-.392.956-.071.52.048.923.134.926.086.002.093-.448.164-.968z"
                fill="#fff"
            />
            <Path
                d="M1.425 10.046c-.053-.16-.088-.45-.042-.792.07-.508.296-.94.387-.955 0-.054-.008-.085-.032-.086-.086-.002-.32.437-.392.956-.057.415.007.756.08.877z"
                fill="#DCE0F4"
            />
            <Path
                d="M1.998 7.511c.043-.146.05-.255.012-.267-.037-.012-.149.09-.192.236-.044.147-.003.283.034.295.037.011.102-.117.146-.264z"
                fill="#fff"
            />
            <Path
                d="M1.825 7.741a.411.411 0 01.01-.213c.043-.146.155-.247.19-.235.004 0 .007.002.01.006-.001-.03-.01-.052-.026-.054-.036-.012-.148.089-.191.236a.39.39 0 00.007.26z"
                fill="#DCE0F4"
            />
            <Path
                d="M16.265 8.213c-.607 0-1.098.49-1.098 1.098a1.1 1.1 0 00-.32-.777 1.1 1.1 0 00-.778-.321 1.1 1.1 0 001.098-1.098 1.1 1.1 0 001.098 1.098z"
                fill="#fff"
            />
        </Svg>
    )
}

export default BasketballComponent