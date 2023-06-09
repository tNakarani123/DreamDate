import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DramaComponent(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.007 2.559v-.001a.591.591 0 01-.162-.497.591.591 0 00-.485-.668.59.59 0 01-.423-.307.59.59 0 00-.785-.255.59.59 0 01-.523 0 .59.59 0 00-.785.255.591.591 0 01-.423.307h-.001a.59.59 0 00-.485.667v.001a.591.591 0 01-.161.497l-.001.001a.591.591 0 000 .824v.001a.59.59 0 01.162.497v.001a.59.59 0 00.485.667.591.591 0 01.424.307.59.59 0 00.784.255.59.59 0 01.524 0 .59.59 0 00.784-.255.591.591 0 01.423-.307h.001a.59.59 0 00.485-.667v-.001a.59.59 0 01.161-.497h.001a.591.591 0 000-.825z"
                fill="#FF5F7F"
            />
            <Path
                d="M9 16.939a7.872 7.872 0 01-5.603-2.321c-1.497-1.497-2.32-4.577-2.32-6.694s.823-4.106 2.32-5.603A7.872 7.872 0 019 0c2.117 0 4.107.824 5.603 2.32a7.872 7.872 0 012.321 5.604c0 2.117-.824 5.197-2.32 6.694A7.872 7.872 0 019 16.938z"
                fill="#4F4C5E"
            />
            <Path
                d="M4.846 14.618c-1.497-1.497-2.321-4.577-2.321-6.694s.824-4.106 2.32-5.603A7.864 7.864 0 019.726.033a7.872 7.872 0 00-6.327 2.288 7.872 7.872 0 00-2.322 5.603c0 2.117.824 5.197 2.321 6.694a7.872 7.872 0 006.328 2.288 7.864 7.864 0 01-4.88-2.288z"
                fill="#423E4F"
            />
            <Path
                d="M15.833 9.502a1.578 1.578 0 100-3.156 1.578 1.578 0 000 3.156zM8.05 17.107l-.991-1.666v-1.35h4.09v1.35l-.782 1.714-2.318-.048z"
                fill="#FFBD86"
            />
            <Path
                d="M12.51 14.653c.473.59 1.073 1.67 1.073 3.347H9.96l2.548-3.347zM8.049 17.797a16.86 16.86 0 01-.24.203H4.418c0-1.83.713-2.947 1.198-3.495l2.434 3.292z"
                fill="#FF9EB1"
            />
            <Path
                d="M9.103 16.791c-.35.363-.652.658-1.054 1.006a15.849 15.849 0 01-2.434-3.292c.25-.283.44-.414.44-.414h1.003c.434.74 1.095 1.704 2.045 2.7z"
                fill="#DFDFDF"
            />
            <Path
                d="M8.05 17.797a15.3 15.3 0 001.054-1.005c-.263-.276-.503-.55-.724-.816a14.17 14.17 0 01-1.056 1.012c.223.265.464.536.725.81z"
                fill="#BEBBC3"
            />
            <Path
                d="M12.509 14.653A15.987 15.987 0 019.961 18H7.81a14.964 14.964 0 003.338-3.91h.797s.255.178.564.563z"
                fill="#DFDFDF"
            />
            <Path
                d="M3.64 3.685a6.804 6.804 0 00-1.473 4.35c.06 3.758 3.177 6.777 6.936 6.722a6.833 6.833 0 006.549-8.4c-4.248 0-7.917-1.839-9.866-3.045a1.64 1.64 0 00-2.146.373z"
                fill="#FED2A4"
            />
            <Path
                d="M3.254 8.034a6.804 6.804 0 011.473-4.348c.198-.25.456-.427.739-.526a1.638 1.638 0 00-1.826.526 6.807 6.807 0 00-1.292 2.672 1.578 1.578 0 10.001 3.132c.72 3.052 3.496 5.315 6.755 5.267a6.92 6.92 0 00.44-.021c-3.463-.276-6.234-3.16-6.29-6.702z"
                fill="#FFBD86"
            />
            <Path
                d="M5.18 10.206c.778 0 1.41-.502 1.41-1.122 0-.62-.632-1.123-1.41-1.123-.78 0-1.41.503-1.41 1.123s.63 1.122 1.41 1.122zM12.82 10.206c.78 0 1.41-.502 1.41-1.122 0-.62-.63-1.123-1.41-1.123-.778 0-1.409.503-1.409 1.123s.631 1.122 1.41 1.122z"
                fill="#FFA1AC"
            />
            <Path
                d="M6.672 8.134a.272.272 0 01-.271-.272.4.4 0 00-.8 0 .272.272 0 11-.542 0 .944.944 0 011.885 0c0 .15-.122.272-.272.272zM12.67 8.134a.272.272 0 01-.271-.272.4.4 0 00-.8 0 .272.272 0 11-.542 0 .944.944 0 011.885 0c0 .15-.122.272-.272.272zM9 9.243c-.351 0-.685-.153-.917-.418a.272.272 0 11.41-.357.673.673 0 001.014 0 .272.272 0 11.41.357A1.216 1.216 0 019 9.243z"
                fill="#423E4F"
            />
        </Svg>
    )
}

export default DramaComponent
