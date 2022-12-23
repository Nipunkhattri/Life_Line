import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Location = ({ size = 25, strokeWidth = 2, color = "#2aa05d", ...props }) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 22s7.5-6 7.5-12.5a7.5 7.5 0 0 0-15 0C4.5 16 12 22 12 22Z" />
    <Path d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </Svg>
);

export default Location;