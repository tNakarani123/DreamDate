import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function VolleyComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_320_144)">
                <G clipPath="url(#clip1_320_144)">
                    <Path
                        d="M19.375 10a9.46 9.46 0 01-3.75 7.5A9.376 9.376 0 1110 .625c5.264.066 9.433 4.242 9.375 9.375z"
                        fill="#FFC239"
                    />
                    <Path
                        d="M10 .625A9.183 9.183 0 002.894 3.87 9.377 9.377 0 0017.5 14.063a9.276 9.276 0 001.469-1.38A9.73 9.73 0 0019.375 10C19.434 4.867 15.265.691 10 .625z"
                        fill="#FFD55D"
                    />
                    <Path
                        d="M19.375 10a9.17 9.17 0 00-3.75-7.5c.768 3.752.1 7.656-1.875 10.938l.563 2.177 2.716.58A9.518 9.518 0 0019.375 10z"
                        fill="#FFC239"
                    />
                    <Path
                        d="M12.969 1.125v14.208h2.209a9.363 9.363 0 002.322-1.27 9.276 9.276 0 001.469-1.38A9.73 9.73 0 0019.375 10a9.26 9.26 0 00-6.406-8.875z"
                        fill="#FFD55D"
                    />
                    <Path
                        d="M15.614 2.494A9.617 9.617 0 0010 .625 9.335 9.335 0 00.625 10l.547-.594a12.847 12.847 0 0110.386-4.059s2.441-1.58 4.088-2.681l-.033-.172z"
                        fill="#CCC"
                    />
                    <Path
                        d="M12.468.972A9.795 9.795 0 0010 .625 9.183 9.183 0 002.894 3.87a9.414 9.414 0 00-.085 5.085h9.66V.972z"
                        fill="#F2F2F2"
                    />
                    <Path
                        d="M18.109 14.687a9.957 9.957 0 01-7.213-3.641L10 10 7.018 9.89l-1.705 1.671a13.132 13.132 0 008.675 5.654l1.637.284a9.318 9.318 0 002.484-2.813z"
                        fill="#CCC"
                    />
                    <Path
                        d="M10.896 11.046L10 10 7.018 9.89l-1.705 1.671a13.13 13.13 0 004.44 4.132 9.405 9.405 0 002.122.243 9.327 9.327 0 004.94-1.41 9.874 9.874 0 01-5.92-3.481z"
                        fill="#F2F2F2"
                    />
                    <Path
                        d="M11.557 5.347c-3.213-.239-6.4.73-8.935 2.719a9.327 9.327 0 001.766 4.138 9.835 9.835 0 013.036-1.62L10 10l.796-1.687c.47-.92.73-1.933.761-2.966z"
                        fill="#173E67"
                    />
                    <Path d="M3.05 7.744z" fill="#FFC239" />
                    <Path
                        d="M1.172 9.406L.625 10a9.327 9.327 0 001.257 4.688 14.769 14.769 0 012.506-2.482 9.326 9.326 0 01-1.766-4.14c-.518.408-1.003.856-1.45 1.34z"
                        fill="#112F4D"
                    />
                    <Path
                        d="M4.616 12.037zM4.81 11.897zM3.13 7.688l-.08.056.08-.056zM4.616 12.037c-.076.055-.152.11-.227.168.075-.058.151-.111.227-.168z"
                        fill="#FFC239"
                    />
                    <Path
                        d="M13.752 13.435a15.275 15.275 0 001.873-10.933A9.602 9.602 0 0010.319.638l.282.525c1.209 2.392 1.28 5.059.193 7.149L10 10l.896 1.045a9.71 9.71 0 002.856 2.39z"
                        fill="#1F5389"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_320_144">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
                <ClipPath id="clip1_320_144">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default VolleyComponent
