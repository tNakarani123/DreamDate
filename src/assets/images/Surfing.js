import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SurfingComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.697 1.171C9.574 7.693 15.586 17.1 20 20.001H0V10l.753-1.989 2.633-2.394 1.08-1.594 4.128-2.41 2.04-1.096 3.063.653z"
                fill="#4893CC"
            />
            <Path
                d="M7.454 2.701l-.267-.263-2.72 1.586-1.08 1.594L.752 8.012 0 10v10h14.012C6.705 14.395 4.876 6.654 7.454 2.701z"
                fill="#3279AF"
            />
            <Path
                d="M4.023 15.976H20c0 1.187-2.88 1.793-4.459 1.793H4.861l-.838-1.793z"
                fill="#D84861"
            />
            <Path
                d="M3.323 7.104l.063-1.486L.753 8.012 0 10v10h7.61c-4.224-2.78-6.112-9.733-4.287-12.896zM10.841 5.27l.745-.162-.578-.522.311-.196s-.705-.366-1.183-.366c-.478 0-.956.072-1.251.522-.295.45-.124.956-.124.956l.104.486 1.976-.717z"
                fill="#275E87"
            />
            <Path
                d="M10.59 6.773s1.183-.104 1.47.108c.283.21.542.784.542.784l.988.893 1.45 1.84s.59.363.646.475c.056.115.29.7.29.7l-.517.256-.514-.315h-.24l-.234-.745-1.475-1.486-1.091-.434-.29.434.589 1.426-2.522.008-.968-1.47-.602-.374-.888 1.095s-.056.415-.208.662c-.15.246-1.418.964-1.418.964l-.275.53-.621.227H4.2l-.176-.22.383-.135.661-.534s.929-1.267 1.136-1.514c.207-.247.585-.434.585-.434l.474-1.16c-.075-1.123.738-1.167.738-1.167l1.075-.314"
                fill="#F6C9AA"
            />
            <Path
                d="M10.359 7.892s.43-.346.63-1.143c-.228.008-.395.024-.395.024l-1.514.1-.554.163 1.084.948.749-.092z"
                fill="#F3AB7D"
            />
            <Path
                d="M10.168 4.908c.478 0 .673.367.673.367 0 1.398-.542 2.056-.542 2.056h-.554l-.673-.439-.092-.438h-.155s-.43-.582-.263-.825c.255-.37.43.2.43.2l.383-.777c-.004 0 .406-.144.793-.144z"
                fill="#F6C9AA"
            />
            <Path
                d="M9.563 5.538h.398v.319h-.399v-.319zM10.32 5.538h.398v.318h-.399v-.318z"
                fill="#275E87"
            />
            <Path
                d="M10.32 6.853h-.37a.217.217 0 01-.089-.02l-.255-.124.172-.358.21.103h.324v.399h.008zM10.733 9.211l-.195-.347.634-.358a.211.211 0 01.147-.02l.633.167-.103.387-.554-.148-.562.32z"
                fill="#F3AB7D"
            />
            <Path
                d="M9.674 10.717L7.447 12.12a.822.822 0 00-.08 1.335l2.056 1.673-1.247.25v.598h2.825l-.16-.725L8.89 13.16l1.833-.694.773.208 1.498-.248v-1.071l-.785-.638H9.674z"
                fill="#F6C9AA"
            />
            <Path
                d="M12.989 11.355v1.071l-1.498.243-.773-.203-1.83.694-1.162-1.22 1.948-1.223h2.53l.784.638z"
                fill="#D84861"
            />
            <Path
                d="M8.795 12.977l.184.354-.579.302-.184-.353.579-.303z"
                fill="#F3AB7D"
            />
            <Path
                d="M11.399 11.095a.435.435 0 01.35.044l.462.28c.323.19.574.485.717.832l1.032 2.534.41.617v.574h-2.306l.052-.602 1.06-.338-1.905-2.717-.167-.71a.432.432 0 01.295-.514z"
                fill="#F6C9AA"
            />
            <Path
                d="M7.61 2.231S10.501 0 12.995 0c2.044 0 2.98.665 2.98 1.434 0 .77-.574 1.195-1.247 1.195-.673 0-1.036-.705-1.036-1.458.004 0-3.741-.844-6.084 1.06zM0 10s.502-4.382 3.406-4.382c1.435 0 2.052.876 2.052 1.773 0 1.047-2.135 1.625-2.135-.287 0 0-2.295.227-3.323 2.896z"
                fill="#CDE9FE"
            />
            <Path
                d="M3.387 5.617S5.39 1.434 7.948 1.434c1.176 0 1.654.693 1.654 1.51 0 1.223-2.148 1.255-2.148-.243 0 0-2.94 1.104-4.067 2.916zM1.594 15.378h.398v1.196h-.398v-1.196zM4.144 9.562h.398v1.195h-.398V9.562zM2.43 16.335h.398v1.673H2.43v-1.673z"
                fill="#CDE9FE"
            />
        </Svg>
    )
}

export default SurfingComponent