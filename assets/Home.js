import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Home = ({ size = 25, strokeWidth = 2, color = "#2aa05d", ...props }) => (
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
    <Path d="M4.5 21V9L2 11l10-8 10 8-2.5-2v12h-15Z" />
    <Path d="M9.5 14.5V21h5v-6.5h-5Z" />
    <Path d="M4.5 21h15" />
  </Svg>
);

export default Home;