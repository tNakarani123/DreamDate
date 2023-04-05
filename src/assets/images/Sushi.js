import * as React from "react"
import Svg, {
    Path,
    G,
    Defs,
    LinearGradient,
    Stop,
    RadialGradient
} from "react-native-svg"

function SushiComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.924 7.36a1.952 1.952 0 001.845-1.891 51.747 51.747 0 00.018-2.101 2.87 2.87 0 00-2.749-2.83A93.004 93.004 0 009.045.457c-1.407 0-2.753.029-3.993.083a2.87 2.87 0 00-2.749 2.829 52.157 52.157 0 00.018 2.1A1.951 1.951 0 004.166 7.36c1.474.081 3.13.127 4.88.127s3.405-.046 4.878-.127z"
                fill="url(#paint0_linear_280_3287)"
            />
            <Path
                d="M15.79 3.97c0 .509-.007 1.01-.02 1.5a1.952 1.952 0 01-1.846 1.89c-1.473.08-3.129.126-4.879.126-1.381 0-2.703-.029-3.923-.08L2.303 4.588a54.495 54.495 0 010-1.22 2.87 2.87 0 012.75-2.83A92.933 92.933 0 019.044.457c1.408 0 2.754.029 3.993.083a2.87 2.87 0 012.749 2.829c.002.2.004.4.004.603z"
                fill="url(#paint1_linear_280_3287)"
            />
            <Path
                d="M2.325 5.55c.07.977.855 1.755 1.84 1.81 1.474.08 3.13.126 4.88.126s3.405-.046 4.879-.127a1.951 1.951 0 001.84-1.808H2.325z"
                fill="url(#paint2_linear_280_3287)"
            />
            <Path
                d="M14.708 4.905c-1.514-.57-3.495-.916-5.663-.916-2.169 0-4.15.345-5.664.916-.813.307-1.602-.612-1.602-1.862 0-.834.362-1.575.895-1.828C4.25.47 6.52 0 9.044 0c2.525 0 4.796.469 6.371 1.215.534.253.895.994.895 1.828 0 1.25-.789 2.169-1.602 1.862z"
                fill="url(#paint3_radial_280_3287)"
            />
            <Path
                d="M16.31 3.043c0 1.085-.595 1.921-1.284 1.921a.895.895 0 01-.318-.06 13.027 13.027 0 00-1.962-.555 18.5 18.5 0 00-3.701-.36c-2.169 0-4.15.346-5.664.916a.88.88 0 01-.367.058c-.078-1.258.411-2.641 1.388-3.804a2.677 2.677 0 011.62-.924C6.962.083 7.98 0 9.045 0c1.223 0 2.387.11 3.44.309 1.121.21 2.118.521 2.93.906.534.253.895.994.895 1.828z"
                fill="url(#paint4_linear_280_3287)"
            />
            <Path
                d="M15.415 1.215C13.84.47 11.57 0 9.045 0c-.179 0-.356.002-.532.007a1.964 1.964 0 00-1.448.685l-.007.009c-.92 1.095-1.408 2.387-1.396 3.585a18.761 18.761 0 013.383-.297c2.168 0 4.15.345 5.663.916.813.307 1.602-.612 1.602-1.862 0-.834-.36-1.575-.895-1.828z"
                fill="url(#paint5_linear_280_3287)"
            />
            <Path
                d="M15.415 1.216C14.157.619 12.455.2 10.533.056a.535.535 0 00-.45.184l-.002.002c-.964 1.146-1.453 2.507-1.391 3.75.117-.002.236-.003.354-.003 2.169 0 4.15.346 5.664.916.813.307 1.602-.612 1.602-1.862 0-.834-.361-1.574-.895-1.827z"
                fill="url(#paint6_linear_280_3287)"
            />
            <Path
                d="M15.415 1.215A11.396 11.396 0 0013.157.45a.375.375 0 00-.375.122c-.913 1.087-1.4 2.366-1.396 3.555 1.244.152 2.375.42 3.322.778.813.306 1.602-.613 1.602-1.862 0-.834-.361-1.575-.895-1.828z"
                fill="url(#paint7_linear_280_3287)"
            />
            <G opacity={0.6}>
                <Path
                    d="M8.522 6.224a.253.253 0 100-.506.253.253 0 000 .506z"
                    fill="url(#paint8_linear_280_3287)"
                />
                <Path
                    d="M7.792 5.83a.2.2 0 100-.4.2.2 0 000 .4z"
                    fill="url(#paint9_linear_280_3287)"
                />
                <Path
                    d="M8.47 5.179a.12.12 0 100-.241.12.12 0 000 .24z"
                    fill="url(#paint10_linear_280_3287)"
                />
                <Path
                    d="M9.595 5.338a.187.187 0 100-.374.187.187 0 000 .374z"
                    fill="url(#paint11_linear_280_3287)"
                />
                <Path
                    d="M9.048 5.533a.148.148 0 100-.296.148.148 0 000 .296z"
                    fill="url(#paint12_linear_280_3287)"
                />
                <Path
                    d="M9.067 4.82a.089.089 0 100-.179.089.089 0 000 .178z"
                    fill="url(#paint13_linear_280_3287)"
                />
            </G>
            <Path
                d="M17.614 13.168a1.952 1.952 0 001.845-1.89 51.747 51.747 0 00.018-2.101 2.87 2.87 0 00-2.75-2.83 93 93 0 00-3.992-.082c-1.408 0-2.754.03-3.993.083a2.87 2.87 0 00-2.75 2.829 51.934 51.934 0 00.019 2.1 1.951 1.951 0 001.845 1.892c1.473.08 3.129.126 4.879.126 1.75 0 3.405-.046 4.879-.127z"
                fill="url(#paint14_linear_280_3287)"
            />
            <Path
                d="M19.48 9.78c0 .508-.008 1.008-.022 1.498a1.952 1.952 0 01-1.845 1.89 90.24 90.24 0 01-4.88.127c-1.38 0-2.703-.029-3.923-.08l-2.818-2.819a54.263 54.263 0 010-1.22 2.87 2.87 0 012.749-2.829 92.927 92.927 0 013.993-.083c1.407 0 2.753.03 3.993.083a2.87 2.87 0 012.748 2.83c.003.2.004.4.004.603z"
                fill="url(#paint15_linear_280_3287)"
            />
            <Path
                d="M16.728 6.347a91.837 91.837 0 00-3.515-.081v7.027a89.035 89.035 0 004.4-.124 1.952 1.952 0 001.846-1.891 51.769 51.769 0 00.018-2.102 2.87 2.87 0 00-2.75-2.829z"
                fill="url(#paint16_linear_280_3287)"
            />
            <Path
                d="M6.015 11.36c.069.976.855 1.754 1.84 1.808 1.474.081 3.13.127 4.88.127s3.405-.046 4.878-.127a1.952 1.952 0 001.84-1.808H6.016z"
                fill="url(#paint17_linear_280_3287)"
            />
            <Path
                d="M18.398 10.714c-1.514-.57-3.495-.916-5.664-.916-2.168 0-4.15.345-5.663.916-.813.307-1.602-.612-1.602-1.862 0-.834.361-1.575.895-1.828 1.575-.746 3.846-1.215 6.37-1.215 2.525 0 4.796.469 6.37 1.215.534.254.896.994.896 1.828 0 1.25-.79 2.169-1.602 1.862z"
                fill="url(#paint18_radial_280_3287)"
            />
            <G opacity={0.6}>
                <Path
                    d="M16.928 11.32a.253.253 0 100-.507.253.253 0 000 .507z"
                    fill="url(#paint19_linear_280_3287)"
                />
                <Path
                    d="M16.131 11.146a.2.2 0 100-.4.2.2 0 000 .4z"
                    fill="url(#paint20_linear_280_3287)"
                />
                <Path
                    d="M16.38 11.918a.12.12 0 100-.24.12.12 0 000 .24z"
                    fill="url(#paint21_linear_280_3287)"
                />
                <Path
                    d="M17.368 12.532a.187.187 0 100-.374.187.187 0 000 .374z"
                    fill="url(#paint22_linear_280_3287)"
                />
                <Path
                    d="M17.041 11.994a.148.148 0 100-.295.148.148 0 000 .295z"
                    fill="url(#paint23_linear_280_3287)"
                />
                <Path
                    d="M16.694 12.491a.089.089 0 100-.177.089.089 0 000 .177z"
                    fill="url(#paint24_linear_280_3287)"
                />
            </G>
            <Path
                d="M19.104 7.024c-1.475-.7-3.56-1.154-5.892-1.21v3.99c1.98.046 3.783.381 5.185.91C19.21 11.02 20 10.1 20 8.852c0-.834-.361-1.575-.895-1.828z"
                fill="url(#paint25_linear_280_3287)"
            />
            <Path
                d="M11.976 13.251c0 .094.075.17.17.171a95.575 95.575 0 001.177 0 .17.17 0 00.17-.17v-7.36a.205.205 0 00-.2-.204 19.37 19.37 0 00-1.118 0 .205.205 0 00-.2.205v7.358z"
                fill="url(#paint26_linear_280_3287)"
            />
            <Path
                d="M12.145 18.596a1.952 1.952 0 001.845-1.89 51.742 51.742 0 00.018-2.102 2.87 2.87 0 00-2.749-2.83 93.08 93.08 0 00-3.993-.082c-1.407 0-2.754.03-3.993.083a2.87 2.87 0 00-2.749 2.829 52.06 52.06 0 00.018 2.101 1.952 1.952 0 001.845 1.89c1.473.082 3.129.127 4.879.127 1.75 0 3.405-.045 4.879-.126z"
                fill="url(#paint27_linear_280_3287)"
            />
            <Path
                d="M14.01 15.207c0 .508-.007 1.008-.021 1.498a1.952 1.952 0 01-1.845 1.891c-1.473.08-3.129.126-4.879.126-1.381 0-2.703-.028-3.923-.08L.523 15.824a54.408 54.408 0 010-1.22 2.87 2.87 0 012.749-2.829 92.907 92.907 0 013.993-.083c1.407 0 2.754.03 3.993.083a2.869 2.869 0 012.749 2.829c.002.2.003.4.003.603z"
                fill="url(#paint28_linear_280_3287)"
            />
            <Path
                d="M.546 16.787c.07.976.855 1.754 1.84 1.809 1.474.08 3.13.126 4.88.126s3.405-.045 4.878-.126a1.952 1.952 0 001.84-1.809H.547z"
                fill="url(#paint29_linear_280_3287)"
            />
            <Path
                d="M12.929 16.141c-1.514-.57-3.495-.916-5.664-.916-2.168 0-4.149.346-5.663.916C.79 16.448 0 15.53 0 14.28c0-.835.361-1.575.895-1.828 1.575-.747 3.846-1.216 6.37-1.216 2.525 0 4.796.469 6.37 1.216.535.253.896.993.896 1.828 0 1.249-.789 2.168-1.602 1.861z"
                fill="url(#paint30_radial_280_3287)"
            />
            <Path
                d="M14.53 14.28c0 1.085-.595 1.92-1.284 1.92a.894.894 0 01-.317-.059 13.035 13.035 0 00-1.963-.556 18.495 18.495 0 00-3.7-.36c-2.169 0-4.15.346-5.664.916a.88.88 0 01-.367.058c-.079-1.258.41-2.64 1.388-3.803a2.678 2.678 0 011.62-.925c.94-.152 1.959-.235 3.022-.235 1.224 0 2.387.11 3.44.31 1.122.21 2.118.52 2.93.905.534.254.896.994.896 1.829z"
                fill="url(#paint31_linear_280_3287)"
            />
            <Path
                d="M13.636 12.452c-1.575-.747-3.846-1.216-6.37-1.216-.18 0-.356.003-.532.007a1.964 1.964 0 00-1.455.694c-.921 1.096-1.409 2.388-1.396 3.586a18.758 18.758 0 013.383-.298c2.168 0 4.15.346 5.663.916.813.307 1.602-.612 1.602-1.861 0-.835-.361-1.575-.895-1.828z"
                fill="url(#paint32_linear_280_3287)"
            />
            <Path
                d="M13.636 12.452c-1.259-.597-2.961-1.015-4.882-1.16a.535.535 0 00-.451.184l-.002.002c-.963 1.146-1.452 2.507-1.39 3.75.117-.002.235-.003.354-.003 2.169 0 4.15.346 5.664.917.813.306 1.602-.613 1.602-1.862 0-.835-.362-1.575-.895-1.828z"
                fill="url(#paint33_linear_280_3287)"
            />
            <Path
                d="M13.636 12.451a11.394 11.394 0 00-2.259-.764.375.375 0 00-.373.12l-.001.002c-.914 1.086-1.4 2.365-1.397 3.555 1.245.151 2.375.42 3.323.777.813.307 1.602-.612 1.602-1.862 0-.834-.362-1.574-.895-1.828z"
                fill="url(#paint34_linear_280_3287)"
            />
            <G opacity={0.6}>
                <Path
                    d="M2.458 17.067a.253.253 0 100-.506.253.253 0 000 .506z"
                    fill="url(#paint35_linear_280_3287)"
                />
                <Path
                    d="M2.337 17.81a.2.2 0 100-.4.2.2 0 000 .4z"
                    fill="url(#paint36_linear_280_3287)"
                />
                <Path
                    d="M3.189 17.483a.12.12 0 100-.24.12.12 0 000 .24z"
                    fill="url(#paint37_linear_280_3287)"
                />
                <Path
                    d="M3.736 16.561a.187.187 0 100-.374.187.187 0 000 .374z"
                    fill="url(#paint38_linear_280_3287)"
                />
                <Path
                    d="M3.237 16.848a.148.148 0 100-.295.148.148 0 000 .295z"
                    fill="url(#paint39_linear_280_3287)"
                />
                <Path
                    d="M3.793 17.137a.089.089 0 100-.179.089.089 0 000 .179z"
                    fill="url(#paint40_linear_280_3287)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_280_3287"
                    x1={9.05302}
                    y1={4.35541}
                    x2={9.66486}
                    y2={7.38396}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F8F6FB" />
                    <Stop offset={1} stopColor="#EFDCFB" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_280_3287"
                    x1={9.21973}
                    y1={6.26031}
                    x2={8.82204}
                    y2={0.967998}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_280_3287"
                    x1={9.04465}
                    y1={6.28498}
                    x2={9.04465}
                    y2={9.04094}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <RadialGradient
                    id="paint3_radial_280_3287"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(8.71455 0 0 4.72451 9.07 5.96)"
                >
                    <Stop stopColor="#FF6359" />
                    <Stop offset={0.2327} stopColor="#FF6855" />
                    <Stop offset={0.5016} stopColor="#FF764A" />
                    <Stop offset={0.7872} stopColor="#FF8D37" />
                    <Stop offset={1} stopColor="#FFA325" />
                </RadialGradient>
                <LinearGradient
                    id="paint4_linear_280_3287"
                    x1={8.71221}
                    y1={2.10663}
                    x2={6.37193}
                    y2={-1.63318}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFA325" stopOpacity={0} />
                    <Stop offset={0.196} stopColor="#FFAE38" stopOpacity={0.196} />
                    <Stop offset={0.5939} stopColor="#FFCA6A" stopOpacity={0.594} />
                    <Stop offset={1} stopColor="#FFEAA2" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_280_3287"
                    x1={9.842}
                    y1={1.47984}
                    x2={8.24114}
                    y2={-1.04153}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFA325" stopOpacity={0} />
                    <Stop offset={0.196} stopColor="#FFAE38" stopOpacity={0.196} />
                    <Stop offset={0.5939} stopColor="#FFCA6A" stopOpacity={0.594} />
                    <Stop offset={1} stopColor="#FFEAA2" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_280_3287"
                    x1={11.5933}
                    y1={1.70738}
                    x2={9.87247}
                    y2={-1.00297}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFA325" stopOpacity={0} />
                    <Stop offset={0.196} stopColor="#FFAE38" stopOpacity={0.196} />
                    <Stop offset={0.5939} stopColor="#FFCA6A" stopOpacity={0.594} />
                    <Stop offset={1} stopColor="#FFEAA2" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_280_3287"
                    x1={13.2258}
                    y1={2.22292}
                    x2={11.7684}
                    y2={-0.0725674}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFA325" stopOpacity={0} />
                    <Stop offset={0.196} stopColor="#FFAE38" stopOpacity={0.196} />
                    <Stop offset={0.5939} stopColor="#FFCA6A" stopOpacity={0.594} />
                    <Stop offset={1} stopColor="#FFEAA2" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_280_3287"
                    x1={8.55256}
                    y1={5.60865}
                    x2={8.48182}
                    y2={6.80407}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_280_3287"
                    x1={7.81786}
                    y1={5.34868}
                    x2={7.76205}
                    y2={6.2924}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_280_3287"
                    x1={8.48816}
                    y1={4.89738}
                    x2={8.45449}
                    y2={5.46633}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_280_3287"
                    x1={9.36474}
                    y1={4.91297}
                    x2={9.98881}
                    y2={5.54101}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint12_linear_280_3287"
                    x1={8.85968}
                    y1={5.1893}
                    x2={9.35235}
                    y2={5.6851}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint13_linear_280_3287"
                    x1={8.94099}
                    y1={4.59754}
                    x2={9.23799}
                    y2={4.89645}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint14_linear_280_3287"
                    x1={12.7424}
                    y1={10.1645}
                    x2={13.3543}
                    y2={13.193}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F8F6FB" />
                    <Stop offset={1} stopColor="#EFDCFB" />
                </LinearGradient>
                <LinearGradient
                    id="paint15_linear_280_3287"
                    x1={12.9082}
                    y1={12.0689}
                    x2={12.5106}
                    y2={6.77659}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint16_linear_280_3287"
                    x1={14.1878}
                    y1={9.77959}
                    x2={13.1153}
                    y2={9.77959}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint17_linear_280_3287"
                    x1={12.7341}
                    y1={12.0941}
                    x2={12.7341}
                    y2={14.85}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <RadialGradient
                    id="paint18_radial_280_3287"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(8.71455 0 0 4.72451 12.759 11.703)"
                >
                    <Stop stopColor="#FFB800" />
                    <Stop offset={0.2231} stopColor="#FFBA05" />
                    <Stop offset={0.4808} stopColor="#FFC113" />
                    <Stop offset={0.7546} stopColor="#FFCC2A" />
                    <Stop offset={1} stopColor="#FFD945" />
                </RadialGradient>
                <LinearGradient
                    id="paint19_linear_280_3287"
                    x1={16.7566}
                    y1={11.4246}
                    x2={17.36}
                    y2={10.3898}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint20_linear_280_3287"
                    x1={16.0009}
                    y1={11.2345}
                    x2={16.4772}
                    y2={10.4176}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint21_linear_280_3287"
                    x1={16.3098}
                    y1={11.9816}
                    x2={16.597}
                    y2={11.4891}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint22_linear_280_3287"
                    x1={17.0468}
                    y1={12.4175}
                    x2={17.9142}
                    y2={12.2403}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint23_linear_280_3287"
                    x1={16.779}
                    y1={11.9074}
                    x2={17.4638}
                    y2={11.7676}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint24_linear_280_3287"
                    x1={16.5195}
                    y1={12.4453}
                    x2={16.9324}
                    y2={12.361}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint25_linear_280_3287"
                    x1={14.1103}
                    y1={8.29386}
                    x2={12.4889}
                    y2={8.29386}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F82814" stopOpacity={0} />
                    <Stop offset={1} stopColor="#C0272D" />
                </LinearGradient>
                <LinearGradient
                    id="paint26_linear_280_3287"
                    x1={11.8359}
                    y1={8.68004}
                    x2={13.9467}
                    y2={10.7603}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#464F00" />
                    <Stop offset={0.2883} stopColor="#454518" />
                    <Stop offset={0.7468} stopColor="#443738" />
                    <Stop offset={1} stopColor="#433244" />
                </LinearGradient>
                <LinearGradient
                    id="paint27_linear_280_3287"
                    x1={7.27369}
                    y1={15.5918}
                    x2={7.88553}
                    y2={18.6203}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F8F6FB" />
                    <Stop offset={1} stopColor="#EFDCFB" />
                </LinearGradient>
                <LinearGradient
                    id="paint28_linear_280_3287"
                    x1={7.43949}
                    y1={17.4966}
                    x2={7.04181}
                    y2={12.2043}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint29_linear_280_3287"
                    x1={7.26535}
                    y1={17.5213}
                    x2={7.26535}
                    y2={20.2773}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <RadialGradient
                    id="paint30_radial_280_3287"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(8.71455 0 0 4.72451 7.292 18.303)"
                >
                    <Stop stopColor="#F82814" />
                    <Stop offset={0.4249} stopColor="#F82A16" />
                    <Stop offset={0.614} stopColor="#F9301D" />
                    <Stop offset={0.7563} stopColor="#FA3B2A" />
                    <Stop offset={0.8752} stopColor="#FC4A3C" />
                    <Stop offset={0.9784} stopColor="#FE5E53" />
                    <Stop offset={1} stopColor="#FF6359" />
                </RadialGradient>
                <LinearGradient
                    id="paint31_linear_280_3287"
                    x1={6.79001}
                    y1={13.1357}
                    x2={4.97711}
                    y2={10.2804}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F82814" stopOpacity={0} />
                    <Stop offset={0.1947} stopColor="#F83B26" stopOpacity={0.195} />
                    <Stop offset={0.5899} stopColor="#F96D56" stopOpacity={0.59} />
                    <Stop offset={1} stopColor="#FAA68E" />
                </LinearGradient>
                <LinearGradient
                    id="paint32_linear_280_3287"
                    x1={8.27494}
                    y1={13.0505}
                    x2={6.67408}
                    y2={10.5292}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F82814" stopOpacity={0} />
                    <Stop offset={0.1947} stopColor="#F83B26" stopOpacity={0.195} />
                    <Stop offset={0.5899} stopColor="#F96D56" stopOpacity={0.59} />
                    <Stop offset={1} stopColor="#FAA68E" />
                </LinearGradient>
                <LinearGradient
                    id="paint33_linear_280_3287"
                    x1={9.88952}
                    y1={13.0626}
                    x2={8.54521}
                    y2={10.9454}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F82814" stopOpacity={0} />
                    <Stop offset={0.1947} stopColor="#F83B26" stopOpacity={0.195} />
                    <Stop offset={0.5899} stopColor="#F96D56" stopOpacity={0.59} />
                    <Stop offset={1} stopColor="#FAA68E" />
                </LinearGradient>
                <LinearGradient
                    id="paint34_linear_280_3287"
                    x1={11.4465}
                    y1={13.4593}
                    x2={10.445}
                    y2={11.8819}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F82814" stopOpacity={0} />
                    <Stop offset={0.1947} stopColor="#F83B26" stopOpacity={0.195} />
                    <Stop offset={0.5899} stopColor="#F96D56" stopOpacity={0.59} />
                    <Stop offset={1} stopColor="#FAA68E" />
                </LinearGradient>
                <LinearGradient
                    id="paint35_linear_280_3287"
                    x1={2.81605}
                    y1={16.9891}
                    x2={1.78121}
                    y2={16.3857}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint36_linear_280_3287"
                    x1={2.62544}
                    y1={17.7447}
                    x2={1.80853}
                    y2={17.2683}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint37_linear_280_3287"
                    x1={3.3725}
                    y1={17.4363}
                    x2={2.87999}
                    y2={17.1491}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint38_linear_280_3287"
                    x1={3.80313}
                    y1={16.6942}
                    x2={3.62593}
                    y2={15.8268}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint39_linear_280_3287"
                    x1={3.29253}
                    y1={16.9619}
                    x2={3.15269}
                    y2={16.2771}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
                <LinearGradient
                    id="paint40_linear_280_3287"
                    x1={3.83044}
                    y1={17.2217}
                    x2={3.74611}
                    y2={16.8088}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#EFDCFB" stopOpacity={0} />
                    <Stop offset={0.0287} stopColor="#E9D6F7" stopOpacity={0.029} />
                    <Stop offset={0.2203} stopColor="#C5B5DE" stopOpacity={0.22} />
                    <Stop offset={0.4138} stopColor="#AA9BCB" stopOpacity={0.414} />
                    <Stop offset={0.6078} stopColor="#9688BD" stopOpacity={0.608} />
                    <Stop offset={0.8028} stopColor="#8A7DB5" stopOpacity={0.803} />
                    <Stop offset={1} stopColor="#8679B2" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SushiComponent
