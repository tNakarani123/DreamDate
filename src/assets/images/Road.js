import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RoadComponent(props) {
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
                d="M.854 13.77l.56-.36a3.39 3.39 0 013.668 0l1.76 1.13.018-.005c.26-.084.508-.201.736-.348l1.558-.999a2.637 2.637 0 012.853 0l1.558 1c.05.032.104.064.165.098l.02.012 1.797-1.152a3.33 3.33 0 013.413-.114l.043-.021A9.57 9.57 0 009.785.859 9.57 9.57 0 00.808 13.753l.046.017z"
                fill="#FFF3DE"
            />
            <Path
                d="M7.598 5.078a.392.392 0 00-.391-.39H6.035a.392.392 0 00-.39.39c0 .215.175.39.39.39h1.172c.215 0 .39-.175.39-.39zM11.428 4.858c.297-.294.8-.55 1.397-.717h-.247a.39.39 0 110-.782h.32c-.394-.238-.723-.509-.947-.78H8.925a.39.39 0 000 .78h1.432a.39.39 0 110 .782H9.42a.39.39 0 100 .78h2.172a1.683 1.683 0 01-.164-.063zM5.761 3.633a.39.39 0 100-.781h-1.82a9.623 9.623 0 00-.893.78H5.76z"
                fill="#fff"
            />
            <Path
                d="M16.335 5.006l-.012-.01h-.015l-.016.002h-.034a.733.733 0 01-.332-.079l-.04-.02-.014.042a.74.74 0 01-.128.223l-.01.012.002.016c.01.125.013.255.011.387.328.84.62 2.136.493 3.985.38.144.672.47.77.87.307-2.525-.087-4.246-.533-5.311a4.479 4.479 0 01-.142-.117z"
                fill="#D88A55"
            />
            <Path
                d="M16.762 5.938h-.887c.058.178.113.374.162.585h.869a8.47 8.47 0 00-.144-.585zM17.015 7.148h-.858c.029.186.052.38.071.586h.852c-.017-.203-.04-.399-.065-.586zM16.267 8.945h.85c.003-.201.002-.397-.003-.586h-.85c.006.188.007.384.003.586z"
                fill="#C57A44"
            />
            <Path
                d="M16.03 3.553c.226-.373.42-.863.543-1.417.186-.846.157-1.63-.04-2.112A.039.039 0 0016.47.01c-.381.355-.736 1.055-.922 1.9-.181.822-.159 1.584.023 2.069a.743.743 0 01.457-.426z"
                fill="#81B823"
            />
            <Path
                d="M15.908 3.605c-.082-.463-.064-1.062.076-1.695.14-.634.374-1.187.644-1.573a1.917 1.917 0 00-.095-.313.039.039 0 00-.062-.014c-.381.355-.736 1.055-.922 1.9-.181.822-.159 1.584.023 2.069a.745.745 0 01.336-.374z"
                fill="#78A91F"
            />
            <Path
                d="M18.693 1.293c-.516.069-1.21.434-1.852 1.016-.497.452-.867.948-1.063 1.385a.737.737 0 01.959-.002c.268-.161.543-.365.81-.607.64-.582 1.07-1.238 1.189-1.745a.039.039 0 00-.043-.047z"
                fill="#97D729"
            />
            <Path
                d="M18.693 1.293c-.516.069-1.21.434-1.852 1.016-.497.452-.867.948-1.063 1.385a.737.737 0 01.618-.165c.2-.291.46-.59.77-.872.475-.432.98-.744 1.42-.904.069-.145.12-.284.15-.413a.039.039 0 00-.043-.047z"
                fill="#8BC727"
            />
            <Path
                d="M19.764 3.624c-.46-.242-1.238-.346-2.098-.242-.377.046-.73.127-1.039.232a.74.74 0 01.344.846c.259.009.535-.002.821-.037.86-.104 1.59-.39 1.98-.736a.039.039 0 00-.008-.063z"
                fill="#81B823"
            />
            <Path
                d="M19.764 3.624c-.46-.242-1.238-.346-2.098-.242-.377.046-.73.127-1.039.232a.74.74 0 01.312.35c.286-.09.604-.159.942-.2.636-.077 1.228-.04 1.679.083a1.85 1.85 0 00.212-.16.039.039 0 00-.008-.063z"
                fill="#78A91F"
            />
            <Path
                d="M19.289 6.145c-.236-.464-.81-.998-1.572-1.41a5.356 5.356 0 00-.733-.33.742.742 0 01-.692.592h-.025c.262.234.585.461.951.66.762.412 1.523.6 2.04.544a.039.039 0 00.03-.056z"
                fill="#97D729"
            />
            <Path
                d="M19.289 6.146a1.846 1.846 0 00-.14-.229c-.475-.043-1.06-.227-1.647-.544a5.241 5.241 0 01-.795-.527.737.737 0 01-.44.152c.262.234.585.46.951.659.762.412 1.523.6 2.04.545a.039.039 0 00.03-.056z"
                fill="#8BC727"
            />
            <Path
                d="M15.72 5.193a.736.736 0 01-.839.181c-.083.253-.152.53-.199.823-.137.855-.063 1.637.161 2.106.012.024.044.03.063.01.36-.376.675-1.095.812-1.95a5.02 5.02 0 00.052-1.23.76.76 0 01-.05.06z"
                fill="#97D729"
            />
            <Path
                d="M15.118 6.287c.05-.312.124-.606.215-.871a.748.748 0 01-.452-.042c-.083.253-.152.53-.199.823-.137.855-.063 1.636.161 2.106.012.024.044.03.063.01.082-.086.162-.19.238-.31-.113-.46-.13-1.067-.026-1.716z"
                fill="#8BC727"
            />
            <Path
                d="M14.433 4.726a.75.75 0 010-.076 5.21 5.21 0 00-.777.655c-.607.618-.998 1.298-1.087 1.81-.005.027.019.05.045.045.511-.098 1.184-.502 1.79-1.12.207-.21.387-.427.54-.643a.74.74 0 01-.51-.67z"
                fill="#81B823"
            />
            <Path
                d="M14.433 4.726a.75.75 0 010-.076 5.21 5.21 0 00-.777.655c-.607.618-.998 1.298-1.087 1.81-.005.027.019.05.045.045.138-.026.288-.076.445-.145.146-.48.51-1.06 1.034-1.595.138-.14.28-.27.422-.387a.74.74 0 01-.082-.307z"
                fill="#78A91F"
            />
            <Path
                d="M14.433 4.726a.737.737 0 01.582-.757c-.458-.096-1.05-.1-1.68.014-.853.153-1.566.482-1.935.849a.039.039 0 00.011.062c.474.215 1.257.275 2.109.121.33-.06.64-.145.917-.25l-.004-.039z"
                fill="#97D729"
            />
            <Path
                d="M14.433 4.726a.737.737 0 01.104-.413 5.167 5.167 0 01-1.017.289c-.692.124-1.338.109-1.81-.017-.12.079-.225.162-.31.246a.039.039 0 00.011.063c.474.215 1.257.274 2.109.121.33-.06.64-.145.917-.25l-.004-.039z"
                fill="#8BC727"
            />
            <Path
                d="M15.14 3.953a.74.74 0 01.332.062c-.27-.444-.865-.934-1.636-1.296-.784-.368-1.555-.513-2.069-.427a.039.039 0 00-.026.058c.261.45.866.95 1.65 1.318a4.84 4.84 0 001.353.42.736.736 0 01.395-.135z"
                fill="#81B823"
            />
            <Path
                d="M15.14 3.953a.721.721 0 01.332.062 1.926 1.926 0 00-.154-.216c-.463-.028-1.027-.177-1.6-.446-.646-.303-1.17-.698-1.481-1.08a2.107 2.107 0 00-.47.02.039.039 0 00-.026.057c.261.45.866.95 1.65 1.318a4.84 4.84 0 001.353.42.736.736 0 01.396-.135z"
                fill="#78A91F"
            />
            <Path
                d="M15.417 3.993c.039.014.076.03.112.05a.039.039 0 00.028-.021l.003-.012v-.002c.047-.518-.156-1.276-.582-2.03-.427-.753-.972-1.318-1.44-1.544a.039.039 0 00-.056.03c-.046.52.157 1.277.583 2.03.4.707.905 1.248 1.352 1.5z"
                fill="#97D729"
            />
            <Path
                d="M15.417 3.993c.039.014.076.03.112.05a.039.039 0 00.028-.021l.003-.012v-.002a1.892 1.892 0 00.001-.308 4.707 4.707 0 01-.948-1.205c-.348-.616-.548-1.234-.584-1.722a2.261 2.261 0 00-.492-.34.039.039 0 00-.055.032c-.046.518.157 1.276.583 2.03.4.706.905 1.247 1.352 1.498z"
                fill="#8BC727"
            />
            <Path
                d="M15.174 5.473a.78.78 0 100-1.56.78.78 0 000 1.56z"
                fill="#A44F3E"
            />
            <Path
                d="M15.698 5.192a.78.78 0 01-.64-1.271.78.78 0 10.72 1.264.765.765 0 01-.08.007z"
                fill="#883F2E"
            />
            <Path
                d="M16.259 5.037a.78.78 0 100-1.56.78.78 0 000 1.56z"
                fill="#A44F3E"
            />
            <Path
                d="M16.017 4.098a.779.779 0 01.264-.62h-.058a.78.78 0 10.552 1.363.78.78 0 01-.758-.743z"
                fill="#883F2E"
            />
            <Path
                d="M5.89 14.687c.343 0 .68-.055 1.001-.162l-1.789-1.148a3.434 3.434 0 00-3.709 0l-.585.376c.118.32.254.632.405.934H5.89zM15.27 14.688h3.086a9.492 9.492 0 00.646-1.677 3.378 3.378 0 00-3.477.102l-1.813 1.164c.474.269 1.01.41 1.557.41z"
                fill="#FEA613"
            />
            <Path
                d="M13.203 9.483H15.8c.026 0 .051.001.076.003a.723.723 0 00-.715-.617h-2.168l.21.614z"
                fill="#FD3581"
            />
            <Path
                d="M3.932 7.574h-.78a.984.984 0 00-.984.984v2.445c0 .543.44.984.984.984h.78V7.574z"
                fill="#596C76"
            />
            <Path
                d="M3.932 11.964a.984.984 0 01-.772-.961V8.558c0-.471.331-.864.772-.961v-.023h-.78a.984.984 0 00-.984.984v2.445c0 .543.44.984.984.984h.78v-.023z"
                fill="#465A61"
            />
            <Path
                d="M16.27 12.283c-.112 0-.202-.09-.202-.2v-.96c0-.11.09-.2.201-.2h.779l.037-.04v-.155c0-.709-.575-1.284-1.285-1.284h-2.568l-.998-2.919a.72.72 0 00-.681-.486h-6.94a.72.72 0 00-.72.72v6.21h13.18a.24.24 0 00.011-.071v-.576l-.029-.039h-.786z"
                fill="#FE5694"
            />
            <Path
                d="M5.602 6.039h-.989a.72.72 0 00-.72.72v6.21h.99V6.76a.72.72 0 01.72-.72zM6.676 10.98H6.34a.144.144 0 01-.144-.145v-.575c0-.08.065-.144.144-.144h.336c.08 0 .144.064.144.144v.575c0 .08-.065.144-.144.144z"
                fill="#FD3581"
            />
            <Path
                d="M9.698 9.444h2.572a.144.144 0 00.136-.19l-.82-2.398a.144.144 0 00-.136-.098H9.698a.144.144 0 00-.144.144v2.399c0 .08.064.143.144.143z"
                fill="#B3DAFE"
            />
            <Path
                d="M10.544 9.3V6.903c0-.08.064-.144.144-.144h-.99a.144.144 0 00-.144.144v2.399c0 .08.064.143.144.143h.99a.144.144 0 01-.144-.143z"
                fill="#8AC9FE"
            />
            <Path
                d="M5.333 6.758h-.576a.144.144 0 00-.144.144v2.399c0 .08.065.143.144.143h.576c.08 0 .144-.064.144-.143V6.902a.144.144 0 00-.144-.144zM6.34 9.444h2.35c.08 0 .144-.064.144-.143V6.902a.144.144 0 00-.143-.144H6.34a.144.144 0 00-.145.144v2.399c0 .08.065.143.144.143z"
                fill="#B3DAFE"
            />
            <Path
                d="M7.186 9.3V6.903c0-.08.065-.144.144-.144h-.99a.144.144 0 00-.144.144v2.399c0 .08.065.143.144.143h.99a.144.144 0 01-.144-.143z"
                fill="#8AC9FE"
            />
            <Path
                d="M10.033 10.98h-.335a.144.144 0 01-.144-.145v-.575c0-.08.064-.144.144-.144h.335c.08 0 .144.064.144.144v.575c0 .08-.064.144-.144.144z"
                fill="#FD3581"
            />
            <Path
                d="M17.084 13.554H3.845a.24.24 0 01-.24-.24v-.143a.24.24 0 01.24-.24h13.24a.24.24 0 01.24.24v.143a.24.24 0 01-.24.24z"
                fill="#E30256"
            />
            <Path
                d="M5.89 14.687c.606 0 1.196-.173 1.705-.5l1.043-.669a1.975 1.975 0 10-3.407 1.169h.66z"
                fill="#596C76"
            />
            <Path
                d="M5.89 14.687l.069-.001a1.975 1.975 0 011.077-3.289 1.975 1.975 0 00-1.805 3.29h.66z"
                fill="#465A61"
            />
            <Path
                d="M6.672 14.235a.898.898 0 100-1.795.898.898 0 000 1.795z"
                fill="#EAF6FF"
            />
            <Path
                d="M6.496 13.338c0-.368.221-.683.537-.822a.898.898 0 100 1.643.897.897 0 01-.537-.821z"
                fill="#D8ECFE"
            />
            <Path
                d="M12.006 13.188l1.558 1c.47.3 1.008.47 1.564.495a1.975 1.975 0 10-3.395-1.65c.093.047.185.098.273.155z"
                fill="#596C76"
            />
            <Path
                d="M12.006 13.188l.436.28a1.975 1.975 0 011.606-2.07 1.975 1.975 0 00-2.316 1.637c.094.045.186.096.274.153z"
                fill="#465A61"
            />
            <Path
                d="M13.564 14.187l.076.047.044.001a.897.897 0 10-.795-.481l.675.433z"
                fill="#EAF6FF"
            />
            <Path
                d="M13.564 14.187l.076.047a.915.915 0 00.405-.075.897.897 0 010-1.643.898.898 0 00-1.156 1.238l.675.433z"
                fill="#D8ECFE"
            />
            <Path
                d="M5.189 11.267a.576.576 0 100-1.151.576.576 0 000 1.151z"
                fill="#FE76A8"
            />
            <Path
                d="M17.085 10.883h-.816a.24.24 0 00-.24.24v.96c0 .132.108.24.24.24h.816v-1.44z"
                fill="#FED402"
            />
            <Path
                d="M13.586 14.155l-1.558-1a2.68 2.68 0 00-2.895 0l-1.558 1a3.119 3.119 0 01-1.684.494H1.193A9.57 9.57 0 009.785 20a9.57 9.57 0 008.592-5.351H15.27a3.12 3.12 0 01-1.684-.494z"
                fill="#FDB441"
            />
            <Path
                d="M2.783 16.953A9.544 9.544 0 009.785 20a9.544 9.544 0 007.002-3.047h-4.515a3.119 3.119 0 01-1.684-.494 5.566 5.566 0 00-6.012 0 3.119 3.119 0 01-1.684.494h-.109z"
                fill="#FEA613"
            />
            <Path
                d="M8.227 16.914h-.57a.293.293 0 100 .586h.582a.293.293 0 00.292-.311.3.3 0 00-.304-.275zM11.977 18.164h-.57a.293.293 0 100 .586h.582a.293.293 0 00.292-.311.3.3 0 00-.304-.275z"
                fill="#FDB441"
            />
            <Path
                d="M11.118 14.18h-.571a.293.293 0 100 .586h.582a.293.293 0 00.293-.312.3.3 0 00-.304-.274zM15.767 15.664h-.572a.293.293 0 100 .586h.583a.293.293 0 00.292-.311.3.3 0 00-.303-.275zM3.892 15.39H3.32a.293.293 0 100 .587h.583a.293.293 0 00.292-.312.3.3 0 00-.303-.274z"
                fill="#FEA613"
            />
        </Svg>
    )
}

export default RoadComponent