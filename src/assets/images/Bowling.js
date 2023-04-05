import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BowlingComponent(props) {
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
                d="M7.115 6.879h-2.99a.313.313 0 01-.282-.45c.257-.52.278-1.117.094-1.63a.313.313 0 01.294-.418h2.777c.101 0 .196.05.255.133.167.235-.083.352-.083.988 0 .322.073.639.215.927a.313.313 0 01-.28.45z"
                fill="#E48C9B"
            />
            <Path
                d="M7.461 4.413c-.22.516-.14.346-.16.385a.312.312 0 01-.294.208H4.231a.312.312 0 01-.296-.211c-.107-.317-.892-1.7-.416-3.602a1.566 1.566 0 011.45-1.18C5.01.01 4.935.01 6.204.01c.718 0 1.34.486 1.514 1.182a5.058 5.058 0 01-.258 3.22zM8.931 9.875c-.107.199-.136.323-.305.37-.157.04-.252-.042-.343-.1a4.998 4.998 0 00-5.617.196.313.313 0 01-.487-.329c.535-2.083 1.482-3.21 1.664-3.582a.312.312 0 01.28-.176h2.991c.204 0 .279.175.282.179 0 .12.89 1.116 1.488 2.977.068.209.122.325.047.465z"
                fill="#EDEBFD"
            />
            <Path
                d="M8.931 9.875c-.107.199-.136.323-.306.37-.156.04-.252-.042-.342-.1a4.998 4.998 0 00-5.617.196.311.311 0 01-.35.013 5.616 5.616 0 016.568-.944c.068.209.122.325.047.465z"
                fill="#D2D2FC"
            />
            <Path
                d="M7.397 6.433c-.004-.004-.078-.179-.282-.179H5.993a2.102 2.102 0 01-.08-1.248h1.095c.132 0 .25-.084.294-.208-.15.42-.165.886-.027 1.33.06.191.117.292.122.305z"
                fill="#CC5B6F"
            />
            <Path
                d="M6.135 4.413a5.058 5.058 0 00.258-3.22A1.559 1.559 0 004.959.013C4.984.01 5.12.01 6.205.01c.718 0 1.34.486 1.514 1.182a5.058 5.058 0 01-.258 3.22c-.22.516-.14.346-.16.385a.312.312 0 01-.293.208H5.913c.05-.209.11-.333.222-.593zM8.93 9.875c-.106.199-.135.323-.305.37-.156.04-.252-.042-.342-.1-.364-.232-.65-.34-.65-.346a.31.31 0 00-.005-.16 10.422 10.422 0 00-1.405-2.943c-.1-.147-.18-.304-.23-.442h1.121c.204 0 .278.175.282.179 0 .131.959 1.184 1.559 3.205a.312.312 0 01-.024.237z"
                fill="#D2D2FC"
            />
            <Path
                d="M17.728 6.879h-2.99a.312.312 0 01-.281-.45c.256-.52.278-1.117.093-1.63a.313.313 0 01.294-.418h2.777c.101 0 .197.05.255.133.167.235-.083.352-.083.988 0 .322.074.639.215.927a.313.313 0 01-.28.45zM19.185 16.667l-.322.847a.943.943 0 01-.876.603h-3.94a.313.313 0 01-.291-.201c-.245-.643-.15-.203.105-1.424a.312.312 0 01.305-.248h4.727c.219 0 .37.218.292.423z"
                fill="#E48C9B"
            />
            <Path
                d="M18.075 4.413c-.221.516-.14.346-.16.385a.313.313 0 01-.294.207h-2.777a.312.312 0 01-.295-.21c-.108-.317-.892-1.7-.417-3.602.176-.703.823-1.18 1.457-1.18.037-.003-.052-.002 1.23-.002.717 0 1.34.486 1.514 1.182a5.058 5.058 0 01-.258 3.22zM20 12.608c0 1.274-.23 2.523-.683 3.714l-.131.345a.313.313 0 01-.292.201h-4.727a.312.312 0 01-.306-.376 9.822 9.822 0 00-.94-6.618.312.312 0 01-.024-.236c.552-1.857 1.382-2.844 1.56-3.208a.312.312 0 01.28-.176h2.991c.204 0 .279.175.282.179 0 .171 1.99 2.36 1.99 6.175z"
                fill="#EDEBFD"
            />
            <Path
                d="M18.01 6.433c-.004-.004-.078-.179-.282-.179h-1.18a2.102 2.102 0 01-.08-1.248h1.153c.132 0 .25-.084.294-.208-.15.42-.165.886-.027 1.33.06.191.118.292.122.305zM19.186 16.667l-.323.847a.943.943 0 01-.875.603h-1.386a.943.943 0 00.876-.603l.246-.646h1.17c.13 0 .245-.08.292-.201z"
                fill="#CC5B6F"
            />
            <Path
                d="M20 12.608c0 1.274-.23 2.523-.683 3.714l-.131.345a.313.313 0 01-.292.201h-1.17l.208-.546c1.2-3.153.823-6.751-1.153-9.626-.1-.147-.18-.304-.231-.442h1.18c.204 0 .278.175.282.179 0 .171 1.99 2.36 1.99 6.175zM18.075 4.413c-.22.516-.14.346-.16.385a.312.312 0 01-.294.208h-1.153a2.29 2.29 0 01.063-.21c0-.123.927-1.567.417-3.603A1.559 1.559 0 0015.542.015C15.604.01 15.59.01 16.819.01c.718 0 1.34.486 1.514 1.182a5.058 5.058 0 01-.258 3.22z"
                fill="#D2D2FC"
            />
            <Path
                d="M15.129 16.244c-.107.626-.28 1.27-.505 1.873h-.577a.313.313 0 01-.291-.201c-.246-.645-.15-.206.105-1.424a.313.313 0 01.305-.248h.963z"
                fill="#CC5B6F"
            />
            <Path
                d="M15.279 14.481c0 .813-.096 1.62-.277 2.387h-.836a.313.313 0 01-.305-.376 9.821 9.821 0 00-.94-6.618.312.312 0 01-.024-.236c.124-.418.274-.828.448-1.225.177.318 1.934 2.538 1.934 6.068z"
                fill="#D2D2FC"
            />
            <Path
                d="M13.879 18.54l-.323.846a.943.943 0 01-.875.603H9.17a.942.942 0 01-.875-.602l-.154-.406a.312.312 0 01.126-.376c.565-.352.567-.489.771-.489h4.548c.218 0 .37.219.292.424zM12.421 8.752h-2.99a.313.313 0 01-.28-.45 2.103 2.103 0 00.093-1.63.313.313 0 01.294-.418h2.776c.102 0 .197.05.255.133.167.235-.082.352-.082.989 0 .321.073.638.215.926a.313.313 0 01-.28.45z"
                fill="#E48C9B"
            />
            <Path
                d="M14.693 14.481c0 1.024-.15 2.07-.47 3.095-.11.357-.197.575-.345.964a.313.313 0 01-.292.201H9.04a.312.312 0 01-.201-.55c2.545-2.15 2.321-6.143-.466-7.988a.312.312 0 01-.107-.4c.428-.86.732-1.187.885-1.5a.312.312 0 01.28-.176h2.99c.205 0 .28.175.283.179 0 .148 1.99 2.404 1.99 6.175zM12.768 6.286c-.215.502-.146.358-.16.386a.312.312 0 01-.294.207H9.537a.312.312 0 01-.295-.211c-.108-.317-.892-1.699-.416-3.602a1.561 1.561 0 011.391-1.177c.09-.007.043-.005 1.295-.005.717 0 1.34.486 1.514 1.182a5.058 5.058 0 01-.258 3.22z"
                fill="#EDEBFD"
            />
            <Path
                d="M12.703 8.306c-.003-.004-.078-.179-.282-.179H11.37a2.1 2.1 0 01-.068-1.248h1.012c.133 0 .25-.084.294-.208-.149.419-.164.885-.027 1.33.06.191.118.292.122.305z"
                fill="#CC5B6F"
            />
            <Path
                d="M11.52 6.306a5.058 5.058 0 00.257-3.22 1.558 1.558 0 00-1.514-1.183c-.216 0-.187.003-.106-.008.01 0 .08-.011.183-.011h1.172c.717 0 1.34.486 1.514 1.182.29 1.16.187 2.366-.418 3.605a.313.313 0 01-.294.207h-1.012c.05-.198.108-.317.217-.572z"
                fill="#D2D2FC"
            />
            <Path
                d="M13.878 18.54l-.322.847a.943.943 0 01-.876.603h-1.063a.944.944 0 00.69-.584l.253-.665h1.026c.13 0 .246-.08.292-.201z"
                fill="#CC5B6F"
            />
            <Path
                d="M14.694 14.481c0 1.024-.151 2.07-.47 3.095-.11.357-.197.575-.345.964a.313.313 0 01-.292.201H12.56c.275-.723.481-1.234.662-2.102.502-2.388.143-4.89-1-7.039-.488-.915-.689-1.022-.853-1.473h1.051c.204 0 .279.175.282.179 0 .148 1.99 2.404 1.99 6.175z"
                fill="#D2D2FC"
            />
            <Path
                d="M9.775 18.74H9.04a.312.312 0 01-.201-.55c2.545-2.148 2.321-6.143-.466-7.987a.312.312 0 01-.107-.4c.092-.185.198-.38.298-.552 3.838 1.742 4.436 6.894 1.212 9.49z"
                fill="#D2D2FC"
            />
            <Path
                d="M5.619 19.99a5.619 5.619 0 100-11.239 5.619 5.619 0 000 11.238z"
                fill="#696EAD"
            />
            <Path
                d="M8.718 9.682a5.607 5.607 0 00-3.88-.876 5.619 5.619 0 01.001 11.13 5.608 5.608 0 004.402-1.269c2.864-2.416 2.61-6.91-.523-8.985z"
                fill="#505795"
            />
            <Path
                d="M5.932 11.873a.937.937 0 100-1.873.937.937 0 000 1.873z"
                fill="#595965"
            />
            <Path
                d="M6.244 10.054a.937.937 0 100 1.765c-.83-.294-.83-1.47 0-1.765z"
                fill="#44454E"
            />
            <Path
                d="M3.434 13.434a.937.937 0 100-1.873.937.937 0 000 1.873z"
                fill="#595965"
            />
            <Path
                d="M3.746 11.615a.937.937 0 100 1.765c-.83-.294-.83-1.47 0-1.765z"
                fill="#44454E"
            />
            <Path
                d="M5.932 14.995a.937.937 0 100-1.873.937.937 0 000 1.873z"
                fill="#595965"
            />
            <Path
                d="M6.244 13.175a.937.937 0 00-1.249.883.937.937 0 001.249.883c-.83-.295-.83-1.47 0-1.766z"
                fill="#44454E"
            />
        </Svg>
    )
}

export default BowlingComponent