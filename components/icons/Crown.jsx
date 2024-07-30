import Svg, { Path } from "react-native-svg"
const CrownIcon = ( props ) => (
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
    <Path d="m12 6 4 6 5-4-2 10H5L3 8l5 4z" />
  </Svg>
)
export default CrownIcon
