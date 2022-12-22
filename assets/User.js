import * as React from "react";
import Svg, { Path } from "react-native-svg";

const User = ({ size = 25, strokeWidth = 2, color = "#2aa05d", ...props }) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
  </Svg>
);

export default User;