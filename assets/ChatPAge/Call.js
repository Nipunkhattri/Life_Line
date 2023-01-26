import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Call = ({ size = 100, strokeWidth = 2, color = "#b2a9a9", ...props }) => (
 <Svg
  width="60"
  height="30"
  fill="none"
  stroke={color}
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={strokeWidth}
  viewBox="0 0 24 24"
  {...props}
 >
  <Path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  <Path d="M15 7a2 2 0 0 1 2 2" />
  <Path d="M15 3a6 6 0 0 1 6 6" />
 </Svg>
);

export default Call;