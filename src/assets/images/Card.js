import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function CardComponent(props) {
    return (
        <Svg
            width={335}
            height={208}
            viewBox="0 0 335 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_348_724)">
                <Path
                    d="M12.819 0H322.18C329.257 0 335 5.724 335 12.776v182.448c0 7.052-5.743 12.776-12.819 12.776H12.819C5.743 208 0 202.276 0 195.224V12.776C0 5.724 5.743 0 12.819 0z"
                    fill="url(#paint0_linear_348_724)"
                />
                <Path
                    style={{
                        mixBlendMode: "screen"
                    }}
                    d="M322.181 0H86.621l124.001 208h111.559c7.076 0 12.819-5.724 12.819-12.776V12.776C335 5.724 329.257 0 322.181 0z"
                    fill="url(#paint1_linear_348_724)"
                />
                <Path
                    d="M38.405 54.632H70.23c3.504 0 6.358 2.845 6.358 6.337v22.503c0 3.51-2.854 6.338-6.358 6.338H38.405c-3.52 0-6.358-2.845-6.358-6.338V60.97c0-3.51 2.854-6.337 6.358-6.337z"
                    fill="url(#paint2_linear_348_724)"
                />
                <Path
                    style={{
                        mixBlendMode: "multiply"
                    }}
                    d="M76.589 65.722v-.818h-8.17V54.632h-.82v10.272h-6.615a7.282 7.282 0 00-6.29-5.06v-5.212h-.82v5.162c-3.214.05-5.914 2.197-6.837 5.127h-6V54.65h-.82V64.92h-8.22v.818h8.22v11.516h-8.22v.817h8.22v11.772h.82V78.072h5.829a7.342 7.342 0 007.008 5.673v6.099h.82v-6.167c3.18-.307 5.76-2.59 6.46-5.605h6.444v11.772h.82V78.072h8.17v-.817h-4.87V65.739h4.87v-.017zM46.78 77.238h-5.726V65.722h5.777a7.222 7.222 0 00-.137 1.363 7.23 7.23 0 001.726 4.667c-1.11 1.329-1.726 2.964-1.726 4.668 0 .272.051.545.086.818zm7.247 5.69c-3.59 0-6.512-2.914-6.512-6.491 0-1.618.615-3.186 1.743-4.395l.256-.273-.256-.272a6.438 6.438 0 01-1.743-4.395c0-3.578 2.922-6.49 6.512-6.49 3.589 0 6.511 2.912 6.511 6.49a6.438 6.438 0 01-1.743 4.395l-.256.272.256.273a6.438 6.438 0 011.743 4.395c0 3.577-2.922 6.49-6.511 6.49zm16.87-5.69h-9.624c.035-.273.086-.528.086-.818 0-1.704-.615-3.339-1.726-4.668 1.11-1.328 1.726-2.964 1.726-4.667 0-.46-.051-.92-.137-1.363h9.674v11.516z"
                    fill="url(#paint3_linear_348_724)"
                />
                <Path
                    d="M33.893 114.204l-1.042-1.09 3.127-3.39h2.598v15.502H36.85v-13.68c0-.289.017-.494.068-.579l-.068-.068-2.957 3.305zM41.91 125.243v-2.351c0-.272.016-.443.05-.511.035-.085.154-.204.36-.391l7.366-6.712c.188-.171.308-.307.359-.46.051-.137.068-.358.068-.648v-1.976c0-.221 0-.357-.034-.426-.017-.068-.102-.153-.24-.255-.136-.102-.239-.17-.307-.188a2.634 2.634 0 00-.513-.034h-3.948c-.273 0-.444 0-.513.034-.068.018-.17.086-.307.188a.768.768 0 00-.24.255 1.946 1.946 0 00-.034.426v.426h-1.863v-.886c0-.443.171-.817.53-1.107l.53-.443c.359-.289.718-.443 1.06-.443h5.606c.359 0 .718.154 1.06.443l.53.443c.358.29.53.664.53 1.107v3.118c0 .289-.018.511-.07.647-.05.136-.17.29-.358.46l-7.35 6.627c-.205.187-.324.34-.376.443-.05.102-.068.289-.068.579v.085h8.221v1.55H41.875h.034zM64.317 117.39l.871.715c.222.171.36.307.393.392.034.085.051.307.051.665v4.071c0 .29-.034.494-.068.613-.051.119-.17.273-.342.46l-.393.392c-.342.341-.683.511-1.042.511H57.48c-.36 0-.718-.153-1.06-.443l-.53-.443a1.36 1.36 0 01-.53-1.107v-.886h1.863v.426c0 .221 0 .358.035.426.017.068.102.153.239.255.137.103.24.171.307.188.069.017.24.034.513.034h4.393c.273 0 .444 0 .513-.034.068-.017.17-.085.307-.188a.767.767 0 00.24-.255c.017-.068.034-.205.034-.426v-3.339c0-.324-.137-.613-.393-.835l-.342-.289c-.222-.188-.376-.307-.462-.341-.085-.034-.273-.051-.564-.051h-3.555v-1.414h3.248c.273 0 .461 0 .547-.051.085-.034.239-.136.461-.324l.342-.272c.222-.171.359-.307.393-.392.034-.085.051-.256.051-.545v-2.743c0-.221 0-.358-.034-.426-.017-.068-.102-.153-.24-.255-.136-.103-.239-.171-.307-.188a2.635 2.635 0 00-.513-.034H58.78c-.274 0-.462 0-.53.034-.069.017-.171.085-.308.188a.77.77 0 00-.24.255 1.941 1.941 0 00-.033.426v.426h-1.863v-.886c0-.443.17-.818.53-1.107l.53-.443c.358-.29.717-.443 1.06-.443h5.332c.359 0 .718.153 1.06.443l.53.443c.358.289.53.664.53 1.107v3.629c0 .255 0 .408-.052.494-.034.068-.154.187-.342.34l-.65.528c-.239.188-.444.29-.615.29v.102c.171 0 .376.102.616.29l-.017.017zM76.605 115.721h1.863v4.429h2.137v1.55h-2.137v3.543h-1.863V121.7h-7.862v-1.823l7.606-10.136h2.085l-7.4 9.898c-.154.221-.274.357-.377.426v.085h5.948v-4.429zM104.158 115.056h5.025c.359 0 .718.153 1.059.443l.53.443c.359.289.53.664.53 1.107v6.201c0 .443-.171.817-.53 1.107l-.53.443c-.359.29-.717.443-1.059.443h-6.666c-.359 0-.718-.153-1.06-.443l-.53-.443a1.36 1.36 0 01-.53-1.107v-.886h1.863v.426c0 .221 0 .357.035.426.017.068.102.153.239.255.137.102.239.171.308.188.068.017.239.034.512.034h5.025c.274 0 .445 0 .513-.034.068-.017.171-.086.308-.188a.773.773 0 00.239-.255c.017-.069.034-.205.034-.426v-5.264c0-.222 0-.358-.034-.426-.017-.068-.103-.153-.239-.256-.137-.102-.24-.17-.308-.187a2.631 2.631 0 00-.513-.034h-4.29c-.359 0-.718.153-1.059.443-.359.29-.53.596-.53.886h-1.863v-8.194h10.443v1.55h-8.58v4.855h.085c0-.153.171-.358.496-.596.444-.324.82-.494 1.111-.494l-.034-.017zM126.326 112.62h-1.863v-.426c0-.222 0-.358-.035-.426-.017-.068-.102-.153-.239-.256-.137-.102-.239-.17-.308-.187a2.626 2.626 0 00-.512-.034h-5.333c-.256 0-.427 0-.513.034-.068.017-.171.085-.307.187a.778.778 0 00-.24.256 1.943 1.943 0 00-.034.426v4.412h.086l.102-.102c.513-.511.923-.767 1.214-.767h6.05c.359 0 .718.153 1.06.443l.53.443c.359.29.53.664.53 1.107v5.537c0 .443-.171.817-.53 1.107l-.53.443c-.359.29-.718.443-1.06.443h-7.196c-.358 0-.717-.153-1.059-.443l-.53-.443a1.36 1.36 0 01-.53-1.107v-11.516c0-.443.188-.818.53-1.107l.53-.443c.359-.29.718-.443 1.059-.443h6.974c.359 0 .718.153 1.06.443l.529.443c.359.289.53.664.53 1.107v.886l.035-.017zm-1.641 10.17v-4.6c0-.221 0-.357-.034-.426-.018-.068-.103-.153-.223-.255-.136-.102-.239-.171-.307-.188a2.648 2.648 0 00-.513-.034h-4.991c-.273 0-.478 0-.564.051-.102.035-.273.12-.547.29-.342.205-.513.392-.53.545v4.634c0 .221 0 .358.034.426.018.068.103.153.24.255.136.102.239.171.307.188.069.017.24.034.513.034h5.555c.273 0 .444 0 .513-.034a.92.92 0 00.307-.188c.137-.102.206-.187.223-.255a1.95 1.95 0 00.034-.426l-.017-.017zM130.94 125.243l7.315-13.509c.137-.238.257-.374.376-.443h-9.622v-1.55h11.4v1.687l-7.418 13.815h-2.051zM144.033 118.395l1.042-.869c.24-.187.445-.289.616-.289v-.102c-.171 0-.376-.103-.616-.29l-.735-.579a.913.913 0 01-.359-.75v-3.782c0-.443.171-.817.53-1.107l.53-.443c.359-.289.718-.443 1.06-.443h6.802c.359 0 .718.154 1.06.443l.53.443c.359.29.53.664.53 1.107v3.782c0 .307-.12.562-.359.75l-.735.579c-.239.187-.444.29-.615.29v.102c.171 0 .376.102.615.289l1.043.869c.205.17.307.46.307.869v3.986c0 .443-.171.818-.53 1.107-.119.086-.29.239-.53.443-.358.29-.717.443-1.059.443h-7.333c-.359 0-.717-.153-1.059-.443-.24-.204-.411-.357-.53-.443a1.36 1.36 0 01-.53-1.107v-3.986c0-.409.103-.699.308-.869h.017zm7.725-.238h-4.478c-.222 0-.376 0-.444.034-.069.017-.205.102-.376.255l-.496.392c-.188.153-.308.256-.342.324-.034.068-.051.221-.051.46v3.151c0 .222 0 .358.034.426.017.068.103.153.239.256.137.102.24.17.308.187.069.017.239.034.513.034h5.691c.274 0 .445 0 .513-.034.069-.017.171-.085.308-.187a.772.772 0 00.239-.256c.017-.068.034-.204.034-.426v-3.151c0-.239 0-.392-.051-.46-.034-.068-.137-.188-.342-.324l-.495-.392c-.171-.153-.308-.238-.376-.255a2.177 2.177 0 00-.445-.034h.017zm.342-6.866h-5.162c-.273 0-.444 0-.512.034-.069.018-.171.086-.308.188a.762.762 0 00-.239.255 1.935 1.935 0 00-.035.426v2.879c0 .256 0 .409.052.494.034.068.136.188.307.324l.582.46c.153.119.256.187.341.204.086.017.257.034.53.034h3.726c.274 0 .445 0 .513-.034.085-.017.205-.085.342-.204l.581-.46c.188-.153.291-.256.308-.324.034-.068.051-.238.051-.494v-2.879c0-.221 0-.357-.034-.426-.017-.068-.103-.153-.24-.255-.136-.102-.239-.17-.307-.188a2.648 2.648 0 00-.513-.034h.017zM175.978 122.364h1.863v.426c0 .222 0 .358.034.426.017.068.103.153.24.256.136.102.239.17.307.187.069.017.239.034.513.034h5.333c.273 0 .444 0 .512-.034.069-.017.171-.085.308-.187a.772.772 0 00.239-.256c.017-.068.034-.204.034-.426v-4.412h-.085l-.103.119c-.512.511-.923.767-1.213.767h-6.051c-.359 0-.717-.153-1.059-.443l-.53-.443a1.36 1.36 0 01-.53-1.107v-5.537c0-.443.171-.817.53-1.107l.53-.443c.359-.289.718-.443 1.059-.443h7.196c.359 0 .718.154 1.06.443l.53.443c.359.29.529.664.529 1.107v11.516c0 .443-.17.818-.529 1.107l-.53.443c-.359.29-.701.443-1.06.443h-6.973c-.359 0-.718-.153-1.06-.443l-.53-.443a1.36 1.36 0 01-.53-1.107v-.886h-.034zm1.641-10.17v4.6c0 .221 0 .358.034.426a.773.773 0 00.239.255c.137.102.24.171.308.188.068.017.239.034.513.034h4.991c.29 0 .478 0 .564-.051.102-.035.273-.12.547-.29.341-.204.512-.392.529-.545v-4.634c0-.221 0-.357-.034-.426-.017-.068-.102-.153-.239-.255-.137-.102-.239-.171-.308-.188a2.626 2.626 0 00-.512-.034h-5.555c-.274 0-.445 0-.513.034-.068.017-.171.086-.308.188a.773.773 0 00-.239.255 1.957 1.957 0 00-.034.426l.017.017zM193.377 109.741h8.802c.359 0 .718.154 1.06.443l.53.443c.359.29.53.664.53 1.107v11.516c0 .443-.188.818-.53 1.107l-.53.443c-.359.29-.718.443-1.06.443h-8.802c-.359 0-.718-.153-1.06-.443l-.529-.443a1.36 1.36 0 01-.53-1.107v-11.516c0-.443.188-.817.53-1.107l.529-.443c.359-.289.718-.443 1.06-.443zm9.059 13.049v-10.579c0-.221 0-.357-.034-.426-.017-.068-.103-.153-.24-.255-.136-.102-.239-.17-.307-.187a2.534 2.534 0 00-.513-.035h-7.161c-.257 0-.428 0-.513.035-.069.017-.171.085-.308.187a.762.762 0 00-.239.255 1.957 1.957 0 00-.034.426v10.579c0 .222 0 .358.034.426.017.068.102.153.239.256.137.102.239.17.308.187.068.017.239.034.513.034h7.161c.273 0 .444 0 .513-.034a.913.913 0 00.307-.187.778.778 0 00.24-.256c.017-.068.034-.204.034-.426zM208.606 114.204l-1.043-1.09 3.128-3.39h2.598v15.502h-1.726v-13.68c0-.289.017-.494.068-.579l-.068-.068-2.957 3.305zM216.622 125.243v-2.351c0-.272 0-.443.051-.511.034-.085.154-.204.359-.391l7.383-6.712c.188-.171.308-.307.359-.46.052-.137.069-.358.069-.648v-1.976c0-.221 0-.357-.034-.426-.018-.068-.103-.153-.24-.255-.136-.102-.239-.17-.307-.188a2.648 2.648 0 00-.513-.034h-3.948c-.274 0-.445 0-.513.034-.068.018-.171.086-.308.188a.773.773 0 00-.239.255 1.957 1.957 0 00-.034.426v.426h-1.863v-.886c0-.443.171-.817.53-1.107l.529-.443c.359-.289.701-.443 1.06-.443h5.606c.359 0 .718.154 1.06.443l.53.443c.359.29.53.664.53 1.107v3.118c0 .289-.017.511-.069.647-.051.136-.171.29-.359.46l-7.349 6.627c-.205.187-.342.34-.376.443-.051.102-.069.289-.069.579v.085h8.222v1.55h-10.085.018zM255.694 117.39l.872.715c.222.171.359.307.393.392.034.085.051.307.051.665v4.071c0 .29-.034.494-.068.613-.051.119-.171.273-.342.46l-.393.392c-.342.341-.684.511-1.042.511h-6.307c-.359 0-.718-.153-1.06-.443l-.53-.443a1.36 1.36 0 01-.53-1.107v-.886h1.863v.426c0 .221 0 .358.034.426.018.068.103.153.24.255.136.103.239.171.307.188.069.017.24.034.513.034h4.393c.273 0 .427 0 .513-.034.068-.017.17-.085.307-.188a.762.762 0 00.239-.255c.018-.068.035-.205.035-.426v-3.339c0-.324-.137-.613-.393-.835l-.342-.289c-.223-.188-.376-.307-.462-.341-.085-.034-.273-.051-.547-.051h-3.555v-1.414h3.248c.273 0 .461 0 .547-.051.085-.034.239-.136.461-.324l.342-.272c.222-.171.359-.307.393-.392.034-.085.051-.256.051-.545v-2.743c0-.221 0-.358-.034-.426-.017-.068-.102-.153-.239-.255-.137-.103-.239-.171-.308-.188a2.631 2.631 0 00-.513-.034h-3.657c-.291 0-.462 0-.53.034-.068.017-.171.085-.308.188a.773.773 0 00-.239.255 1.95 1.95 0 00-.034.426v.426H247.2v-.886c0-.443.171-.818.53-1.107l.529-.443c.359-.29.718-.443 1.06-.443h5.333c.359 0 .718.153 1.059.443l.53.443c.359.289.53.664.53 1.107v3.629c0 .255-.017.408-.051.494-.034.085-.154.187-.342.34l-.649.528c-.24.188-.445.29-.616.29v.102c.171 0 .376.102.616.29l-.035.017zM267.983 115.721h1.863v4.429h2.137v1.55h-2.137v3.543h-1.863V121.7h-7.862v-1.823l7.606-10.136h2.085l-7.401 9.898c-.153.221-.273.357-.376.426v.085h5.948v-4.429zM278.871 115.056h5.025c.358 0 .7.153 1.059.443l.53.443c.359.289.53.664.53 1.107v6.201c0 .443-.171.817-.53 1.107l-.53.443c-.359.29-.718.443-1.059.443h-6.666c-.359 0-.718-.153-1.06-.443l-.53-.443a1.36 1.36 0 01-.53-1.107v-.886h1.863v.426c0 .221 0 .357.035.426.017.068.102.153.239.255.137.102.239.171.307.188.069.017.24.034.513.034h5.025c.274 0 .445 0 .513-.034a.931.931 0 00.308-.188c.136-.102.205-.187.222-.255.017-.069.034-.205.034-.426v-5.264c0-.222 0-.358-.034-.426-.017-.068-.103-.153-.222-.256-.137-.102-.24-.17-.308-.187a2.631 2.631 0 00-.513-.034h-4.29c-.359 0-.718.153-1.06.443-.358.29-.529.596-.529.886h-1.863v-8.194h10.443v1.55h-8.58v4.855h.085c0-.153.171-.358.496-.596.444-.324.82-.494 1.111-.494l-.034-.017zM301.039 112.62h-1.863v-.426c0-.222 0-.358-.034-.426-.017-.068-.103-.153-.24-.256-.136-.102-.239-.17-.307-.187a2.648 2.648 0 00-.513-.034h-5.333c-.273 0-.444 0-.512.034-.069.017-.171.085-.308.187a.772.772 0 00-.239.256 1.92 1.92 0 00-.035.426v4.412h.086l.12-.102c.512-.511.923-.767 1.213-.767h6.051c.359 0 .717.153 1.059.443l.53.443c.359.29.53.664.53 1.107v5.537c0 .443-.171.817-.53 1.107l-.53.443c-.359.29-.7.443-1.059.443h-7.196c-.359 0-.718-.153-1.06-.443l-.53-.443a1.36 1.36 0 01-.529-1.107v-11.516c0-.443.17-.818.529-1.107l.53-.443c.359-.29.718-.443 1.06-.443h6.973c.359 0 .718.153 1.06.443l.53.443c.359.289.53.664.53 1.107v.886l.017-.017zm-1.641 10.17v-4.6c0-.221 0-.357-.034-.426-.017-.068-.103-.153-.239-.255-.137-.102-.24-.171-.308-.188a2.631 2.631 0 00-.513-.034h-5.008c-.273 0-.478 0-.564.051-.102.035-.273.12-.547.29-.342.205-.512.392-.53.545v4.634c0 .221 0 .358.035.426.017.068.102.153.239.255.137.102.239.171.308.188.068.017.239.034.512.034h5.555c.274 0 .445 0 .513-.034.068-.017.171-.086.308-.188a.773.773 0 00.239-.255 1.95 1.95 0 00.034-.426v-.017zM32.167 187v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm2.88 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.931 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm3.371 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm4.32 0v-14.16h.72V187h-.72zm1.932 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm4.32 0v-14.16h.72V187h-.72zm1.44 0v-14.16H79V187h-2.16zm3.37 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm2.88 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.932 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm2.88 0v-14.16h2.16V187h-2.16zm3.371 0v-14.16h.72V187h-.72zm2.88 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.932 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm4.32 0v-14.16h.72V187h-.72zm1.931 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm3.371 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm2.88 0v-14.16h.72V187h-.72zm1.931 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm2.88 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm3.372 0v-14.16h.72V187h-.72zm1.44 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm2.88 0v-14.16h2.16V187h-2.16zm3.371 0v-14.16h.72V187h-.72zm1.44 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zm2.88 0v-14.16h2.16V187h-2.16zm2.88 0v-14.16h.72V187h-.72zM38.61 36.66c-.615.29-1.23.444-1.846.444-1.23 0-2.29-.477-3.196-1.431-.906-.954-1.35-2.93-1.35-5.946 0-3.27.444-5.468 1.35-6.61.906-1.14 1.983-1.703 3.265-1.703.478 0 1.076.085 1.777.239v1.856a3.502 3.502 0 00-1.316-.272c-.803 0-1.487.409-2.051 1.21-.564.8-.855 2.401-.855 4.786 0 1.414.069 2.538.188 3.34.12.8.41 1.447.855 1.907.444.477 1.009.716 1.692.716.393 0 .889-.12 1.487-.375v1.84zM45.515 28.023c-.906.017-1.555.205-1.931.512-.376.323-.581 1.022-.581 2.129v6.269h-2V26.49h2v1.55h.051c.581-1.124 1.35-1.703 2.324-1.703h.137v1.703-.017zM53.514 32.044h-4.41c0 1.142.086 1.993.24 2.573.154.579.53.868 1.111.868.444 0 .752-.17.906-.51.154-.342.24-.87.256-1.585h1.795c-.051 2.453-1.094 3.68-3.128 3.68-2.17 0-3.264-1.721-3.264-5.145 0-3.73 1.128-5.605 3.384-5.605.854 0 1.59.324 2.205.971.615.648.922 1.976.922 4.004v.75h-.017zm-1.982-1.516c0-1.04-.086-1.772-.257-2.232-.17-.442-.478-.681-.905-.681-.513 0-.855.239-1.026.716-.17.477-.24 1.209-.24 2.197h2.445-.017zM60.54 21.158h1.948v15.775h-1.932v-1.397h-.051c-.479 1.022-1.145 1.55-2.017 1.55-.513 0-.974-.17-1.401-.51-.428-.342-.735-.819-.89-1.432-.17-.613-.256-1.635-.256-3.066 0-1.636.069-2.811.223-3.51.136-.698.427-1.26.82-1.652.41-.392.923-.596 1.555-.596.82 0 1.47.46 1.949 1.397h.051v-6.559zm.016 10.375c0-1.295-.085-2.198-.24-2.743-.153-.545-.495-.8-.99-.8-.496 0-.838.289-1.026.851-.188.562-.273 1.5-.273 2.81 0 1.313.085 2.318.256 2.897.17.58.496.869.991.869.496 0 .804-.307 1.009-.903.188-.596.273-1.602.273-2.964v-.017zM65 23.288a.98.98 0 01.325-.75.998.998 0 01.769-.323c.308 0 .547.102.769.323.205.222.325.46.325.75s-.103.545-.325.767a1.06 1.06 0 01-.77.323.997.997 0 01-.768-.323 1.038 1.038 0 01-.308-.767H65zm.103 3.186h1.948v10.442h-1.948V26.474zM73.392 28.023h-1.265v8.91H70.16v-8.91h-1.264v-1.55h1.264v-2.845h1.966v2.845h1.265v1.55zM86.297 36.66c-.616.29-1.231.444-1.846.444-1.23 0-2.29-.477-3.196-1.431-.906-.954-1.35-2.93-1.35-5.946 0-3.27.444-5.468 1.35-6.61.905-1.14 1.982-1.703 3.264-1.703.479 0 1.077.085 1.778.239v1.856a3.502 3.502 0 00-1.316-.272c-.804 0-1.487.409-2.051 1.21-.565.817-.855 2.401-.855 4.786 0 1.414.068 2.538.188 3.34.12.8.41 1.447.855 1.907.444.477 1.008.716 1.692.716.393 0 .888-.12 1.47-.375v1.806l.017.034zM95.099 36.933h-1.966v-1.26h-.068c-.496.936-1.145 1.413-1.948 1.413-.684 0-1.282-.323-1.795-.954-.513-.63-.77-2.061-.77-4.259 0-1.959.206-3.373.582-4.241.393-.87 1.06-1.295 2.017-1.295.444 0 .803.102 1.077.306.273.205.564.546.837.989h.068V26.49H95.1v10.443zm-3.213-1.567c.495 0 .837-.307.991-.903.17-.596.256-1.619.256-3.05 0-1.26-.068-2.146-.222-2.657-.154-.511-.461-.767-.94-.767-.478 0-.82.239-1.008.716-.188.477-.274 1.346-.274 2.59 0 1.481.069 2.52.222 3.134.154.613.479.92.992.92l-.017.017zM102.174 28.023c-.906.017-1.555.205-1.931.512-.376.323-.581 1.022-.581 2.129v6.269h-2V26.49h2v1.55h.051c.581-1.124 1.35-1.703 2.325-1.703h.136v1.703-.017zM108.226 21.158h1.948v15.775h-1.931v-1.397h-.052c-.478 1.022-1.145 1.55-2.016 1.55-.513 0-.975-.17-1.402-.51-.427-.342-.718-.819-.889-1.432-.171-.613-.256-1.635-.256-3.066 0-1.636.068-2.811.205-3.51.154-.698.427-1.26.82-1.652.411-.392.923-.596 1.556-.596.82 0 1.47.46 1.948 1.397h.052v-6.542l.017-.017zm.017 10.375c0-1.295-.086-2.198-.24-2.743-.17-.545-.495-.8-.991-.8s-.837.289-1.025.851c-.188.562-.274 1.5-.274 2.81 0 1.313.086 2.318.257 2.897.17.58.495.869.991.869s.82-.307 1.008-.903c.188-.596.274-1.602.274-2.964v-.017zM39.55 137.695c0 1.533-.256 2.691-.752 3.441-.495.75-1.247 1.124-2.273 1.124-1.025 0-1.743-.391-2.256-1.158-.513-.767-.769-1.908-.769-3.39 0-1.482.256-2.726.752-3.458.496-.75 1.248-1.108 2.273-1.108 1.026 0 1.744.392 2.256 1.159.513.783.77 1.908.77 3.407v-.017zm-4.597 0c0 1.209.12 2.078.376 2.589.256.511.65.784 1.196.784.547 0 .957-.256 1.214-.784.256-.528.376-1.38.376-2.572 0-1.193-.12-2.044-.376-2.589-.257-.529-.65-.801-1.214-.801s-.94.255-1.196.784c-.257.528-.376 1.379-.376 2.589zM44.832 142.125h-1.436v-5.724c0-.681 0-1.226.051-1.618-.085.102-.205.204-.341.323-.137.12-.599.494-1.368 1.108l-.718-.903 2.616-2.044h1.196v8.875-.017zM53.77 142.124h-6.033v-1.073l2.29-2.3c.684-.698 1.129-1.175 1.35-1.465.223-.29.377-.562.48-.818a2.17 2.17 0 00.153-.817c0-.409-.12-.716-.359-.954-.239-.239-.58-.341-1.008-.341-.342 0-.667.068-.991.187-.325.12-.684.358-1.111.682l-.77-.937c.496-.426.975-.716 1.436-.886.462-.17.957-.256 1.487-.256.82 0 1.487.222 1.983.648.495.426.752 1.005.752 1.737 0 .409-.069.784-.222 1.142a4.053 4.053 0 01-.667 1.107c-.29.375-.786.903-1.487 1.55l-1.538 1.499v.069h4.221v1.26l.035-.034zM60.557 135.293c0 .563-.171 1.039-.496 1.397-.325.375-.786.631-1.384.75v.051c.718.085 1.247.307 1.606.664.36.358.53.818.53 1.414 0 .852-.308 1.516-.906 1.976-.598.46-1.47.699-2.58.699-.992 0-1.812-.154-2.496-.477v-1.278c.376.187.77.324 1.197.426.427.102.82.153 1.213.153.684 0 1.214-.136 1.538-.374.342-.256.513-.648.513-1.176 0-.477-.188-.818-.564-1.039-.376-.222-.974-.341-1.778-.341h-.769v-1.158h.787c1.418 0 2.136-.494 2.136-1.465 0-.375-.12-.682-.376-.886-.24-.204-.615-.307-1.094-.307-.342 0-.666.051-.974.137a4.503 4.503 0 00-1.111.562l-.7-.988c.82-.596 1.76-.903 2.836-.903.906 0 1.607.187 2.103.579.495.392.752.92.752 1.584h.017zM248.857 143.339h6.17c.256 0 .495.102.752.307l.376.306c.256.205.376.46.376.784v8.074c0 .307-.12.563-.376.784l-.376.307c-.257.204-.496.306-.752.306h-6.17c-.257 0-.496-.102-.752-.306l-.376-.307a.942.942 0 01-.376-.784v-8.074c0-.307.119-.562.376-.784l.376-.306c.256-.205.495-.307.752-.307zm6.358 9.148v-7.428c0-.153 0-.255-.017-.306 0-.051-.069-.102-.171-.171a.878.878 0 00-.222-.136c-.052 0-.171-.017-.359-.017h-5.008c-.188 0-.308 0-.359.017-.051 0-.12.068-.222.136a.774.774 0 00-.171.171c0 .051-.017.153-.017.306v7.428c0 .153 0 .255.017.306 0 .052.068.103.171.188a.69.69 0 00.222.136c.051 0 .171.017.359.017h5.008c.188 0 .307 0 .359-.017.051 0 .119-.051.222-.136.102-.085.154-.136.171-.188 0-.051.017-.153.017-.306zM259.539 146.473l-.735-.766 2.205-2.368h1.828v10.868h-1.213v-9.59c0-.205 0-.341.051-.409l-.051-.051-2.068 2.316h-.017zM271.537 143.339h1.248l-8.238 12.265h-1.18l8.187-12.265h-.017zM273.708 149.403l.735-.613c.171-.136.308-.204.444-.204v-.086c-.119 0-.273-.068-.444-.204l-.513-.409c-.171-.136-.239-.306-.239-.528v-2.657c0-.307.12-.563.376-.784l.376-.307c.239-.204.496-.306.752-.306h4.769c.239 0 .495.102.752.306l.376.307c.239.204.376.46.376.784v2.657a.636.636 0 01-.257.528l-.512.409c-.171.136-.308.204-.445.204v.086c.12 0 .274.068.445.204l.735.613c.153.12.222.324.222.614v2.793c0 .307-.12.563-.376.784-.086.068-.205.17-.376.307-.257.204-.496.306-.752.306h-5.145c-.256 0-.496-.102-.752-.306a2.97 2.97 0 00-.376-.307.944.944 0 01-.376-.784v-2.793c0-.29.068-.494.222-.614h-.017zm5.418-.17h-3.145c-.154 0-.256 0-.307.017-.052 0-.137.068-.257.17l-.342.273a1.004 1.004 0 00-.239.238 1.126 1.126 0 00-.034.324v2.198c0 .153 0 .255.017.306 0 .051.068.102.171.188a.69.69 0 00.222.136c.051 0 .171.017.359.017h3.982c.188 0 .308 0 .359-.017.052 0 .12-.051.223-.136.085-.069.153-.137.17-.188 0-.051.018-.153.018-.306v-2.198c0-.17 0-.273-.035-.324-.017-.051-.102-.136-.239-.238l-.342-.273c-.119-.102-.205-.17-.273-.17-.051 0-.154-.017-.308-.017zm.239-4.821h-3.623c-.188 0-.308 0-.359.017-.051 0-.12.068-.222.136a.753.753 0 00-.171.171c0 .051-.017.153-.017.306v2.027c0 .171 0 .29.034.341.017.051.085.136.222.239l.41.323a.855.855 0 00.24.154c.051 0 .188.017.359.017h2.615c.188 0 .307 0 .359-.017.051 0 .136-.068.239-.154l.41-.323c.12-.103.205-.188.222-.239.017-.051.034-.17.034-.341v-2.027c0-.153 0-.255-.017-.306 0-.051-.068-.103-.171-.171a.844.844 0 00-.222-.136c-.051 0-.171-.017-.359-.017h.017zM285.929 143.339h6.17c.239 0 .496.102.752.307l.376.306c.239.205.376.46.376.784v8.074c0 .307-.12.563-.376.784l-.376.307c-.256.204-.496.306-.752.306h-6.17c-.239 0-.496-.102-.752-.306l-.376-.307a.993.993 0 01-.376-.784v-8.074c0-.307.119-.562.376-.784l.376-.306c.256-.205.495-.307.752-.307zm6.358 9.148v-7.428c0-.153 0-.255-.017-.306 0-.051-.068-.102-.171-.171a.86.86 0 00-.222-.136c-.051 0-.171-.017-.359-.017h-5.025c-.188 0-.308 0-.359.017-.051 0-.12.068-.222.136a.774.774 0 00-.171.171c0 .051-.017.153-.017.306v7.428c0 .153 0 .255.017.306 0 .052.068.103.171.188a.69.69 0 00.222.136c.051 0 .171.017.359.017h5.025c.188 0 .308 0 .359-.017.051 0 .119-.051.222-.136.103-.085.154-.136.171-.188 0-.051.017-.153.017-.306zM219.407 146.201h.035s0-.085.034-.17l1.23-3.969h.582l-1.505 4.531h-.717l-1.504-4.531h.581l1.23 3.969c.034.085.034.136.034.17zM221.714 146.609l1.556-4.531h.769l1.589 4.531h-.547l-.341-.936h-2.171l-.325.936h-.547.017zm1.949-4.139h-.034s0 .119-.052.187l-.871 2.607h1.897l-.906-2.607s-.051-.136-.051-.187h.017zM229.423 146.15v.459h-2.803v-4.531h.547v4.089h2.256v-.017zM230.021 142.062h.547v4.531h-.547v-4.531zM231.867 146.609v-4.531h2.41a.43.43 0 01.308.136l.632.511c.103.086.154.171.154.256v2.726c0 .085-.051.17-.154.255l-.632.511a.462.462 0 01-.308.136h-2.41zm2.957-1.107v-2.334c0-.085-.051-.17-.154-.255l-.307-.256a.464.464 0 00-.308-.136h-1.624v3.629h1.624c.12 0 .222-.052.308-.137l.307-.255c.103-.085.154-.171.154-.256zM218.57 149.847h3.436v.46h-1.436v4.088h-.547v-4.088h-1.436v-.46h-.017zM225.527 149.847h.547v4.531h-.547v-2.112h-2.359v2.112h-.547v-4.531h.547v2.01h2.359v-2.01zM227.373 149.847h2.41c.102 0 .205.051.307.136l.154.136a.395.395 0 01.154.324v1.516c0 .136-.051.239-.171.341l-.154.136a.47.47 0 01-.308.119h-.359l.667 1.039s.086.12.103.137c0 .017.068.051.136.085l.069.034s.119.085.136.102c0 .034.018.085.018.188v.255h-.171-.154c-.034 0-.069-.034-.137-.085l-.12-.085a.86.86 0 01-.239-.256l-.872-1.38h-.94v1.823h-.547v-4.531l.018-.034zm.547.46v1.822h1.777c.017 0 .051-.017.086-.051.034-.034.068-.051.068-.068v-1.397-.119c0-.017-.034-.051-.068-.068-.035-.034-.069-.051-.086-.051h-1.777v-.068zM234.671 149.847h.547v3.952a.399.399 0 01-.154.324l-.154.136c-.103.085-.205.136-.308.136h-2.204a.496.496 0 01-.308-.136l-.154-.136a.396.396 0 01-.154-.324v-3.952h.547V153.782c0 .017.034.051.069.068.034.034.068.051.085.051h2.034c.017 0 .051-.017.085-.051.035-.034.069-.051.069-.068V149.847z"
                    fill="#D6D6D6"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M238.465 145.503v5.519l4.17-2.759-4.17-2.76zM251.119 36.587a.423.423 0 01-.485.05c-.682-.568-.805-.83-1.176-1.37-1.128 1.15-1.926 1.493-3.385 1.493-1.728 0-3.073-1.067-3.073-3.2 0-1.667.908-2.799 2.181-3.355 1.113-.489 2.669-.578 3.859-.712v-.265c0-.49.038-1.067-.249-1.49-.251-.379-.727-.533-1.152-.533-.783 0-1.481.402-1.652 1.232a.43.43 0 01-.363.378l-1.973-.216a.363.363 0 01-.306-.429c.456-2.413 2.637-3.142 4.59-3.142 1 0 2.304.266 3.09 1.022.997.933.908 2.18.908 3.534v3.196c0 .963.4 1.385.776 1.903.131.181.16.409 0 .545-.42.35-1.165.997-1.574 1.363l-.016-.004zm-2.07-5.004c0 .8.019 1.466-.383 2.18-.327.578-.845.934-1.423.934-.787 0-1.246-.6-1.246-1.49 0-1.748 1.568-2.066 3.052-2.066v.445-.003zM256.741 36.507h-2.051a.386.386 0 01-.364-.347V25.62a.389.389 0 01.393-.376h1.913c.196.01.353.167.364.363v1.376h.038c.498-1.332 1.437-1.952 2.702-1.952s2.088.62 2.664 1.952a3.03 3.03 0 015.22-.809c.653.887.518 2.18.518 3.304v6.649a.39.39 0 01-.396.38h-2.051a.384.384 0 01-.364-.378v-5.586c0-.444.038-1.552-.058-1.973-.152-.71-.612-.91-1.207-.91a1.363 1.363 0 00-1.226.864c-.211.534-.193 1.42-.193 2.019v5.584a.387.387 0 01-.394.38h-2.057a.385.385 0 01-.363-.378v-5.586c0-1.176.181-2.907-1.272-2.907-1.454 0-1.418 1.684-1.418 2.907v5.584a.39.39 0 01-.396.38M279.614 34.674c-.376-.518-.776-.94-.776-1.9v-3.199c0-1.355.096-2.6-.908-3.534-.787-.756-2.092-1.021-3.09-1.021-1.953 0-4.134.726-4.592 3.141a.366.366 0 00.307.431l1.99.214a.432.432 0 00.364-.378c.172-.83.867-1.232 1.65-1.232.423 0 .908.156 1.152.534.289.422.25 1 .25 1.489v.26c-1.19.132-2.747.221-3.859.71-1.287.556-2.19 1.688-2.19 3.356 0 2.132 1.345 3.198 3.073 3.198 1.454 0 2.257-.343 3.384-1.491.374.545.496.801 1.177 1.368a.427.427 0 00.485-.047 86.396 86.396 0 011.574-1.363c.176-.125.147-.347.009-.536zm-4.034-.921c-.325.576-.845.932-1.421.932-.787 0-1.247-.6-1.247-1.488 0-1.75 1.569-2.067 3.053-2.067v.444c0 .801.015 1.466-.385 2.179zM281.35 27.09v-1.507a.363.363 0 01.383-.38h6.748a.375.375 0 01.388.38v1.293c0 .216-.181.5-.507.947l-3.496 4.99c1.298-.032 2.67.163 3.849.826.218.116.357.34.363.587v1.614c0 .221-.241.477-.498.345a7.769 7.769 0 00-7.128.012c-.235.126-.48-.127-.48-.349v-1.535a1.82 1.82 0 01.251-1.034l4.05-5.815h-3.532a.377.377 0 01-.391-.38M294.696 27.166c-1.514 0-1.61 2.06-1.61 3.347s-.018 4.034 1.59 4.034 1.668-2.216 1.668-3.568c0-.887-.038-1.952-.307-2.793-.231-.727-.69-1.02-1.341-1.02zm-.02-2.151c3.047 0 4.696 2.616 4.696 5.942 0 3.214-1.818 5.764-4.696 5.764-2.989 0-4.617-2.617-4.617-5.875s1.648-5.831 4.617-5.831zM303.344 36.485h-2.046a.383.383 0 01-.363-.378v-10.54c.021-.2.193-.35.394-.345h1.904a.388.388 0 01.364.294v1.612h.04c.574-1.441 1.379-2.128 2.796-2.128.92 0 1.817.333 2.397 1.241.536.843.536 2.262.536 3.282v6.63a.39.39 0 01-.394.331h-2.064a.385.385 0 01-.364-.33V30.43c0-1.152.135-2.838-1.284-2.838a1.349 1.349 0 00-1.189.843c-.287.643-.325 1.287-.325 1.999v5.671a.393.393 0 01-.4.378M284.135 40.64c-3.854 2.843-9.45 4.36-14.254 4.36a25.788 25.788 0 01-17.408-6.642c-.364-.325-.04-.77.394-.518 4.957 2.884 11.085 4.621 17.419 4.621a34.68 34.68 0 0013.289-2.725c.651-.276 1.198.428.56.908m1.602-1.83c.495.631-.545 3.233-1.012 4.395-.142.35.162.492.48.227 2.066-1.73 2.6-5.354 2.181-5.877-.42-.523-4.034-.967-6.24.583-.34.238-.282.567.096.522 1.241-.15 4.007-.482 4.499.15"
                    fill="#D6D6D6"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_348_724"
                    x1={105.371}
                    y1={261.848}
                    x2={232.128}
                    y2={-62.3793}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#070707" />
                    <Stop offset={1} stopColor="#404040" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_348_724"
                    x1={332.47}
                    y1={99.7412}
                    x2={-171.069}
                    y2={116.581}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop />
                    <Stop offset={0.26} stopColor="#020202" />
                    <Stop offset={0.38} stopColor="#090909" />
                    <Stop offset={0.47} stopColor="#161616" />
                    <Stop offset={0.55} stopColor="#282828" />
                    <Stop offset={0.62} stopColor="#404040" />
                    <Stop offset={0.69} stopColor="#5E5E5E" />
                    <Stop offset={0.74} stopColor="#818181" />
                    <Stop offset={0.8} stopColor="#AAA" />
                    <Stop offset={0.85} stopColor="#D6D6D6" />
                    <Stop offset={0.89} stopColor="#fff" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_348_724"
                    x1={54.3175}
                    y1={45.1432}
                    x2={54.3175}
                    y2={133.948}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFCA3F" />
                    <Stop offset={0.1} stopColor="#CA7C22" />
                    <Stop offset={0.19} stopColor="#FDDB7A" />
                    <Stop offset={0.42} stopColor="#FFAD45" />
                    <Stop offset={0.55} stopColor="#A95F0D" />
                    <Stop offset={0.66} stopColor="#FFAD45" />
                    <Stop offset={0.79} stopColor="#FFFF9B" />
                    <Stop offset={0.87} stopColor="#FFED7B" />
                    <Stop offset={1} stopColor="#FFCA3F" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_348_724"
                    x1={0.000172298}
                    y1={23.6277}
                    x2={1.69805}
                    y2={134.8}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFCA3F" />
                    <Stop offset={0.1} stopColor="#CA7C22" />
                    <Stop offset={0.19} stopColor="#FDDB7A" />
                    <Stop offset={0.42} stopColor="#FFAD45" />
                    <Stop offset={0.55} stopColor="#A95F0D" />
                    <Stop offset={0.66} stopColor="#FFAD45" />
                    <Stop offset={0.79} stopColor="#FFFF9B" />
                    <Stop offset={0.87} stopColor="#FFED7B" />
                    <Stop offset={1} stopColor="#FFCA3F" />
                </LinearGradient>
                <ClipPath id="clip0_348_724">
                    <Path fill="#fff" d="M0 0H335V208H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default CardComponent