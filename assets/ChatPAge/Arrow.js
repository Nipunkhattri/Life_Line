import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Arrow = ({ size =30, strokeWidth = 4, color = "#4c4848", ...props }) => (
 <Svg
  width="60"
  height="20"
  fill="none"
  stroke={color}
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={strokeWidth}
  viewBox="0 0 24 24"
  {...props}
 >
  <Path d="M15 22.5 6 12l9-10.5" />
 </Svg>
);

export default Arrow;