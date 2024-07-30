import Svg, { Path } from "react-native-svg"
const DiamondIcon = ( props ) => (
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
    <Path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10l3-5" />
    <Path d="M10 12 8 9.8l.6-1" />
  </Svg>
)
export default DiamondIcon
