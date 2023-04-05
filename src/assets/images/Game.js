import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function GameComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.52 4.538H9.48v-1.38h-.505c-.861 0-1.586-.679-1.607-1.54A1.58 1.58 0 018.942 0h.004a1.58 1.58 0 011.575 1.579v.537h4.808a.52.52 0 010 1.042H10.52v1.38zM8.945 1.042a.538.538 0 00.002 1.074h.533v-.537a.538.538 0 00-.535-.537z"
                fill="url(#paint0_linear_88_330)"
            />
            <Path
                d="M11.086 5.075H8.914v-.55c0-.29.235-.524.525-.524h1.122c.29 0 .525.235.525.525v.549z"
                fill="url(#paint1_linear_88_330)"
            />
            <Path
                d="M14.192 7.096H5.808V5.382c0-.395.32-.715.715-.715h6.954c.395 0 .715.32.715.715v1.714z"
                fill="url(#paint2_linear_88_330)"
            />
            <Path
                d="M19.873 13.865a3.128 3.128 0 01-3.005 4.017 3.12 3.12 0 01-2.208-.912l-.006-.005-.002-.002-.022-.023-.063-.061-.063-.06a2.084 2.084 0 00-.092-.086l-.016-.013-.004-.005-.05-.045a5.255 5.255 0 00-.204-.173l-.016-.013-.003-.002-.001-.001-.002-.002-.032-.025-.008-.007A3.243 3.243 0 0014 16.39l-.019-.015-.013-.01a.095.095 0 00-.009-.007l-.057-.043-.025-.018-.046-.034-.013-.009c-.02-.015-.04-.03-.062-.044l-.03-.02a.02.02 0 00-.008-.006l-.01-.008h-.001a7.419 7.419 0 00-.153-.102l-.04-.026a.875.875 0 00-.047-.028.404.404 0 00-.018-.012l-.037-.023a1.295 1.295 0 00-.058-.034 1.193 1.193 0 00-.056-.034l-.005-.003-.012-.006-.02-.012a4.6 4.6 0 00-.125-.07l-.002-.001a5.616 5.616 0 00-.13-.068l-.075-.038a2.752 2.752 0 00-.064-.032l-.005-.002a1.537 1.537 0 00-.049-.024l-.003-.001-.037-.018-.08-.036a.47.47 0 00-.037-.016l-.031-.014-.005-.002h-.002l-.018-.01-.034-.014a.232.232 0 01-.016-.006l-.008-.004-.038-.015a.441.441 0 00-.049-.02 1.695 1.695 0 00-.055-.022l-.035-.014-.01-.004-.102-.037-.018-.007a7.616 7.616 0 00-.132-.046l-.054-.018a7.072 7.072 0 00-.096-.03l-.064-.02-.099-.029-.022-.006-.095-.025-.003-.001h-.002a4.33 4.33 0 00-.1-.026l-.063-.015-.09-.02a2.344 2.344 0 00-.084-.018c-.021-.005-.042-.01-.063-.013-.036-.008-.072-.014-.109-.02a6.274 6.274 0 00-.43-.062l-.09-.01a5.253 5.253 0 00-.313-.022 4.114 4.114 0 00-.143-.006h-.029l-.15-.003h-.004c-.033 0-.066 0-.099.002H9.83l-.016.001h-.009l-.043.002a1.684 1.684 0 00-.12.006H9.62l-.014.001-.069.005h-.009l-.014.001-.04.004-.082.006-.01.001-.036.004-.074.008H9.27l-.011.001a4.284 4.284 0 00-.213.027l-.003.001a.785.785 0 00-.051.008H8.99a2.777 2.777 0 00-.04.006l-.047.008-.122.022-.063.012a1.395 1.395 0 00-.081.017l-.027.005-.024.006-.026.005a.07.07 0 00-.01.002l-.04.01-.029.006-.013.003-.047.012-.012.003-.059.015-.015.004c-.002 0-.005 0-.007.002-.057.014-.112.03-.168.046l-.02.006-.006.001-.016.006h-.001l-.019.005-.09.028-.047.015c-.033.01-.066.022-.098.033l-.028.01-.024.008-.023.008a1.286 1.286 0 00-.106.04l-.043.015-.027.01-.047.02a.445.445 0 00-.06.024 1.281 1.281 0 00-.087.036c-.006.003-.014.005-.02.009l-.018.007-.01.005-.02.008a.562.562 0 00-.023.01l-.037.017a5.592 5.592 0 00-.107.05l-.029.014-.015.007a.639.639 0 00-.063.03.121.121 0 00-.019.01.014.014 0 00-.006.004c-.008.003-.017.007-.025.012l-.044.023a5.46 5.46 0 00-.3.165l-.023.013-.043.025-.018.012a.009.009 0 00-.004.002c-.007.004-.013.009-.02.012l-.017.01a4.299 4.299 0 00-.376.25l-.014.01a4.782 4.782 0 00-.149.11v.002a5.398 5.398 0 00-.126.098l-.02.016a5.702 5.702 0 00-.378.33l-.06.058-.059.058-.006.006-.022.022-.014.016a1.66 1.66 0 00-.036.036l.016-.017a3.132 3.132 0 01-5.148-3.25l1.593-4.932a9.307 9.307 0 01.079-.235l.007-.02.044-.114v-.002a2.527 2.527 0 01.053-.124 3.587 3.587 0 01.233-.454A4.398 4.398 0 015.972 5.69h8.055a4.398 4.398 0 014.214 3.125l.22.683 1.357 4.197.005.015.001.004.046.14c0 .004.002.007.003.011z"
                fill="url(#paint3_linear_88_330)"
            />
            <Path
                d="M7.685 15.45c-.015.005-.03.01-.045.017a.249.249 0 00-.025.01h-.003l-.047.02-.031.012a1.644 1.644 0 00-.115.047l-.022.01a.185.185 0 00-.018.007l-.09.04a3.007 3.007 0 00-.106.05l-.005.002a.26.26 0 00-.023.011l-.016.008-.062.03-.02.01-.031.016-.044.022-.01.006a5.528 5.528 0 00-.29.16l-.023.013a3.2 3.2 0 00-.085.051l-.017.01-.007.005-.019.011a7.904 7.904 0 00-.35.235l-.013.01-.046.032-.103.078h-.001a5.455 5.455 0 00-.125.099l-.021.016a5.115 5.115 0 00-.215.182l-.05.045a5.508 5.508 0 00-.113.104l-.096.091a.092.092 0 01-.007.009l-.022.02a2.62 2.62 0 00-.053.055l-.003.003a3.132 3.132 0 01-5.148-3.25l1.593-4.932a9.309 9.309 0 01.079-.235l.007-.02.044-.114v-.002a2.533 2.533 0 01.053-.124 4.236 4.236 0 01.233-.454c-.225.5-.35 1.053-.35 1.636a3.971 3.971 0 003.667 3.963c.043.004.087.006.131.008a3.824 3.824 0 00.802-.046 3.95 3.95 0 00.42-.09l.84 2.112z"
                fill="url(#paint4_linear_88_330)"
            />
            <Path
                d="M18.515 17.414a2.959 2.959 0 01-.445.229c-.37.154-.776.239-1.202.239a3.12 3.12 0 01-2.208-.912l-.006-.005-.002-.002-.022-.023-.063-.061-.063-.06-.056-.052a1.618 1.618 0 00-.056-.052l-.05-.045a3.952 3.952 0 00-.204-.172l-.017-.014-.002-.002-.001-.001a.005.005 0 01-.002-.002l-.032-.025a3.062 3.062 0 00-.075-.059l-.027-.021-.014-.01a.09.09 0 00-.01-.007l-.056-.043a1.252 1.252 0 00-.07-.052l-.014-.009-.062-.044-.03-.02a.019.019 0 00-.008-.006l-.011-.008a6.462 6.462 0 00-.153-.102l-.04-.026-.046-.028v-.001a.21.21 0 01-.019-.01c-.012-.009-.025-.016-.037-.024a5.46 5.46 0 00-.115-.068l-.004-.003-.012-.006-.02-.012a4.16 4.16 0 00-.257-.14l-.075-.037-.064-.032-.005-.002a1.798 1.798 0 00-.05-.024l-.04-.02-.08-.035a.583.583 0 00-.036-.016l-.034-.016-.022-.01a2.095 2.095 0 01-.034-.014l-.016-.006-.009-.004a.926.926 0 00-.058-.024c-.01-.004-.019-.008-.028-.01a2.4 2.4 0 00-.056-.023l-.034-.014a.063.063 0 01-.01-.004l-.039-.015.84-2.112a3.984 3.984 0 00.855.135l.026.001a3.384 3.384 0 00.342 0A3.973 3.973 0 0018.164 9.2a3.96 3.96 0 00-.34-1.334 5.071 5.071 0 01.182.342 3.49 3.49 0 01.111.255c.014.032.026.065.038.098.031.083.06.168.086.254l.22.683 1.357 4.197.005.014.046.146.004.01a3.128 3.128 0 01-1.358 3.549z"
                fill="url(#paint5_linear_88_330)"
            />
            <Path
                d="M19.873 13.865a3.128 3.128 0 01-1.803 3.778l-4.094-4.094-.084-.084-1.196-1.196-.492-.492-.004-.004a3.159 3.159 0 01-.472-.525 2.946 2.946 0 01-.243-.407l-.032-.066-.02-.046a2.39 2.39 0 01-.023-.05l-.023-.057a3.04 3.04 0 01-.167-.585c-.006-.028-.01-.057-.014-.086a2.941 2.941 0 01-.033-.449 3.025 3.025 0 013.131-3.023 1.977 1.977 0 01.28.022 2.537 2.537 0 01.284.05l.067.017a3.13 3.13 0 01.318.099l.065.025a1.676 1.676 0 01.143.06l.01.005.065.032c.026.012.05.025.076.039l.065.035a3 3 0 01.393.264c.144.113.277.24.399.378l.008.008L18.164 9.2l.297.297 1.357 4.197.005.014.046.146.004.01z"
                fill="url(#paint6_linear_88_330)"
            />
            <Path
                d="M17.223 9.502a3.025 3.025 0 11-6.05 0 3.025 3.025 0 016.05 0z"
                fill="url(#paint7_linear_88_330)"
            />
            <Path
                d="M14.513 13.951l3.65 3.651a3.123 3.123 0 01-1.295.28 3.12 3.12 0 01-2.208-.912l.04.042-.046-.047-.001-.002-.023-.023a6.486 6.486 0 00-.182-.173l-.051-.047-.005-.005-.05-.045a8.037 8.037 0 00-.204-.172l-.016-.014-.003-.002-.001-.001-.002-.002-.032-.025-.008-.007a3.07 3.07 0 00-.067-.052l-.027-.021a.405.405 0 00-.023-.017c-.018-.015-.038-.029-.057-.043a1.352 1.352 0 00-.084-.061l-.062-.044-.03-.02a6.91 6.91 0 00-.172-.115c-.025-.017-.05-.033-.074-.047a.444.444 0 00-.03-.02l-.038-.023a1.188 1.188 0 00-.058-.034 1.2 1.2 0 00-.056-.034l-.005-.003-.011-.006-.02-.012a6.174 6.174 0 00-.126-.07l-.002-.001a5.627 5.627 0 00-.204-.106l-.065-.032a5.067 5.067 0 00-.246-.113h-.003c-.017-.01-.035-.016-.052-.024l-.016-.006-.008-.004a1.485 1.485 0 00-.059-.024l-.028-.011-.055-.022-.035-.014-.01-.004c-.034-.012-.068-.026-.102-.037a.428.428 0 00-.018-.007l-.132-.046a5.692 5.692 0 00-.15-.049l-.064-.02-.099-.028-.022-.006a2.558 2.558 0 00-.095-.025l-.003-.001h-.002a2.948 2.948 0 00-.163-.041 2.538 2.538 0 00-.174-.038l-.063-.014a8.573 8.573 0 00-.296-.05 6.098 6.098 0 00-.243-.031l-.09-.01a5.483 5.483 0 00-.313-.022 4.522 4.522 0 00-.143-.006h-.029l-.15-.003h-.004c-.033 0-.066 0-.099.002h-.07l-.015.001h-.01l-.093.004-.038.002c-.011 0-.022 0-.032.002H9.62a1.896 1.896 0 00-.083.006H9.53l-.015.001a5.38 5.38 0 01-.132.011 1.478 1.478 0 00-.11.012H9.27l-.012.001-.044.005a4.56 4.56 0 00-.125.017l-.013.001-.01.001-.021.004h-.002a1.38 1.38 0 00-.052.008l-.041.006a1.646 1.646 0 00-.048.008l-.122.022-.063.012a1.205 1.205 0 00-.081.017l-.027.005a.28.28 0 00-.024.006l-.025.005-.011.002-.04.01-.028.006-.014.003-.047.012c-.004.001-.008.001-.011.003l-.06.015-.015.004-.007.001c-.057.015-.112.03-.168.047l-.02.006-.006.001-.017.006-.018.005a2.56 2.56 0 00-.09.028l-.047.016c-.033.01-.067.02-.1.032l-.027.01a1.328 1.328 0 00-.046.016 1.805 1.805 0 00-.064.023l-.023.008a.418.418 0 00-.02.008l-.023.01a3.076 3.076 0 00-.094.035l-.031.013-1.394-1.393-.125-.126-2.213-2.213-.004-.004a2.505 2.505 0 01-.114-.106h-.001a2.824 2.824 0 01-.357-.418 3.066 3.066 0 01-.244-.408l-.032-.066a1.517 1.517 0 01-.042-.096l-.024-.056a3.11 3.11 0 01-.103-.305l-.02-.079a3.592 3.592 0 01-.03-.128l-.014-.074a2.014 2.014 0 01-.022-.147 3.025 3.025 0 013.449-3.38l.025.004.046.008a2.83 2.83 0 01.373.09h.007a3.518 3.518 0 01.156.055l.065.025a1.862 1.862 0 01.152.065l.066.032.076.039.064.035a2.532 2.532 0 01.136.081 3.035 3.035 0 01.656.56l.008.009 3.507 3.507 1.1 1.099.166.166 1.17 1.17.018.018.478.478z"
                fill="url(#paint8_linear_88_330)"
            />
            <Path
                d="M8.82 9.502a3.025 3.025 0 11-6.05 0 3.025 3.025 0 016.05 0z"
                fill="url(#paint9_linear_88_330)"
            />
            <Path
                d="M8.71 10.22L6.17 7.68a.457.457 0 00-.812.29v1.095H4.264a.458.458 0 00-.29.812l2.538 2.54a2.981 2.981 0 002.199-2.197z"
                fill="url(#paint10_linear_88_330)"
            />
            <Path
                d="M7.369 9.065H6.274V7.97a.458.458 0 10-.916 0v1.094H4.264a.458.458 0 100 .916h1.094v1.094a.458.458 0 00.916 0V9.981H7.37a.458.458 0 100-.916z"
                fill="url(#paint11_linear_88_330)"
            />
            <Path
                d="M18.515 17.414a2.951 2.951 0 01-.445.229c-.37.154-.776.239-1.202.239a3.12 3.12 0 01-2.168-.87l-.046-.047-.002-.002-.023-.023a6.779 6.779 0 00-.18-.173l-.053-.047-.004-.005-.05-.045a6.752 6.752 0 00-.204-.172l-.017-.014-.002-.002-.002-.001-.002-.002-.031-.025-.008-.007A3.243 3.243 0 0014 16.39l-.018-.015-.014-.01a.095.095 0 00-.01-.007l-.056-.043a1.349 1.349 0 00-.071-.052l-.013-.009-.062-.044-.03-.02-.019-.014a7.286 7.286 0 00-.154-.102l-.073-.046a.054.054 0 00-.013-.008l-.018-.012a6.252 6.252 0 00-.156-.094l-.012-.006-.02-.012a4.948 4.948 0 00-.125-.07l-.003-.001a5.63 5.63 0 00-.128-.068l-.076-.038-.064-.032a1.537 1.537 0 00-.054-.026l-.003-.001a6.08 6.08 0 00-.19-.086h-.002c-.017-.009-.035-.016-.052-.024l-.016-.006-.008-.004-.038-.015a3.6 3.6 0 00-.104-.042l-.036-.014a.099.099 0 01-.01-.004l-.101-.037-.018-.007a10.795 10.795 0 00-.132-.046l-.054-.018a5.91 5.91 0 00-.096-.03l-.064-.02-.121-.035a3.018 3.018 0 00-.095-.025l-.004-.001h-.001a2.948 2.948 0 00-.164-.041l-.088-.02a2.578 2.578 0 00-.086-.018l-.062-.013c-.036-.008-.073-.014-.109-.02l-.052-.01a5.716 5.716 0 00-.378-.052l-.091-.01a5.965 5.965 0 00-.312-.022 4.253 4.253 0 00-.143-.006h-.029c-.05-.002-.1-.002-.15-.002h-.127l-.036.002H9.813l-.052.002-.05.002-.039.002h-.02l-.032.003h-.014a2.648 2.648 0 00-.069.005h-.009l-.014.002a3.595 3.595 0 01-.04.003l-.082.006c-.003 0-.007 0-.01.002a.603.603 0 00-.036.003l-.075.008-.012.002c-.015 0-.03.003-.044.005a5.08 5.08 0 00-.125.016c-.005 0-.009 0-.013.002h-.01a2.1 2.1 0 00-.021.004h-.003l-.052.008a4.353 4.353 0 00-.088.014l-.122.022-.064.012a1.252 1.252 0 00-.08.017l-.028.005-.024.006-.025.005-.01.002-.04.01-.029.006a.458.458 0 01-.013.003l-.047.012-.012.003-.059.015-.015.004-.007.002c-.057.014-.112.03-.168.046l-.02.006-.023.007-.019.005a2.79 2.79 0 00-.137.044 2.807 2.807 0 00-.173.059 1.34 1.34 0 00-.064.022l-.022.009a.252.252 0 00-.02.007l-.023.01a.716.716 0 00-.044.016l-.05.02a.53.53 0 00-.031.012l-.028.012a2.743 2.743 0 00-.087.036l-.022.009-.017.007-.01.005-.043.019a5.197 5.197 0 00-.144.066l-.029.014-.014.007-.037.018a1.476 1.476 0 00-.052.026 5.974 5.974 0 00-.291.155l-.078.045-.023.013-.061.037-.004.002-.02.013-.017.01a.084.084 0 01-.008.004l-.018.012-.076.048-.324-.325-.004-.003-.018-.017a.988.988 0 01-.057-.053l-.035-.037a2.227 2.227 0 01-.224-.28c-.01-.015-.02-.029-.028-.044a1.966 1.966 0 01-.164-.323 2.725 2.725 0 01-.035-.098l-.016-.05-.015-.05a1.31 1.31 0 01-.026-.103v-.001a1.305 1.305 0 01-.01-.051l-.007-.035-.005-.033a.804.804 0 01-.012-.091.261.261 0 01-.003-.026c-.001-.013-.003-.026-.003-.04a1.924 1.924 0 01-.006-.098v-.055a1.995 1.995 0 01.347-1.125 1.99 1.99 0 011.798-.86l.04.003.025.003a.925.925 0 01.091.012.747.747 0 01.033.005l.035.007.037.007.035.008a.565.565 0 01.065.016l.03.008c.03.009.06.018.088.028l.03.01a1.85 1.85 0 01.435.217 1.117 1.117 0 01.125.09c.015.01.03.023.044.035.025.02.049.041.072.062l.002.002.073.07.036.038.035.037.003.004 1.575 1.574.059.055v-.002a2.445 2.445 0 01-.018-.159l-.004-.063v-.006a1.991 1.991 0 012.14-2.062h.003l.04.004c.009 0 .017.002.025.003a.973.973 0 01.053.006l.032.005a1.668 1.668 0 01.217.046c.038.01.076.02.113.034l.04.014c.02.006.039.014.058.021l.088.038.008.003.046.023.047.023c.031.016.062.033.092.051l.042.026a1.118 1.118 0 01.169.118c.015.01.029.023.044.035a4.689 4.689 0 01.073.064l.074.07.035.038.035.037.004.004 4.483 4.483z"
                fill="url(#paint12_linear_88_330)"
            />
            <Path
                d="M9.446 14.254a1.991 1.991 0 11-3.982 0 1.991 1.991 0 013.982 0z"
                fill="url(#paint13_linear_88_330)"
            />
            <Path
                d="M8.919 14.254a1.464 1.464 0 11-2.928 0 1.464 1.464 0 012.928 0z"
                fill="url(#paint14_linear_88_330)"
            />
            <Path
                d="M9.443 14.374l-1.028-1.027a1.322 1.322 0 10-1.868 1.868l1.028 1.027a1.991 1.991 0 001.868-1.868z"
                fill="url(#paint15_linear_88_330)"
            />
            <Path
                d="M8.777 14.254a1.322 1.322 0 11-2.644 0 1.322 1.322 0 012.644 0z"
                fill="url(#paint16_linear_88_330)"
            />
            <Path
                d="M14.536 14.254a1.992 1.992 0 11-3.983 0 1.992 1.992 0 013.983 0z"
                fill="url(#paint17_linear_88_330)"
            />
            <Path
                d="M14.008 14.254a1.464 1.464 0 11-2.928 0 1.464 1.464 0 012.928 0z"
                fill="url(#paint18_linear_88_330)"
            />
            <Path
                d="M14.532 14.374l-1.027-1.027a1.322 1.322 0 10-1.868 1.868l1.027 1.027a1.991 1.991 0 001.868-1.868z"
                fill="url(#paint19_linear_88_330)"
            />
            <Path
                d="M13.866 14.254a1.322 1.322 0 11-2.643 0 1.322 1.322 0 012.643 0z"
                fill="url(#paint20_linear_88_330)"
            />
            <Path
                d="M14.198 7.017a.779.779 0 00-.093.006l-.005.001a.66.66 0 00-.059.01l-.012.003-.005.001a.7.7 0 00-.058.016l-.013.004a.726.726 0 00-.059.023l-.008.004a.724.724 0 00-.122.07l-.004.003a.75.75 0 00-.112.098c-.286.286-1.702 1.701-1.742 1.743a.756.756 0 001.101 1.03l1.705-1.706a.756.756 0 00-.515-1.306z"
                fill="url(#paint21_linear_88_330)"
            />
            <Path
                d="M15.93 8.75a.733.733 0 00-.092.006h-.006a.729.729 0 00-.07.013l-.005.002a.775.775 0 00-.058.015l-.013.005a.725.725 0 00-.06.023l-.008.004a.737.737 0 00-.121.07l-.005.003a.755.755 0 00-.112.098c-.285.286-1.701 1.7-1.742 1.743a.756.756 0 001.101 1.029l1.706-1.705a.756.756 0 00-.515-1.306z"
                fill="url(#paint22_linear_88_330)"
            />
            <Path
                d="M14.78 11.232a.583.583 0 11-1.166 0 .583.583 0 011.167 0z"
                fill="url(#paint23_linear_88_330)"
            />
            <Path
                d="M14.78 7.772a.583.583 0 11-1.166 0 .583.583 0 011.167 0z"
                fill="url(#paint24_linear_88_330)"
            />
            <Path
                d="M13.05 9.502a.583.583 0 11-1.166 0 .583.583 0 011.167 0z"
                fill="url(#paint25_linear_88_330)"
            />
            <Path
                d="M16.522 9.502a.583.583 0 11-1.167 0 .583.583 0 011.167 0z"
                fill="url(#paint26_linear_88_330)"
            />
            <Path
                d="M9.458 11.676v.036a.261.261 0 01-.26.261h-.326a.261.261 0 01-.261-.261v-.036c0-.144.117-.261.261-.261h.325c.144 0 .261.117.261.261z"
                fill="url(#paint27_linear_88_330)"
            />
            <Path
                d="M11.388 11.676v.036a.261.261 0 01-.261.261h-.325a.261.261 0 01-.261-.261v-.036c0-.144.116-.261.26-.261h.326c.144 0 .261.117.261.261z"
                fill="url(#paint28_linear_88_330)"
            />
            <Path
                d="M9.479 3.157h1.042v1.38H9.479v-1.38z"
                fill="url(#paint29_linear_88_330)"
            />
            <Path
                d="M10.52 1.579c0-.682-.434-1.265-1.041-1.485v2.022h1.042v-.537z"
                fill="url(#paint30_linear_88_330)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_88_330"
                    x1={9.98142}
                    y1={0.923319}
                    x2={12.9493}
                    y2={3.74638}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_88_330"
                    x1={10}
                    y1={4.11254}
                    x2={10}
                    y2={4.69926}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#ECF7FF" />
                    <Stop offset={1} stopColor="#C2E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_88_330"
                    x1={10.0002}
                    y1={4.91998}
                    x2={10.0002}
                    y2={6.24699}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#ECF7FF" />
                    <Stop offset={1} stopColor="#C2E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_88_330"
                    x1={10}
                    y1={6.17965}
                    x2={10}
                    y2={16.9525}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_88_330"
                    x1={2.43297}
                    y1={12.9119}
                    x2={5.27543}
                    y2={14.0881}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_88_330"
                    x1={17.1697}
                    y1={13.3728}
                    x2={14.2027}
                    y2={15.5306}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_88_330"
                    x1={16.6434}
                    y1={11.9479}
                    x2={9.61682}
                    y2={4.92126}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_88_330"
                    x1={16.3652}
                    y1={11.6692}
                    x2={12.4232}
                    y2={7.72717}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_88_330"
                    x1={9.2621}
                    y1={12.9688}
                    x2={0.42997}
                    y2={4.13666}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_88_330"
                    x1={7.59463}
                    y1={11.3015}
                    x2={4.33922}
                    y2={8.04608}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_88_330"
                    x1={7.42357}
                    y1={11.1304}
                    x2={3.95681}
                    y2={7.66364}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_88_330"
                    x1={5.2598}
                    y1={8.96648}
                    x2={6.33722}
                    y2={10.0439}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#ECF7FF" />
                    <Stop offset={1} stopColor="#C2E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint12_linear_88_330"
                    x1={15.5055}
                    y1={19.7604}
                    x2={2.48884}
                    y2={6.74375}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint13_linear_88_330"
                    x1={7.45492}
                    y1={12.6366}
                    x2={7.45492}
                    y2={16.0611}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint14_linear_88_330"
                    x1={7.45476}
                    y1={15.1724}
                    x2={7.45476}
                    y2={12.4715}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint15_linear_88_330"
                    x1={8.84465}
                    y1={15.6437}
                    x2={6.77786}
                    y2={13.5769}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint16_linear_88_330"
                    x1={6.65479}
                    y1={13.4539}
                    x2={7.71862}
                    y2={14.5177}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#ECF7FF" />
                    <Stop offset={1} stopColor="#C2E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint17_linear_88_330"
                    x1={12.5442}
                    y1={12.6366}
                    x2={12.5442}
                    y2={16.0611}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint18_linear_88_330"
                    x1={12.5442}
                    y1={15.1724}
                    x2={12.5442}
                    y2={12.4715}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint19_linear_88_330"
                    x1={13.9339}
                    y1={15.6437}
                    x2={11.8671}
                    y2={13.5769}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint20_linear_88_330"
                    x1={11.7925}
                    y1={13.5023}
                    x2={13.1269}
                    y2={14.8367}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#ECF7FF" />
                    <Stop offset={1} stopColor="#C2E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint21_linear_88_330"
                    x1={12.9517}
                    y1={8.26626}
                    x2={13.8336}
                    y2={9.14821}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint22_linear_88_330"
                    x1={14.7929}
                    y1={10.1076}
                    x2={15.4586}
                    y2={10.7732}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#45425A" />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint23_linear_88_330"
                    x1={13.9153}
                    y1={10.9497}
                    x2={14.8792}
                    y2={11.9136}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#00C6F6" />
                    <Stop offset={0.8567} stopColor="#0B9CFD" />
                    <Stop offset={1} stopColor="#0D94FE" />
                </LinearGradient>
                <LinearGradient
                    id="paint24_linear_88_330"
                    x1={13.9153}
                    y1={7.48949}
                    x2={14.8792}
                    y2={8.4534}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#D3E843" />
                    <Stop offset={0.6244} stopColor="#A9C93C" />
                    <Stop offset={1} stopColor="#8DB437" />
                </LinearGradient>
                <LinearGradient
                    id="paint25_linear_88_330"
                    x1={12.1853}
                    y1={9.21972}
                    x2={13.1492}
                    y2={10.1836}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFD459" />
                    <Stop offset={0.2296} stopColor="#FFD355" />
                    <Stop offset={0.4362} stopColor="#FFCF4A" />
                    <Stop offset={0.634} stopColor="#FFC838" />
                    <Stop offset={0.825} stopColor="#FFBF1F" />
                    <Stop offset={1} stopColor="#FFB400" />
                </LinearGradient>
                <LinearGradient
                    id="paint26_linear_88_330"
                    x1={15.6561}
                    y1={9.21972}
                    x2={16.62}
                    y2={10.1836}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FF706A" />
                    <Stop offset={0.8111} stopColor="#F64640" />
                    <Stop offset={1} stopColor="#F43B36" />
                </LinearGradient>
                <LinearGradient
                    id="paint27_linear_88_330"
                    x1={9.03464}
                    y1={11.4666}
                    x2={9.03464}
                    y2={12.4673}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFD459" />
                    <Stop offset={0.2296} stopColor="#FFD355" />
                    <Stop offset={0.4362} stopColor="#FFCF4A" />
                    <Stop offset={0.634} stopColor="#FFC838" />
                    <Stop offset={0.825} stopColor="#FFBF1F" />
                    <Stop offset={1} stopColor="#FFB400" />
                </LinearGradient>
                <LinearGradient
                    id="paint28_linear_88_330"
                    x1={10.9643}
                    y1={11.4666}
                    x2={10.9643}
                    y2={12.4673}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FF706A" />
                    <Stop offset={0.8111} stopColor="#F64640" />
                    <Stop offset={1} stopColor="#F43B36" />
                </LinearGradient>
                <LinearGradient
                    id="paint29_linear_88_330"
                    x1={9.99979}
                    y1={4.01748}
                    x2={9.99979}
                    y2={3.41111}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
                <LinearGradient
                    id="paint30_linear_88_330"
                    x1={9.88328}
                    y1={1.39478}
                    x2={10.2488}
                    y2={2.3612}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#2D3251" stopOpacity={0} />
                    <Stop offset={0.0488} stopColor="#2D3251" stopOpacity={0.047059} />
                    <Stop offset={1} stopColor="#2D3251" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default GameComponent
