import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function DreamComponent(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 143 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4.956 5.221c-.772-1.16-.918-2.865.281-4.133.291-.31.601-.591.994-.767.644-.379 1.321-.396 2.017-.188.203.06.405.127.584.25 1.125.632 1.74 1.606 1.748 2.904.007 1.278-.637 2.209-1.712 2.853-.534.338-1.118.436-1.733.366-.327-.036-.646-.106-.94-.262a2.637 2.637 0 01-1.239-1.02V5.22z"
                fill="url(#paint0_linear_221_589)"
            />
            <Path
                d="M.13 12.524c-.378-1.406.082-2.6 1.152-3.483.534-.439 1.12-.74 1.834-.702.684.044 1.313.237 1.845.692 1.528 1.177 1.866 3.678-.043 5.161-.525.43-1.123.661-1.802.656-.675 0-1.29-.183-1.834-.595-.605-.425-.96-1.023-1.151-1.727v-.002z"
                fill="url(#paint1_linear_221_589)"
            />
            <Path
                d="M19.514 23.762c-.631 1.415-1.502 2.684-2.412 3.924a28.078 28.078 0 01-1.385 1.765c-.446.586-.935 1.136-1.414 1.695-.31.362-.632.714-.946 1.071-.281.381-.618.716-.92 1.08-.234.283-.492.54-.81.726-.375.215-.773.33-1.205.294-.503-.007-.94-.202-1.347-.48a3.653 3.653 0 01-.848-.815 49.85 49.85 0 00-2.01-2.423c-.021-.027-.038-.056-.06-.085-.402-.417-.772-.86-1.144-1.304-.753-.895-1.495-1.8-2.24-2.701-.804-.96-1.538-1.966-1.903-3.191-.586-1.975-.296-3.83.777-5.568a5.675 5.675 0 011.056-1.286c.52-.538 1.133-.943 1.802-1.261.146-.07.296-.125.446-.186a5.943 5.943 0 011.938-.412c.177-.007.353-.048.53 0 .86 0 1.659.241 2.42.632.63.299 1.215.665 1.66 1.217.678.837.73 1.898.15 2.863-.22.367-.51.673-.829.953-.083.072-.133.065-.205-.015-.29-.323-.586-.639-.882-.957-.424-.408-.908-.707-1.483-.851a3.44 3.44 0 00-.941-.095c-.413.056-.81.16-1.173.372-.463.272-.83.644-1.116 1.1-.198.407-.374.822-.445 1.275-.139.873-.048 1.73.188 2.571.281 1.001.791 1.881 1.42 2.694.03.036.053.075.08.113.271.345.574.663.881.977.57.586 1.152 1.16 1.826 1.623.46.318.947.579 1.524.593h.24c.594-.082 1.069-.4 1.512-.784.381-.33.705-.713 1.042-1.087.42-.533.848-1.056 1.22-1.628.417-.644.751-1.331 1.042-2.043.176-.552.338-1.109.427-1.685.264-1.759-.05-3.4-.947-4.93-.035-.06-.066-.12-.1-.18-.293-.418-.594-.83-.944-1.202a9.766 9.766 0 00-2.35-1.818 3.601 3.601 0 01-.205-.125c-.749-.384-1.557-.65-2.217-1.199-.546-.453-1.028-.957-1.273-1.645-.465-1.302.169-2.691 1.47-3.22.66-.267 1.357-.298 2.055-.279.94-.01 1.831.205 2.69.579.304.132.607.275.881.468a7.783 7.783 0 011.557 1.181c1.6 1.541 2.813 3.34 3.49 5.482.884 2.805.625 5.54-.563 8.202l-.007.005z"
                fill="url(#paint2_linear_221_589)"
            />
            <Path
                d="M34.17 28.498c-.65 0-1.268-.09-1.854-.268-.587-.178-1.092-.56-1.521-1.143.055-.45.19-1.109.405-1.975.215-.866.48-1.847.794-2.95.317-1.099.65-2.232 1.004-3.4.352-1.167.7-2.281 1.046-3.345.343-1.063.651-1.994.92-2.792.27-.799.47-1.377.599-1.737.054-.15.148-.376.279-.677a6.45 6.45 0 01.503-.931c.205-.321.44-.589.71-.803.27-.217.563-.326.88-.326.317 0 .67.133 1.06.396a73.335 73.335 0 00-1.742 4.386 111.559 111.559 0 00-1.674 4.966 141.75 141.75 0 00-1.449 4.965 77.582 77.582 0 00-1.073 4.416c.148.056.358.1.627.128a7.174 7.174 0 004.227-.849c1.096-.593 2.105-1.382 3.027-2.37a17.135 17.135 0 002.413-3.33 17.91 17.91 0 001.59-3.797c.372-1.297.558-2.54.558-3.723 0-1.525-.255-2.762-.768-3.71-.512-.95-1.213-1.647-2.105-2.088-.891-.441-1.916-.663-3.068-.663-1.209 0-2.296.222-3.263.663-.968.441-1.726 1.044-2.275 1.806-.548.762-.822 1.633-.822 2.61 0 .207.019.429.055.663.038.236.102.465.195.692-.798 0-1.37-.174-1.716-.523a1.759 1.759 0 01-.517-1.283c0-.659.238-1.327.71-2.004.474-.678 1.135-1.303 1.98-1.877.847-.574 1.827-1.034 2.943-1.381 1.115-.348 2.324-.524 3.626-.524 1.82 0 3.282.352 4.379 1.059a6.047 6.047 0 012.384 2.85c.493 1.194.739 2.526.739 3.992 0 1.618-.255 3.164-.768 4.642a15.637 15.637 0 01-2.12 4.078 16.115 16.115 0 01-3.122 3.246 14.505 14.505 0 01-3.764 2.144c-1.33.51-2.673.762-4.032.762v.005z"
                fill="url(#paint3_linear_221_589)"
            />
            <Path
                d="M52.886 26.776c-.688 0-1.246-.183-1.673-.55-.427-.366-.641-.86-.641-1.48 0-.526.128-1.09.39-1.693.26-.603.525-1.194.795-1.777.269-.584.405-1.1.405-1.551 0-.451-.138-.794-.417-1.085a3.565 3.565 0 00-.978-.72 30.874 30.874 0 01-1.38 3.006c-.513.97-.925 1.727-1.242 2.272l-.417-.818c.26-.49.603-1.184 1.032-2.088.427-.902.837-1.91 1.228-3.02-.186-.188-.28-.441-.28-.762 0-.49.149-.95.447-1.382.298-.431.586-.649.865-.649.224 0 .386.128.489.382.102.253.152.429.152.523 0 .094-.043.263-.126.509-.084.243-.146.422-.181.535.019.207.18.41.488.608s.656.43 1.047.692c.39.263.734.593 1.032.986.298.396.446.895.446 1.495 0 .546-.122 1.1-.362 1.665a31.38 31.38 0 01-.725 1.58c-.24.489-.363.91-.363 1.268 0 .263.07.436.21.52a.924.924 0 00.489.128c.446 0 .91-.137 1.395-.41a7.452 7.452 0 001.423-1.058 9.9 9.9 0 001.227-1.368 8.07 8.07 0 00.809-1.312l.67.51c-.353.807-.866 1.603-1.533 2.384a9.362 9.362 0 01-2.232 1.92c-.817.5-1.645.748-2.481.748l-.008-.008z"
                fill="url(#paint4_linear_221_589)"
            />
            <Path
                d="M61.085 27.285c-1.19 0-2.105-.325-2.746-.974-.642-.649-.963-1.462-.963-2.44 0-.828.21-1.708.627-2.639.417-.93.98-1.806 1.687-2.624a9.535 9.535 0 012.344-1.99c.855-.508 1.711-.762 2.565-.762.484 0 .944.128 1.38.382.436.253.656.757.656 1.51 0 .752-.206 1.381-.613 2.003-.41.62-.959 1.177-1.645 1.664-.689.49-1.447.89-2.274 1.199a10.36 10.36 0 01-2.496.608c-.02.074-.034.154-.043.24-.01.085-.014.223-.014.41 0 .095.014.259.043.495.028.236.107.485.235.748.13.263.344.49.642.677.298.188.705.283 1.227.283.782 0 1.567-.222 2.358-.664a9.453 9.453 0 002.231-1.763 10.556 10.556 0 001.743-2.455l.558.451a10.685 10.685 0 01-1.938 2.964c-.792.847-1.664 1.505-2.623 1.975-.958.47-1.938.707-2.941.707v-.005zm-1.17-5.108c.483-.055 1.022-.226 1.618-.508a8.965 8.965 0 001.716-1.074 6.416 6.416 0 001.352-1.425c.353-.516.53-1.04.53-1.565 0-.207-.039-.347-.113-.422-.074-.075-.195-.113-.362-.113-.427 0-.875.154-1.34.465-.465.311-.92.714-1.366 1.213-.446.5-.846 1.05-1.199 1.65a10.347 10.347 0 00-.837 1.777v.002z"
                fill="url(#paint5_linear_221_589)"
            />
            <Path
                d="M68.923 27.37c-.613 0-1.149-.208-1.604-.62-.456-.415-.684-1.035-.684-1.862 0-.658.147-1.372.445-2.144.298-.772.706-1.534 1.228-2.286a11.93 11.93 0 011.785-2.045 9.292 9.292 0 012.148-1.481c.763-.376 1.526-.564 2.287-.564.76 0 1.478.207 2.035.62.558.414.837.96.837 1.637 0 .509-.176.875-.53 1.1-.352.226-.771.291-1.255.197.038-.168.069-.337.097-.508.029-.17.043-.348.043-.536 0-.376-.074-.714-.224-1.015-.148-.302-.465-.451-.949-.451-.52 0-1.05.178-1.59.535a7.524 7.524 0 00-1.547 1.397 11.953 11.953 0 00-1.325 1.89c-.391.688-.696 1.36-.92 2.019-.225.658-.334 1.252-.334 1.777 0 .603.214.902.641.902.427 0 .901-.212 1.423-.634a11.48 11.48 0 001.576-1.594c.53-.64 1.037-1.293 1.521-1.96.484-.669.901-1.238 1.254-1.708.055-.094.129-.14.224-.14.074.02.22.06.431.128.215.065.413.164.601.296.186.133.28.302.28.51 0 .187-.08.426-.237.718a19 19 0 01-.558.96c-.214.347-.4.697-.558 1.044a2.427 2.427 0 00-.236 1c0 .244.065.476.196.693.129.217.343.325.641.325.446 0 1.073-.332 1.883-1 .809-.668 1.631-1.802 2.468-3.4l.529.535a11.98 11.98 0 01-1.604 2.693c-.622.782-1.278 1.392-1.967 1.836-.689.441-1.385.663-2.093.663-.763 0-1.33-.244-1.702-.733-.372-.49-.577-1.016-.613-1.58v-.14c-.744.902-1.428 1.619-2.05 2.144-.622.526-1.287.791-1.995.791l.002-.01z"
                fill="url(#paint6_linear_221_589)"
            />
            <Path
                d="M94.33 26.916c-.724 0-1.265-.217-1.618-.648-.353-.432-.53-.95-.53-1.55 0-.433.065-.867.196-1.298.129-.432.26-.861.391-1.283.129-.425.195-.803.195-1.143 0-.321-.06-.54-.18-.664a.618.618 0 00-.46-.183c-.427 0-.926.33-1.493.986-.568.659-1.268 1.619-2.105 2.878-.298.45-.577.925-.837 1.425-.26.499-.493.916-.696 1.256-.167 0-.386-.029-.656-.084a2.9 2.9 0 01-.71-.239c-.205-.104-.308-.241-.308-.41 0-.169.093-.5.28-.989.185-.49.4-1.058.64-1.707.242-.649.456-1.288.642-1.92.186-.63.279-1.162.279-1.594 0-.263-.048-.47-.138-.62-.093-.15-.241-.226-.446-.226-.391 0-.86.236-1.409.704-.548.47-1.125 1.085-1.728 1.847a20.07 20.07 0 00-1.702 2.54A17.39 17.39 0 0080.64 26.8c-.205 0-.456-.044-.754-.128a3.739 3.739 0 01-.781-.311c-.225-.123-.334-.232-.334-.326 0-.02.064-.287.195-.803s.289-1.16.475-1.932c.186-.771.381-1.56.586-2.37.205-.808.382-1.515.53-2.118.054-.207.26-.39.612-.55.353-.159.66-.238.92-.238s.484.084.67.253c.186.169.279.396.279.678 0 .188-.038.46-.112.817a32.07 32.07 0 01-.279 1.213c.39-.526.803-1.049 1.242-1.565.436-.516.892-.984 1.366-1.396a7.339 7.339 0 011.423-.989c.475-.244.944-.367 1.409-.367.687 0 1.151.249 1.395.748.24.5.362 1.04.362 1.623 0 .244-.02.485-.055.719-.038.236-.088.47-.153.704-.064.236-.152.514-.264.832a11.17 11.17 0 011.159-1.454c.417-.442.87-.794 1.351-1.059a3.167 3.167 0 011.535-.395c.725 0 1.228.221 1.507.663.279.441.417.926.417 1.454 0 .49-.078 1-.238 1.539a51.554 51.554 0 01-.475 1.524c-.157.48-.238.89-.238 1.227 0 .188.045.362.138.524.093.159.28.238.558.238.503 0 .985-.234 1.45-.704.464-.47.896-1.049 1.296-1.736.4-.688.74-1.341 1.018-1.96l.475.592a15.685 15.685 0 01-1.159 2.357 7.86 7.86 0 01-1.66 2.004 3.272 3.272 0 01-2.176.803v.005z"
                fill="url(#paint7_linear_221_589)"
            />
            <Path
                d="M100.076 26.89c-.353 0-.71-.089-1.073-.268a2.351 2.351 0 01-.92-.831c-.25-.377-.377-.857-.377-1.44 0-.62.148-1.317.446-2.089.298-.771.7-1.543 1.213-2.313a11.904 11.904 0 011.786-2.115 9.611 9.611 0 012.162-1.553c.763-.395 1.535-.593 2.315-.593.426 0 .763.07 1.003.212.241.14.363.372.363.693 0 .094-.019.202-.055.325-.038.123-.131.232-.279.326-.074-.114-.205-.193-.391-.24a2.44 2.44 0 00-.586-.069c-.613 0-1.2.174-1.757.52a6.556 6.556 0 00-1.533 1.342c-.465.545-.87 1.138-1.214 1.777-.343.64-.61 1.257-.793 1.847-.186.594-.279 1.105-.279 1.54 0 .356.074.643.224.86.148.217.372.326.67.326.503 0 1.101-.297 1.799-.89.699-.594 1.414-1.447 2.148-2.569.735-1.119 1.4-2.46 1.996-4.02.407-1.073.836-2.168 1.282-3.287.446-1.119.892-2.197 1.34-3.232a34.91 34.91 0 011.325-2.766c.437-.808.856-1.454 1.257-1.931.4-.48.767-.72 1.101-.72.205 0 .386.08.544.242a.83.83 0 01.238.605c0 .321-.153.832-.46 1.539a67.715 67.715 0 01-1.171 2.525c-.474.98-.984 2.035-1.532 3.174a54.066 54.066 0 00-1.536 3.499 31.207 31.207 0 00-1.17 3.526c-.308 1.157-.46 2.243-.46 3.258 0 .45.043.757.126.916.083.16.229.24.432.24.407 0 .865-.16 1.366-.48.503-.322 1.013-.794 1.535-1.426.519-.63.994-1.387 1.423-2.272l.529.451a10.638 10.638 0 01-1.561 2.737c-.632.791-1.311 1.406-2.036 1.848-.725.441-1.442.663-2.148.663-.763 0-1.292-.244-1.59-.733-.298-.49-.446-1.064-.446-1.722 0-.302.024-.608.069-.917.046-.31.098-.615.153-.916a17.53 17.53 0 01-1.826 2.272c-.642.668-1.268 1.189-1.884 1.565-.612.376-1.199.564-1.756.564h-.012z"
                fill="url(#paint8_linear_221_589)"
            />
            <Path
                d="M113.409 27.37a2.315 2.315 0 01-1.604-.62c-.456-.415-.685-1.035-.685-1.862 0-.658.148-1.372.446-2.144.298-.772.706-1.534 1.228-2.286a11.976 11.976 0 011.785-2.045 9.29 9.29 0 012.148-1.481c.763-.376 1.526-.564 2.286-.564.761 0 1.478.207 2.036.62.558.414.837.96.837 1.637 0 .509-.176.875-.529 1.1-.353.226-.773.291-1.257.197.039-.168.07-.337.098-.508.029-.17.043-.348.043-.536 0-.376-.074-.714-.224-1.015-.148-.302-.465-.451-.949-.451-.519 0-1.051.178-1.59.535a7.516 7.516 0 00-1.547 1.397 11.983 11.983 0 00-1.325 1.89c-.391.688-.696 1.36-.921 2.019-.224.658-.333 1.252-.333 1.777 0 .603.214.902.641.902.427 0 .901-.212 1.423-.634.52-.422 1.047-.955 1.576-1.594a38.542 38.542 0 001.521-1.96c.484-.669.901-1.238 1.254-1.708.055-.094.128-.14.224-.14.074.02.219.06.431.128.215.065.413.164.601.296.186.133.279.302.279.51 0 .187-.079.426-.236.718-.157.292-.343.612-.558.96-.214.347-.4.697-.558 1.044a2.434 2.434 0 00-.236 1c0 .244.065.476.196.693.128.217.343.325.641.325.446 0 1.073-.332 1.883-1 .808-.668 1.631-1.802 2.468-3.4l.529.535a11.971 11.971 0 01-1.605 2.693c-.622.782-1.277 1.392-1.966 1.836-.689.441-1.385.663-2.093.663-.763 0-1.33-.244-1.702-.733-.372-.49-.577-1.016-.613-1.58v-.14c-.744.902-1.428 1.619-2.05 2.144-.622.526-1.287.791-1.995.791l.002-.01z"
                fill="url(#paint9_linear_221_589)"
            />
            <Path
                d="M126.768 27.341c-.817 0-1.478-.244-1.981-.733-.503-.49-.753-1.233-.753-2.229 0-.771.145-1.729.431-2.877a36.126 36.126 0 011.102-3.554 3.882 3.882 0 00-.46-.1 2.07 2.07 0 01-.515-.154v-.875a36.687 36.687 0 001.34.14c.39-.996.812-1.96 1.268-2.892.455-.93.91-1.763 1.366-2.498.455-.733.887-1.312 1.297-1.737.407-.422.772-.634 1.087-.634.186 0 .362.07.529.212.167.143.25.343.25.608 0 .376-.191.912-.572 1.609-.381.697-.851 1.51-1.409 2.44a43.29 43.29 0 00-1.619 2.976h.866c.817 0 1.556-.014 2.217-.04a31.35 31.35 0 002.021-.155v.93c-1.022.095-1.962.17-2.817.228-.856.055-1.674.094-2.456.113h-.334c-.39.921-.729 1.866-1.017 2.836a9.9 9.9 0 00-.432 2.836c0 .772.122 1.317.362 1.638.241.32.623.48 1.145.48.929 0 1.883-.427 2.858-1.284.975-.856 1.826-2.018 2.553-3.484l.391.282a13.461 13.461 0 01-1.8 3.02c-.715.901-1.492 1.613-2.329 2.129-.837.516-1.702.776-2.594.776l.005-.007z"
                fill="url(#paint10_linear_221_589)"
            />
            <Path
                d="M135.498 27.285c-1.19 0-2.105-.325-2.746-.974-.642-.649-.963-1.462-.963-2.44 0-.828.209-1.708.627-2.639.417-.93.979-1.806 1.687-2.624a9.54 9.54 0 012.344-1.99c.856-.508 1.711-.762 2.565-.762.484 0 .944.128 1.38.382.436.253.656.757.656 1.51 0 .752-.205 1.381-.613 2.003-.41.62-.958 1.177-1.645 1.664-.689.49-1.447.89-2.274 1.199-.827.311-1.659.514-2.496.608a1.819 1.819 0 00-.043.24c-.01.085-.014.223-.014.41 0 .095.014.259.043.495.028.236.107.485.236.748.128.263.343.49.641.677.298.188.705.283 1.228.283.781 0 1.566-.222 2.357-.664a9.475 9.475 0 002.232-1.763 10.56 10.56 0 001.742-2.455l.558.451a10.687 10.687 0 01-1.938 2.964c-.792.847-1.664 1.505-2.622 1.975-.959.47-1.938.707-2.942.707v-.005zm-1.171-5.108c.484-.055 1.023-.226 1.619-.508a8.94 8.94 0 001.716-1.074 6.404 6.404 0 001.352-1.425c.353-.516.529-1.04.529-1.565 0-.207-.038-.347-.112-.422-.074-.075-.195-.113-.362-.113-.427 0-.875.154-1.34.465-.465.311-.92.714-1.366 1.213-.446.5-.846 1.05-1.199 1.65a10.334 10.334 0 00-.837 1.777v.002z"
                fill="url(#paint11_linear_221_589)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_221_589"
                    x1={4.35763}
                    y1={3.26283}
                    x2={10.5796}
                    y2={3.26283}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_221_589"
                    x1={-0.000181621}
                    y1={11.5926}
                    x2={6.23131}
                    y2={11.5926}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_221_589"
                    x1={0.571956}
                    y1={21.0849}
                    x2={20.6038}
                    y2={21.0849}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_221_589"
                    x1={30.7949}
                    y1={17.1128}
                    x2={47.9756}
                    y2={17.1128}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_221_589"
                    x1={47.7254}
                    y1={20.6243}
                    x2={59.1323}
                    y2={20.6243}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_221_589"
                    x1={57.3755}
                    y1={21.5696}
                    x2={68.5869}
                    y2={21.5696}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_221_589"
                    x1={66.6345}
                    y1={21.8662}
                    x2={80.9426}
                    y2={21.8662}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_221_589"
                    x1={78.7684}
                    y1={21.7966}
                    x2={99.3247}
                    y2={21.7966}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_221_589"
                    x1={97.7061}
                    y1={16.3079}
                    x2={114.021}
                    y2={16.3079}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_221_589"
                    x1={111.12}
                    y1={21.8662}
                    x2={125.428}
                    y2={21.8662}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_221_589"
                    x1={124.034}
                    y1={18.2684}
                    x2={133.491}
                    y2={18.2684}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_221_589"
                    x1={131.789}
                    y1={21.5696}
                    x2={143}
                    y2={21.5696}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#075791" />
                    <Stop offset={0.74} stopColor="#8041C6" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default DreamComponent
