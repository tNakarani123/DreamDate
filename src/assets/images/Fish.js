import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FishComponent(props) {
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
                d="M13.758 2.868l-1.756 1.275L11.337 9l.825 4.83 1.596 1.302a9.359 9.359 0 001.8-.457V3.325a9.36 9.36 0 00-1.8-.457z"
                fill="#EFEDEE"
            />
            <Path
                d="M13.928 14.32c-.34.051-.687.086-1.037.104l.867.708a9.36 9.36 0 001.8-.457v-.743a10.04 10.04 0 01-1.63.388z"
                fill="#D2D2D2"
            />
            <Path
                d="M19.79 10.522l-.16-.28.295-.324C19.974 9.622 20 9.316 20 9c0-2.72-1.884-4.744-4.442-5.675C14.62 4.922 14.111 6.903 14.111 9s.51 4.078 1.447 5.675c2.054-.748 3.673-2.2 4.231-4.153z"
                fill="#FA9F6A"
            />
            <Path
                d="M2.194 11.731C.921 12.531 0 11.908 0 9.001c0-2.909.921-3.532 2.194-2.732v5.462z"
                fill="#3A484A"
            />
            <Path
                d="M3.727 7.7v2.6c-.54.643-1.06 1.135-1.533 1.431-.376-.428-.597-1.305-.597-2.731s.22-2.303.597-2.731c.472.296.993.788 1.533 1.432z"
                fill="#E0712F"
            />
            <Path
                d="M7.873 3.766C5.953 1.35 8.554.29 11.204 1.21l-3.33 2.556zM7.873 14.233c-1.92 2.418.681 3.477 3.331 2.557l-3.33-2.557z"
                fill="#3A484A"
            />
            <Path
                d="M13.758 2.868l-5.885.898s.75-1.977 3.331-2.557a6.292 6.292 0 012.554 1.66z"
                fill="#E0712F"
            />
            <Path
                d="M13.758 15.132l-5.885-.899s.75 1.978 3.331 2.557a6.292 6.292 0 002.554-1.658z"
                fill="#FA9F6A"
            />
            <Path
                d="M7.874 3.766v.001L6.6 5.101 5.67 9.394l.931 3.478 1.273 1.361c.796.39 1.625.662 2.462.824V2.942a9.822 9.822 0 00-2.461.824z"
                fill="#EFEDEE"
            />
            <Path
                d="M10.289 14.241a10.449 10.449 0 01-3.726-1.507l.038.138 1.272 1.362a9.735 9.735 0 002.462.824v-.809l-.046-.008z"
                fill="#D2D2D2"
            />
            <Path
                d="M12.315 9c0 2.223.505 4.348 1.443 6.132-1.103.166-2.27.15-3.424-.075C9.245 13.4 8.649 11.267 8.649 9c0-2.268.596-4.4 1.685-6.058a10.083 10.083 0 013.424-.074C12.82 4.652 12.315 6.777 12.315 9zM6.853 9c0 1.86.354 3.652 1.02 5.233-1.752-.858-3.337-2.29-4.456-4.393a1.794 1.794 0 010-1.68c1.119-2.104 2.704-3.536 4.456-4.394C7.208 5.346 6.853 7.14 6.853 9z"
                fill="#FA9F6A"
            />
            <Path
                d="M15.805 14.58a7.636 7.636 0 002.26-1.373l.008-.008c.303-.27.58-.57.825-.895l.007-.01c.31-.414.562-.867.746-1.354-.84 1.314-2.199 2.308-3.81 2.894a9.538 9.538 0 01-.624.203c.106.219.22.432.341.638.083-.03.165-.062.247-.094zM10.288 14.24a10.56 10.56 0 01-.484-.105c.16.32.338.629.53.922a10.093 10.093 0 003.424.074 11.486 11.486 0 01-.358-.746 10.74 10.74 0 01-3.112-.144zM7.873 14.233c-.13-.307-.246-.622-.352-.944-1.659-.846-3.17-2.184-4.301-4.089l.008.06c.03.202.093.399.19.58.301.568.65 1.111 1.047 1.618a9.77 9.77 0 003.408 2.775z"
                fill="#E0712F"
            />
            <Path
                d="M19.837 9.915c-.005 0-.468.046-.955-.088a.302.302 0 10-.16.582 3.507 3.507 0 001.068.113 5.38 5.38 0 00.136-.604.302.302 0 00-.089-.003zM17.014 9.695a.302.302 0 01-.275-.426c.131-.29.387-.512.702-.608.316-.095.652-.053.922.116a.302.302 0 01-.32.512.52.52 0 00-.427-.05.52.52 0 00-.327.279.302.302 0 01-.275.177z"
                fill="#3A484A"
            />
        </Svg>
    )
}

export default FishComponent
