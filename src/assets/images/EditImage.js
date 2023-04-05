import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EditImageComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_411_5062)" fill={props.color}>
                <Path d="M15.833 10.039a.833.833 0 00-.833.833v6.667c0 .459-.373.833-.833.833H2.5a.834.834 0 01-.833-.833V5.872c0-.46.373-.833.833-.833h6.667a.833.833 0 100-1.667H2.5a2.503 2.503 0 00-2.5 2.5V17.54c0 1.378 1.122 2.5 2.5 2.5h11.667c1.378 0 2.5-1.122 2.5-2.5v-6.667a.833.833 0 00-.834-.833z" />
                <Path d="M7.813 9.279a.422.422 0 00-.114.212l-.59 2.947a.418.418 0 00.492.49l2.945-.59a.415.415 0 00.214-.113l6.593-6.594-2.946-2.945-6.594 6.593zM19.39.648a2.085 2.085 0 00-2.946 0l-1.153 1.154 2.946 2.946 1.153-1.154c.393-.392.61-.916.61-1.472a2.07 2.07 0 00-.61-1.474z" />
            </G>
            <Defs>
                <ClipPath id="clip0_411_5062">
                    <Path fill={props.color} d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default EditImageComponent
