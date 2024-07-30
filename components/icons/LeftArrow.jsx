import Svg, { Path } from "react-native-svg"
const LeftArrowIcon = ( props ) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5 12h14M5 12l6 6M5 12l6-6" />
  </Svg>
)
export default LeftArrowIcon
