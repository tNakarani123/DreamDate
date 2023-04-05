import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DrinksComponent(props) {
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
                d="M2.47 10.18l1.731.304-.203 1.154-1.731-.305a.586.586 0 00-.679.475l-.407 2.309a.586.586 0 00.475.678l1.731.306-.203 1.154-1.731-.306a1.758 1.758 0 01-1.426-2.036l.407-2.308a1.758 1.758 0 012.036-1.426z"
                fill="#FF9F00"
            />
            <Path
                d="M10.175 10.348l-1.424 8.078a1.175 1.175 0 01-1.358.95l-4.616-.813a1.175 1.175 0 01-.95-1.358L3.25 9.127l6.924 1.22z"
                fill="#FDBF00"
            />
            <Path
                d="M10.175 10.348l-1.424 8.078a1.175 1.175 0 01-1.358.95l-2.308-.406 1.628-9.233 3.462.61z"
                fill="#FF9F00"
            />
            <Path
                d="M11.432 9.974A1.756 1.756 0 019.395 11.4a1.72 1.72 0 01-1.206-.855 2.344 2.344 0 01-1.679.346 2.344 2.344 0 01-1.46-.9 1.72 1.72 0 01-1.425.391 1.755 1.755 0 01-1.426-2.036A1.755 1.755 0 014.235 6.92c.289.051.54.179.75.335a2.348 2.348 0 012.339-.98c.935.165 1.633.859 1.862 1.72.252-.074.531-.108.82-.057a1.756 1.756 0 011.426 2.036z"
                fill="#FFE1BA"
            />
            <Path
                d="M11.431 9.974A1.755 1.755 0 019.395 11.4a1.72 1.72 0 01-1.206-.855 2.345 2.345 0 01-1.68.346l.815-4.616c.935.165 1.633.86 1.862 1.72.251-.074.53-.108.82-.057a1.755 1.755 0 011.425 2.036z"
                fill="#FFD396"
            />
            <Path
                d="M17.53 10.18l-1.731.304.203 1.154 1.731-.305a.586.586 0 01.68.475l.406 2.309a.586.586 0 01-.475.678l-1.731.306.203 1.154 1.731-.306a1.758 1.758 0 001.426-2.036l-.407-2.308a1.758 1.758 0 00-2.036-1.426z"
                fill="#FF7816"
            />
            <Path
                d="M16.749 9.127l1.424 8.078a1.175 1.175 0 01-.95 1.358l-4.617.814a1.175 1.175 0 01-1.357-.95l-1.425-8.08 6.925-1.22z"
                fill="#FDBF00"
            />
            <Path
                d="M16.75 9.127l1.424 8.078a1.175 1.175 0 01-.95 1.358l-2.309.407-1.628-9.233 3.462-.61z"
                fill="#FF9F00"
            />
            <Path
                d="M17.802 8.346a1.755 1.755 0 01-1.426 2.037 1.72 1.72 0 01-1.426-.392 2.344 2.344 0 01-1.46.9 2.344 2.344 0 01-1.679-.346 1.72 1.72 0 01-1.206.855A1.755 1.755 0 018.57 9.974a1.755 1.755 0 011.426-2.036c.289-.051.568-.017.82.058a2.349 2.349 0 011.862-1.721 2.348 2.348 0 012.338.98c.21-.156.462-.284.75-.335a1.755 1.755 0 012.037 1.426z"
                fill="#FFE1BA"
            />
            <Path
                d="M17.802 8.346a1.756 1.756 0 01-1.426 2.037 1.72 1.72 0 01-1.426-.392 2.344 2.344 0 01-1.46.9l-.813-4.616a2.349 2.349 0 012.338.98 1.78 1.78 0 01.75-.335 1.755 1.755 0 012.037 1.426z"
                fill="#FFD396"
            />
            <Path
                d="M10.586 1.191v1.172A.58.58 0 0110 2.95a.58.58 0 01-.586-.586V1.191A.58.58 0 0110 .605a.58.58 0 01.586.586z"
                fill="#7D0"
            />
            <Path
                d="M11.93 3.95a.586.586 0 01-.414-1l.828-.83a.586.586 0 11.829.83l-.83.828a.584.584 0 01-.413.171z"
                fill="#6B0"
            />
            <Path
                d="M8.07 3.95c-.15 0-.3-.058-.414-.172l-.828-.829a.586.586 0 11.828-.828l.829.828a.586.586 0 01-.414 1z"
                fill="#7D0"
            />
            <Path
                d="M10.586 1.191v1.172A.58.58 0 0110 2.95V.605a.58.58 0 01.586.586z"
                fill="#6B0"
            />
        </Svg>
    )
}

export default DrinksComponent
