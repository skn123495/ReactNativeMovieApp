import {COLORS, FixNum, GlobalVal, Percentage} from '@app/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  innerContain: {flexDirection: GlobalVal.ROW, alignItems: GlobalVal.CENTER},
    outerContain: {
    flexDirection: GlobalVal.ROW,
    justifyContent: GlobalVal.SPACE_BETWEEN,
    width: Percentage.PRECENT_100,
  },
  circle: {
    height: FixNum.CONST_VAL_12,
    width: FixNum.CONST_VAL_12,
    borderRadius: FixNum.CONST_VAL_10,
    backgroundColor: COLORS.colorsPrimary,
    marginRight: FixNum.CONST_VAL_10,
  },
  container: {
    flexDirection: GlobalVal.ROW,
    alignItems: GlobalVal.CENTER,
    borderColor: COLORS._GREY,
    borderWidth: FixNum.CONST_VAL_1,
    borderRadius: FixNum.CONST_VAL_5,
    paddingHorizontal: FixNum.CONST_VAL_10,
    marginBottom: FixNum.CONST_VAL_10,
    maxWidth: FixNum.CONST_VAL_350,
    height: FixNum.CONST_VAL_32,
  },
  modalItem: {
    flexDirection: GlobalVal.ROW,
    alignItems: GlobalVal.CENTER,
    padding: FixNum.CONST_VAL_10,
    justifyContent: GlobalVal.SPACE_BETWEEN,
  },
  img: {height: FixNum.CONST_VAL_20, width: FixNum.CONST_VAL_20},
});
