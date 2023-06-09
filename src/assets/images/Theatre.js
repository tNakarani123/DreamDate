import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TheatreComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_280_4043)">
                <Path
                    d="M19.379 11.866l-1.701-4.674a1.748 1.748 0 00-2.24-1.044L9.354 8.362v3.251H6.888l1.822 4.025c.515 1.414 1.518 2.28 2.943 2.76l3.204 1.225 1.84-.094c.23-.173.429-.39.585-.647l1.673-2.747a4.952 4.952 0 00.424-4.27zm-5.387-.867a.323.323 0 01.454.048c.206.255.563.391.932.362.369-.032.697-.23.857-.516a.322.322 0 11.563.313c-.266.479-.776.795-1.364.845-.056.005-.11.008-.164.008-.527 0-1.014-.22-1.326-.606a.322.322 0 01.048-.454zm-2.42 2.458c-.313.22-.672.333-1.025.333-.192 0-.383-.034-.564-.103a.323.323 0 11.23-.603c.306.117.685.057.988-.155.303-.213.487-.548.481-.876a.323.323 0 11.646-.012c.01.547-.273 1.077-.756 1.416zm5.048 1.911a6.194 6.194 0 00-2.026.386 6.193 6.193 0 00-1.797 1.005c-.209.17-.53.018-.524-.251a2.62 2.62 0 014.57-1.683c.185.205.053.54-.223.543z"
                    fill="#A4CCFF"
                />
                <Path
                    d="M11.815 11.2a.32.32 0 01-.097.055c-1.5.546-1.978 1.541-1.983 1.55a.323.323 0 01-.585-.272c.024-.05.599-1.248 2.347-1.884a.322.322 0 01.318.55zM13.796 10.478a.322.322 0 01-.11-.626c1.747-.636 2.959-.088 3.009-.064a.323.323 0 01-.271.585c-.045-.02-1.037-.453-2.517.085a.322.322 0 01-.11.02z"
                    fill="#739AD6"
                />
                <Path
                    d="M11.824 17.883a3.87 3.87 0 01-2.399-2.343l-1.43-3.927H6.889l1.542 4.238a4.952 4.952 0 003.069 2.998l3.047 1.029c.747.252 1.55.103 2.15-.35l-4.872-1.645z"
                    fill="#8BB3EA"
                />
                <Path
                    d="M12.226 2.895L4.562.105a1.742 1.742 0 00-.714-.101L1.237 5.899c-.515 1.413-.496 2.83.286 4.114l3.066 3.943c.287.014.58-.024.864-.12l3.048-1.03a4.952 4.952 0 003.068-2.997l1.701-4.674a1.748 1.748 0 00-1.044-2.24zM3.055 5.421a.322.322 0 01.072-.45c.443-.321 1.039-.393 1.593-.191.555.202.966.64 1.099 1.171a.322.322 0 11-.626.156c-.08-.318-.345-.594-.693-.72-.348-.127-.73-.086-.995.106a.322.322 0 01-.45-.072zm4.799 4.673a2.62 2.62 0 01-4.57-1.683c-.008-.27.314-.422.523-.25.49.4 1.102.75 1.797 1.004a6.193 6.193 0 002.026.385c.276.004.408.339.224.544zm2.11-2.158a.323.323 0 01-.392-.235c-.08-.318-.345-.594-.693-.72-.348-.127-.729-.086-.994.106a.322.322 0 11-.379-.522c.443-.321 1.04-.393 1.594-.191s.965.64 1.098 1.17a.322.322 0 01-.234.392z"
                    fill="#FF8086"
                />
                <Path
                    d="M6.203 4.436a.322.322 0 01-.11-.02c-1.5-.545-2.506-.09-2.516-.086a.323.323 0 01-.273-.585c.051-.024 1.261-.572 3.01.065a.322.322 0 01-.111.626zM10.558 6.95a.322.322 0 01-.292-.184c-.023-.048-.505-1.015-1.983-1.553a.322.322 0 11.22-.606c1.748.636 2.323 1.834 2.347 1.884a.323.323 0 01-.292.46z"
                    fill="#DB4655"
                />
                <Path
                    d="M1.915 9.562a3.87 3.87 0 01-.332-3.337L3.848.004A1.75 1.75 0 002.322 1.15L.62 5.824a4.952 4.952 0 00.424 4.27l1.673 2.746a2.337 2.337 0 001.871 1.115L1.915 9.562z"
                    fill="#E5646E"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_280_4043">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default TheatreComponent
