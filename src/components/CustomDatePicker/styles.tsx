import {COLORS, FixNum, GlobalVal, Percentage} from '@app/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  innerContain: {
    flexDirection: GlobalVal.ROW,
    alignItems: GlobalVal.CENTER,
    justifyContent: 'space-between',
    width: '100%',
  },
  img: {height: FixNum.CONST_VAL_20, width: FixNum.CONST_VAL_20},

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
  containerOne: {
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

  container: {
    flex: FixNum.CONST_VAL_1,
    justifyContent: GlobalVal.CENTER,
    alignItems: GlobalVal.CENTER,
  },
  modalView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: FixNum.CONST_VAL_20,
    padding: FixNum.CONST_VAL_35,
    paddingBottom: FixNum.CONST_VAL_10,
    alignItems: GlobalVal.CENTER,
    justifyContent: GlobalVal.CENTER,
    shadowColor: '#000',
    shadowOffset: {
      width: FixNum.CONST_VAL_0,
      height: FixNum.CONST_VAL_2,
    },
    shadowOpacity: FixNum.CONST_VAL_0_25,
    shadowRadius: FixNum.CONST_VAL_4,
    elevation: FixNum.CONST_VAL_5,
    alignSelf: GlobalVal.CENTER,
    width: Percentage.PRECENT_60,
  },
});
