import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { SvgPropsType } from './types';

const ChevronRight: React.FC<SvgPropsType> = ({ style }) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.59163 3.3685C6.79308 3.17963 7.1095 3.18984 7.29836 3.3913L11.2984 7.65796C11.4787 7.85029 11.4787 8.14958 11.2984 8.3419L7.29836 12.6086C7.1095 12.81 6.79308 12.8202 6.59162 12.6314C6.39017 12.4425 6.37996 12.1261 6.56883 11.9246L10.2482 7.99993L6.56883 4.07524C6.37996 3.87378 6.39017 3.55736 6.59163 3.3685Z"
      fill="#323232"
    />
  </Svg>
);

export default ChevronRight;
