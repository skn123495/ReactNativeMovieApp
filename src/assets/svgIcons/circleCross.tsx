import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CircularCross = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L10 8.59 6.41 5 5 6.41 8.59 10 5 13.59 6.41 15 10 11.41 13.59 15 15 13.59 11.41 10 15 6.41 13.59 5Z"
      fill="#333"
    />
  </Svg>
);
export default React.memo(CircularCross);
