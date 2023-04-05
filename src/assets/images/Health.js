import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HealthComponent(props) {
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
                d="M11.51 5.079a1.533 1.533 0 012.841.964c.185-.051.372-.078.557-.078.171 0 .333.023.482.069a2.569 2.569 0 00-4.626-1.7l.746.744zM2.47 10.178l.053-.01-.026-.048a2.189 2.189 0 01-.114-.246 1.534 1.534 0 111.34-2.563c.06-.263.184-.495.369-.68.07-.07.146-.13.228-.183a2.569 2.569 0 10-2.815 4.231c.223-.248.56-.429.965-.502z"
                fill="#FED2A4"
            />
            <Path
                d="M9.423 7.563a.85.85 0 01.37-.08c.222 0 .47.075.718.218l.052.029.007-.058c.125-1.02.664-1.76 1.282-1.76.447 0 .86.382 1.103 1.021l.024.064.043-.053c.062-.077.127-.15.193-.216L9.17 2.682a.202.202 0 00-.294.01 3.36 3.36 0 00-.59 3.482c.508.052.953.603 1.138 1.389z"
                fill="#FB2B3A"
            />
            <Path
                d="M9.423 7.563a.85.85 0 01.492-.072 3.36 3.36 0 01-.093-4.156l-.653-.653a.202.202 0 00-.294.01 3.36 3.36 0 00-.59 3.482c.508.052.953.603 1.138 1.389z"
                fill="#E41F2D"
            />
            <Path
                d="M9.906 6.63a.292.292 0 01-.207-.5l.324-.323a.293.293 0 11.415.414l-.325.324a.292.292 0 01-.207.086zM9.806 5.19h-.458a.293.293 0 010-.586h.458a.293.293 0 110 .586z"
                fill="#FE646F"
            />
            <Path
                d="M6.71 4.182a2.997 2.997 0 00.147-4.08.202.202 0 00-.295-.01L2.62 4.035a.202.202 0 00.01.294 2.997 2.997 0 004.08-.147z"
                fill="#FD4755"
            />
            <Path
                d="M3.376 3.413a.199.199 0 01-.055-.08l-.701.702a.202.202 0 00.01.294 2.997 2.997 0 004.613-.87 2.997 2.997 0 01-3.867-.046z"
                fill="#FB2B3A"
            />
            <Path
                d="M5.863 3.687a.292.292 0 01-.207-.086l-.289-.29a.293.293 0 11.414-.414l.29.29a.293.293 0 01-.208.5zM4.58 4.185a.293.293 0 01-.294-.293v-.41a.293.293 0 01.586 0v.41a.293.293 0 01-.293.293zM6.42 2.426h-.41a.293.293 0 010-.586h.41a.293.293 0 010 .586z"
                fill="#E41F2D"
            />
            <Path
                d="M4.738 12.449c0-.19.021-.374.061-.552-.704-.223-1.172-.664-1.172-1.155 0-.448.382-.86 1.02-1.103l.064-.024-.053-.043a2.844 2.844 0 01-.218-.196c-.407-.407-.668-.911-.739-1.422-.373-.081-.741-.023-1.028.195-.54.41-.61 1.25-.21 1.99-.677.122-1.199.553-1.277 1.128-.065.473.186.932.622 1.246h2.931l-.001-.064z"
                fill="#80D261"
            />
            <Path
                d="M8.829 12.513l.01-.012.001-.053c0-.867-.705-1.572-1.573-1.572-.867 0-1.573.705-1.573 1.572l.002.065H8.83z"
                fill="#017B4E"
            />
            <Path
                d="M7.267 9.92c.882 0 1.659.453 2.112 1.138a3.34 3.34 0 01.045-.758 3.755 3.755 0 01-.086-.142c-.297-.513-.456-1.065-.448-1.553.008-.48.178-.84.477-1.014a.78.78 0 01.092-.045c-.199-.83-.685-1.416-1.253-1.416-.48 0-.9.418-1.14 1.046a2.865 2.865 0 00-.202-.224c-.869-.87-2.122-1.026-2.8-.349-.677.678-.52 1.931.349 2.8.07.072.145.138.22.2-.628.238-1.045.66-1.045 1.139 0 .518.487.967 1.202 1.193A2.534 2.534 0 017.267 9.92z"
                fill="#017B4E"
            />
            <Path
                d="M6.436 12.022a3.033 3.033 0 01-.58-.175 1.53 1.53 0 00-.122.627h.782a1.62 1.62 0 01.064-.183.196.196 0 00-.144-.269zM3.588 10.742c0 .509.47.952 1.165 1.181a2.55 2.55 0 01.272-.727.88.88 0 01-.13-.454c0-.41.302-.775.78-1.022a.196.196 0 00.046-.314l-.002-.003c-.87-.869-1.025-2.123-.348-2.8.133-.133.29-.234.46-.303-.657-.223-1.331-.132-1.767.303-.677.678-.52 1.931.348 2.8.072.072.146.138.222.2-.629.238-1.046.659-1.046 1.139z"
                fill="#026841"
            />
            <Path
                d="M6.982 9.936a2.54 2.54 0 01.885.056L6.27 8.394a.293.293 0 10-.415.415l1.127 1.127z"
                fill="#026841"
            />
            <Path
                d="M15.423 9.345c.076-.061.15-.127.222-.198.869-.87 1.025-2.123.348-2.8-.678-.677-1.931-.522-2.8.348-.073.072-.14.147-.202.224-.24-.628-.66-1.046-1.14-1.046-.65 0-1.194.77-1.32 1.794-.424-.244-.853-.3-1.182-.11-.645.373-.665 1.546-.045 2.621.036.061.073.12.11.178a3.278 3.278 0 01.77-1.648.177.177 0 01.257-.01l3.815 3.815h.639a1.54 1.54 0 00-.224-.707c1.026-.125 1.798-.669 1.798-1.321 0-.48-.417-.9-1.046-1.14z"
                fill="#68CA44"
            />
            <Path
                d="M14.202 8.137a.293.293 0 00-.415 0l-1.926 1.926.415.415 1.926-1.927a.293.293 0 000-.414z"
                fill="#80D261"
            />
            <Path
                d="M9.797 12.449v.017l-.001.048h4.515L10.47 8.67a.215.215 0 00-.314.011 3.337 3.337 0 00-.821 2.31c.291.412.463.915.463 1.457z"
                fill="#fff"
            />
            <Path
                d="M12 12.513h1.356c.208-.086.403-.213.572-.382l-2.5-2.502a1.769 1.769 0 00.571 2.884z"
                fill="#FEDF74"
            />
            <Path
                d="M12 12.513h.664a1.769 1.769 0 01-.86-2.507l-.377-.377A1.769 1.769 0 0012 12.513z"
                fill="#FED402"
            />
            <Path
                d="M5.735 12.514l-.001-.065a1.534 1.534 0 113.066.065h1.035l.001-.065a2.569 2.569 0 10-5.137 0l.002.065h1.034z"
                fill="#FED2A4"
            />
            <Path
                d="M5.223 20h5.716a.597.597 0 00.227-.044 8.095 8.095 0 004.995-7.062.401.401 0 00-.402-.42H.403a.401.401 0 00-.402.42 8.095 8.095 0 004.994 7.062c.072.03.15.044.228.044z"
                fill="#D8ECFE"
            />
            <Path
                d="M1.743 14.367H.213a8.108 8.108 0 004.783 5.589c.072.03.149.044.227.044h1.53a.595.595 0 01-.228-.044 8.108 8.108 0 01-4.782-5.59z"
                fill="#C4E2FF"
            />
            <Path
                d="M15.759 12.474H.403a.401.401 0 00-.402.42c.025.504.097.997.212 1.473h15.736c.114-.476.186-.969.212-1.473a.401.401 0 00-.402-.42z"
                fill="#EAF6FF"
            />
            <Path
                d="M0 12.894c.026.504.098.997.213 1.473h1.53a8.086 8.086 0 01-.213-1.473.401.401 0 01.402-.42H.402a.401.401 0 00-.401.42z"
                fill="#D8ECFE"
            />
            <Path
                d="M13.161 1.846a.201.201 0 00.148-.22 1.882 1.882 0 00-.537-1.087 1.882 1.882 0 00-1.087-.537.201.201 0 00-.22.147l-.531 1.981c-.04.15.097.287.246.247l1.981-.531z"
                fill="#FE9901"
            />
            <Path
                d="M11.814 2.13l.514-1.92a1.886 1.886 0 00-.643-.208.201.201 0 00-.22.147l-.531 1.981c-.04.15.097.287.246.247l.628-.169a.2.2 0 01.006-.078z"
                fill="#FB8801"
            />
        </Svg>
    )
}

export default HealthComponent
