import {BASESTYLE, Percentage} from '@app/constants';
import {FixedValue} from '@app/constants/enum';
// import {StyleSheet} from 'react-native';

export default {
  loaderView: {
    ...BASESTYLE.absolutePosition,
    ...BASESTYLE.inCenter,
    zIndex: FixedValue.CONST_VAL_1,
    width: Percentage.PRECENT_100,
    height: Percentage.PRECENT_100,
  },
};
