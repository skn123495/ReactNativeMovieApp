import {StyleSheet, ViewStyle, ImageStyle} from 'react-native';
import {FixNum} from './numbers';

export enum GlobalVal {
  CENTER = 'center',
  ROW = 'row',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
  SPACE_EVENLY = 'space-evenly',
  ABSOLUTE = 'absolute',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  TOP = 'top',
  CONTAIN = 'contain',
  UNDERLINE = 'underline',
  HIDDEN = 'hidden',
  DASHED = 'dashed',
  COVER = 'cover',
  HANDLED = 'handled',
  LARGE = 'large',
  SMALL = 'small',
  NONE = 'none',
  COLUMN = 'column',
  DOTTED = 'dotted',
  UPPERCASE = 'uppercase',
  CAPITALIZE = 'capitalize',
  BOLD = 'bold',
  RIGHT = 'right',
}
export const BASESTYLE = StyleSheet.create({
  flex1: {
    flex: FixNum.CONST_VAL_1,
  },
  flexGrow1: {
    flexGrow: FixNum.CONST_VAL_1,
  },
  flexShrink1: {
    flexShrink: FixNum.CONST_VAL_1,
  },
  flex2: {
    flex: FixNum.CONST_VAL_2,
  },
  flex8: {
    flex: FixNum.CONST_VAL_8,
  },
  row: {
    flexDirection: GlobalVal.ROW,
  },
  column: {
    flexDirection: GlobalVal.COLUMN,
  },
  inRow: {
    alignItems: GlobalVal.CENTER,
    flexDirection: GlobalVal.ROW,
  },
  inCenter: {
    justifyContent: GlobalVal.CENTER,
    alignItems: GlobalVal.CENTER,
  },
  selfCenter: {
    alignSelf: GlobalVal.CENTER,
  },
  spaceBetween: {
    justifyContent: GlobalVal.SPACE_BETWEEN,
  },
  spaceEvenly: {
    justifyContent: GlobalVal.SPACE_EVENLY,
  },
  center: {
    justifyContent: GlobalVal.CENTER,
  },
  alignCenter: {
    alignItems: GlobalVal.CENTER,
  },
  spaceAround: {
    justifyContent: GlobalVal.SPACE_AROUND,
  },
  absolutePosition: {
    position: GlobalVal.ABSOLUTE,
  },
  textAlignCenter: {
    textAlign: GlobalVal.CENTER,
  },
  marginTop_25: {
    marginTop: FixNum.CONST_VAL_25,
  },
});

export const BASE_ML_I = (value: number): ImageStyle => ({
  marginLeft: value,
});
export const BASE_ML_T = (value: number, value2: number): ImageStyle => ({
  paddingLeft: value,
  paddingRight: value2,
});
