import Svg, { Path } from "react-native-svg"
const ShieldIcon = ( props ) => (
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
    <Path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3" />
    <Path d="M11 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 12v2.5" />
  </Svg>
)
export default ShieldIcon
