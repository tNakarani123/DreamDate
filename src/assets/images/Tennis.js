import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function TennisComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_322_225)">
                <Path
                    d="M19.034 9.365l-8.4-8.398c.198-.087.399-.164.6-.232l8.031 8.03a7.247 7.247 0 01-.231.6z"
                    fill="url(#paint0_linear_322_225)"
                />
                <Path
                    d="M17.688 11.417L8.583 2.312c.146-.135.296-.262.449-.383l9.039 9.039c-.12.153-.248.303-.383.449z"
                    fill="url(#paint1_linear_322_225)"
                />
                <Path
                    d="M16.302 12.597c-.17.112-.343.217-.519.313L7.09 4.217c.096-.176.2-.35.313-.52l8.899 8.9z"
                    fill="url(#paint2_linear_322_225)"
                />
                <Path
                    d="M13.926 13.618c-.234.054-.47.095-.707.124l-6.961-6.96c.029-.237.07-.473.124-.708l7.544 7.544z"
                    fill="url(#paint3_linear_322_225)"
                />
                <Path
                    d="M14.073.398L6.235 8.236a6.666 6.666 0 01-.026-.805L13.268.37c.27-.007.538.002.805.027z"
                    fill="url(#paint4_linear_322_225)"
                />
                <Path
                    d="M16.65 1.219l-9.594 9.593a6.031 6.031 0 01-.285-.547l9.33-9.33c.187.085.37.18.548.284z"
                    fill="url(#paint5_linear_322_225)"
                />
                <Path
                    d="M18.437 2.828L8.666 12.6a5.934 5.934 0 01-.458-.375l9.855-9.854c.133.147.258.3.374.457z"
                    fill="url(#paint6_linear_322_225)"
                />
                <Path
                    d="M19.487 5.176l-8.474 8.474a6.263 6.263 0 01-.655-.178l8.952-8.951c.07.215.13.433.177.655z"
                    fill="url(#paint7_linear_322_225)"
                />
                <Path
                    d="M19.455 8.089L11.911.545c.235-.054.471-.095.707-.125l6.962 6.962c-.03.236-.07.472-.125.707z"
                    fill="url(#paint8_linear_322_225)"
                />
                <Path
                    d="M18.434 10.465L9.535 1.566c.17-.113.343-.217.519-.313l8.693 8.693c-.096.176-.2.35-.313.519z"
                    fill="url(#paint9_linear_322_225)"
                />
                <Path
                    d="M17.255 11.85a7.62 7.62 0 01-.45.384l-9.038-9.04c.12-.153.248-.303.383-.448l9.105 9.104z"
                    fill="url(#paint10_linear_322_225)"
                />
                <Path
                    d="M15.203 13.196a7.332 7.332 0 01-.6.232l-8.03-8.03c.067-.203.144-.403.23-.601l8.4 8.4z"
                    fill="url(#paint11_linear_322_225)"
                />
                <Path
                    d="M15.479.69L6.527 9.642a6.243 6.243 0 01-.177-.655L14.824.513c.222.047.44.106.655.177z"
                    fill="url(#paint12_linear_322_225)"
                />
                <Path
                    d="M17.63 1.938l-9.856 9.854a5.958 5.958 0 01-.374-.457l9.772-9.772c.157.116.31.241.457.375z"
                    fill="url(#paint13_linear_322_225)"
                />
                <Path
                    d="M19.065 3.898l-9.33 9.33a6.027 6.027 0 01-.547-.284l9.593-9.593c.105.178.2.36.284.547z"
                    fill="url(#paint14_linear_322_225)"
                />
                <Path
                    d="M19.628 6.733L12.57 13.79a6.65 6.65 0 01-.805-.026l7.838-7.838c.025.267.034.536.026.806z"
                    fill="url(#paint15_linear_322_225)"
                />
                <Path
                    d="M17.726 11.889c2.87-2.87 3.047-7.36.397-10.012-2.65-2.65-7.142-2.472-10.011.397C6.166 4.219 5.458 6.91 6.03 9.268c.139.572.186 1.165.104 1.749a6.342 6.342 0 01-.596 1.894 7.794 7.794 0 01-1.502 2.082l.97.971a7.798 7.798 0 012.084-1.502 6.34 6.34 0 011.894-.596 4.663 4.663 0 011.748.104c2.358.572 5.049-.136 6.994-2.081zm-10.724 1.11c.148-.365.268-.733.357-1.1a6.3 6.3 0 00.742.742c-.367.09-.735.209-1.1.357zm3.71-.457l.002-.01-.064-.01A4.972 4.972 0 017.479 9.35l-.011-.064-.01.002c-.627-1.982-.069-4.35 1.624-6.043 2.334-2.335 5.955-2.513 8.07-.397 2.116 2.115 1.938 5.736-.396 8.07-1.693 1.693-4.062 2.251-6.044 1.624z"
                    fill="url(#paint16_linear_322_225)"
                />
                <Path
                    d="M17.632 2.369c-2.4-2.4-6.468-2.24-9.067.359-2.598 2.598-2.76 6.666-.359 9.066 2.4 2.4 6.468 2.24 9.066-.36 2.599-2.598 2.76-6.665.36-9.065zm-8.947 8.946c-2.115-2.116-1.937-5.736.397-8.07 2.334-2.335 5.955-2.513 8.07-.397 2.116 2.116 1.938 5.736-.396 8.07-2.335 2.335-5.955 2.512-8.07.397z"
                    fill="url(#paint17_linear_322_225)"
                />
                <Path
                    d="M7.715 12.285c-2.65-2.65-2.473-7.141.397-10.011 2.87-2.87 7.36-3.047 10.011-.397 2.65 2.651 2.473 7.142-.396 10.012-2.87 2.869-7.361 3.047-10.012.396zm9.438-9.437C15.037.732 11.417.91 9.083 3.245c-2.335 2.334-2.513 5.954-.397 8.07 2.115 2.115 5.736 1.937 8.07-.397 2.334-2.334 2.512-5.954.397-8.07z"
                    fill="url(#paint18_linear_322_225)"
                />
                <Path
                    d="M7.746 12.315c.115.114.234.223.355.326-.367.09-.735.209-1.099.357l-2.48 2.48.485.486a7.793 7.793 0 012.083-1.502 6.341 6.341 0 011.894-.596 4.667 4.667 0 011.748.104l.02.005a6.363 6.363 0 01-3.006-1.66z"
                    fill="url(#paint19_linear_322_225)"
                />
                <Path
                    d="M7.108 12.956l-.106.042.042-.106-1.08-1.08a6.696 6.696 0 01-.426 1.1 7.793 7.793 0 01-1.502 2.082l.97.97a7.793 7.793 0 012.084-1.502c.363-.178.732-.32 1.099-.425l-1.081-1.08z"
                    fill="url(#paint20_linear_322_225)"
                />
                <Path
                    d="M.739 20a.739.739 0 100-1.477.739.739 0 000 1.477z"
                    fill="url(#paint21_linear_322_225)"
                />
                <Path
                    d="M1.083 19.848l-.931-.93a.519.519 0 010-.735l4.02-4.019a.519.519 0 01.733 0l.93.93a.519.519 0 010 .735l-4.019 4.019a.519.519 0 01-.733 0z"
                    fill="url(#paint22_linear_322_225)"
                />
                <Path
                    d="M4.904 14.164a.519.519 0 00-.733 0L.968 17.367v2.366l.114.115a.519.519 0 00.734 0l4.02-4.02a.519.519 0 000-.733l-.932-.93z"
                    fill="url(#paint23_linear_322_225)"
                />
                <Path
                    d="M4.905 14.164a.519.519 0 00-.734 0l-1.887 1.887v3.329l3.551-3.551a.519.519 0 000-.734l-.93-.93z"
                    fill="url(#paint24_linear_322_225)"
                />
                <Path
                    d="M4.905 14.164a.519.519 0 00-.734 0l-.57.57v3.33l2.235-2.235a.519.519 0 000-.734l-.931-.93z"
                    fill="url(#paint25_linear_322_225)"
                />
                <Path
                    d="M4.917 14.176v2.572l.919-.919a.519.519 0 000-.734l-.919-.919z"
                    fill="url(#paint26_linear_322_225)"
                />
                <Path
                    d="M18.736 10.652a2.735 2.735 0 00-.976-1.026 6.55 6.55 0 01-1.005 1.292 6.393 6.393 0 01-3.047 1.715c.122.473.368.896.701 1.232a7.776 7.776 0 003.316-1.976c.386-.386.723-.801 1.01-1.237z"
                    fill="url(#paint27_linear_322_225)"
                />
                <Path
                    d="M13.622 17.207a2.707 2.707 0 100-5.415 2.707 2.707 0 000 5.415z"
                    fill="url(#paint28_linear_322_225)"
                />
                <Path
                    d="M10.915 14.5a2.707 2.707 0 105.33-.671H11c-.055.214-.084.439-.084.67z"
                    fill="url(#paint29_linear_322_225)"
                />
                <Path
                    d="M14.923 16.37c.248 0 .49-.024.723-.072.334-.375.565-.844.649-1.362-.198-.504-.591-1.255-1.175-1.255h-.018a2.75 2.75 0 01-1.108-.233 2.821 2.821 0 01-1.446-1.434 2.716 2.716 0 00-1.218 1.046 3.61 3.61 0 003.593 3.31z"
                    fill="url(#paint30_linear_322_225)"
                />
                <Path
                    d="M14.229 12.91c.283.123.578.184.884.183h.007c.389 0 .743.169 1.053.496a2.708 2.708 0 00-3.058-1.749c.23.472.623.856 1.114 1.07z"
                    fill="url(#paint31_linear_322_225)"
                />
                <Path
                    d="M10.945 14.095a2.707 2.707 0 003.815 2.861 4.202 4.202 0 01-3.815-2.861z"
                    fill="url(#paint32_linear_322_225)"
                />
                <Path
                    d="M10.945 14.095a2.707 2.707 0 003.815 2.861 4.202 4.202 0 01-3.815-2.861z"
                    fill="url(#paint33_linear_322_225)"
                />
                <Path
                    d="M14.923 16.37c.247 0 .488-.024.722-.072.334-.375.565-.844.649-1.362a3.97 3.97 0 00-.257-.539H11.71a3.608 3.608 0 003.214 1.974z"
                    fill="url(#paint34_linear_322_225)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_322_225"
                    x1={15.1596}
                    y1={4.8384}
                    x2={14.8264}
                    y2={5.17161}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_322_225"
                    x1={13.5142}
                    y1={6.48325}
                    x2={13.126}
                    y2={6.87152}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_322_225"
                    x1={11.8228}
                    y1={8.17468}
                    x2={11.4244}
                    y2={8.57304}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_322_225"
                    x1={10.1319}
                    y1={9.86603}
                    x2={9.73444}
                    y2={10.2635}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_322_225"
                    x1={9.73885}
                    y1={3.90043}
                    x2={10.1456}
                    y2={4.30719}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_322_225"
                    x1={11.3469}
                    y1={5.5087}
                    x2={11.9419}
                    y2={6.10371}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_322_225"
                    x1={13.0662}
                    y1={7.2276}
                    x2={13.6035}
                    y2={7.76489}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_322_225"
                    x1={14.8129}
                    y1={8.97422}
                    x2={15.3041}
                    y2={9.46543}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_322_225"
                    x1={16.0006}
                    y1={3.9974}
                    x2={15.6677}
                    y2={4.33024}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_322_225"
                    x1={14.3554}
                    y1={5.64251}
                    x2={14.0135}
                    y2={5.98445}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_322_225"
                    x1={12.6735}
                    y1={7.32451}
                    x2={12.2734}
                    y2={7.72459}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_322_225"
                    x1={11.0097}
                    y1={8.98814}
                    x2={10.6118}
                    y2={9.38597}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint12_linear_322_225"
                    x1={10.5239}
                    y1={4.68599}
                    x2={11.0695}
                    y2={5.23158}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint13_linear_322_225"
                    x1={12.2803}
                    y1={6.44214}
                    x2={12.7346}
                    y2={6.89647}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint14_linear_322_225"
                    x1={13.9807}
                    y1={8.14256}
                    x2={14.3699}
                    y2={8.53171}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint15_linear_322_225"
                    x1={15.5704}
                    y1={9.73224}
                    x2={16.0149}
                    y2={10.1767}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint16_linear_322_225"
                    x1={10.6087}
                    y1={1.24358}
                    x2={13.1317}
                    y2={17.7957}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FE9738" />
                    <Stop offset={1} stopColor="#EF4424" />
                </LinearGradient>
                <LinearGradient
                    id="paint17_linear_322_225"
                    x1={12.2322}
                    y1={17.6604}
                    x2={13.8126}
                    y2={-6.71034}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FE9738" />
                    <Stop offset={1} stopColor="#EF4424" />
                </LinearGradient>
                <LinearGradient
                    id="paint18_linear_322_225"
                    x1={13.0644}
                    y1={10.4296}
                    x2={13.4248}
                    y2={18.7196}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EF4424" stopOpacity={0} />
                    <Stop offset={1} stopColor="#883F2E" />
                </LinearGradient>
                <LinearGradient
                    id="paint19_linear_322_225"
                    x1={6.5333}
                    y1={14.1571}
                    x2={3.28942}
                    y2={13.7412}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EF4424" stopOpacity={0} />
                    <Stop offset={1} stopColor="#883F2E" />
                </LinearGradient>
                <LinearGradient
                    id="paint20_linear_322_225"
                    x1={6.1668}
                    y1={13.8335}
                    x2={4.95766}
                    y2={15.0426}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EF4424" stopOpacity={0} />
                    <Stop offset={1} stopColor="#883F2E" />
                </LinearGradient>
                <LinearGradient
                    id="paint21_linear_322_225"
                    x1={0.198157}
                    y1={19.2615}
                    x2={1.49769}
                    y2={19.2615}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FE9738" />
                    <Stop offset={1} stopColor="#EF4424" />
                </LinearGradient>
                <LinearGradient
                    id="paint22_linear_322_225"
                    x1={2.58205}
                    y1={16.5943}
                    x2={3.38597}
                    y2={17.3982}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#5A5A5A" />
                    <Stop offset={1} stopColor="#444" />
                </LinearGradient>
                <LinearGradient
                    id="paint23_linear_322_225"
                    x1={1.67903}
                    y1={18.016}
                    x2={-0.183717}
                    y2={19.4474}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#433F43" stopOpacity={0} />
                    <Stop offset={1} stopColor="#1A1A1A" />
                </LinearGradient>
                <LinearGradient
                    id="paint24_linear_322_225"
                    x1={3.08289}
                    y1={17.0117}
                    x2={1.25936}
                    y2={19.0117}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#433F43" stopOpacity={0} />
                    <Stop offset={1} stopColor="#1A1A1A" />
                </LinearGradient>
                <LinearGradient
                    id="paint25_linear_322_225"
                    x1={4.03384}
                    y1={16.0919}
                    x2={2.30835}
                    y2={18.1311}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#433F43" stopOpacity={0} />
                    <Stop offset={1} stopColor="#1A1A1A" />
                </LinearGradient>
                <LinearGradient
                    id="paint26_linear_322_225"
                    x1={5.56131}
                    y1={14.7814}
                    x2={3.75738}
                    y2={16.9578}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#433F43" stopOpacity={0} />
                    <Stop offset={1} stopColor="#1A1A1A" />
                </LinearGradient>
                <LinearGradient
                    id="paint27_linear_322_225"
                    x1={16.1944}
                    y1={11.798}
                    x2={15.3186}
                    y2={12.6477}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EF4424" stopOpacity={0} />
                    <Stop offset={1} stopColor="#883F2E" />
                </LinearGradient>
                <LinearGradient
                    id="paint28_linear_322_225"
                    x1={12.8041}
                    y1={13.5477}
                    x2={15.4512}
                    y2={16.6261}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EAF6FF" />
                    <Stop offset={1} stopColor="#B3DAFE" />
                </LinearGradient>
                <LinearGradient
                    id="paint29_linear_322_225"
                    x1={13.9985}
                    y1={15.7573}
                    x2={14.3906}
                    y2={17.0645}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#B3DAFE" stopOpacity={0} />
                    <Stop offset={1} stopColor="#7BACDF" />
                </LinearGradient>
                <LinearGradient
                    id="paint30_linear_322_225"
                    x1={13.7375}
                    y1={13.5291}
                    x2={14.11}
                    y2={15.9997}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FEF0AE" />
                    <Stop offset={1} stopColor="#FAC600" />
                </LinearGradient>
                <LinearGradient
                    id="paint31_linear_322_225"
                    x1={14.4289}
                    y1={11.9514}
                    x2={14.821}
                    y2={13.3436}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FEF0AE" />
                    <Stop offset={1} stopColor="#FAC600" />
                </LinearGradient>
                <LinearGradient
                    id="paint32_linear_322_225"
                    x1={11.3166}
                    y1={14.7672}
                    x2={13.7785}
                    y2={17.2291}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FEF0AE" />
                    <Stop offset={1} stopColor="#FAC600" />
                </LinearGradient>
                <LinearGradient
                    id="paint33_linear_322_225"
                    x1={12.8379}
                    y1={15.5345}
                    x2={12.8379}
                    y2={18.1035}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FEA613" stopOpacity={0} />
                    <Stop offset={1} stopColor="#E94444" />
                </LinearGradient>
                <LinearGradient
                    id="paint34_linear_322_225"
                    x1={13.9614}
                    y1={15.1765}
                    x2={13.8241}
                    y2={16.9216}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FEA613" stopOpacity={0} />
                    <Stop offset={1} stopColor="#E94444" />
                </LinearGradient>
                <ClipPath id="clip0_322_225">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default TennisComponent
