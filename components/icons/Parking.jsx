import Svg, { Path } from "react-native-svg"
const ParkingIcon = ( props ) => (
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
    <Path d="M10 16V8h3.334c.92 0 1.666.895 1.666 2s-.746 2-1.666 2H10" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
  </Svg>
)
export default ParkingIcon
