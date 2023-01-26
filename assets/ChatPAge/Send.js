import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Send = ({ size = 100, strokeWidth = 2, color = "white", ...props }) => (
 <Svg
 width="50"
 height="35"
  fill="none"
  stroke={color}
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={strokeWidth}
  viewBox="0 0 24 24"
  {...props}
 >
  <Path d="M22 2 11 13" />
  <Path d="m22 2-7 20-4-9-9-4 20-7z" />
 </Svg>
);

export default Send;