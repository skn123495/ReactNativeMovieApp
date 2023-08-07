import {StyleSheet} from 'react-native';
import {BASESTYLE, COLORS, FixNum, GlobalVal, Percentage} from '@app/constants';
import {
  SCREEN_WIDTH,
  normalizeFont,
  scaleHeight,
  scaleWidth,
} from '@app/utils/responsive';

export const commonViewStyle = StyleSheet.create({
  upperView: {
    ...BASESTYLE.absolutePosition,
    zIndex: FixNum.CONST_VAL_MIN_1,
    height: scaleHeight(FixNum.CONST_VAL_244),
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.E6EAF7,
    borderBottomLeftRadius: FixNum.CONST_VAL_20,
    borderBottomRightRadius: FixNum.CONST_VAL_20,
  },
  titleText: {
    fontSize: FixNum.CONST_VAL_18,
    color: COLORS.titleColor,
    marginTop: scaleHeight(FixNum.CONST_VAL_32),
    marginHorizontal: scaleWidth(FixNum.CONST_VAL_10),
    textAlign: GlobalVal.CENTER,
    fontWeight: GlobalVal.BOLD,
  },
  descriptionText: {
    fontSize: normalizeFont(FixNum.CONST_VAL_14),
    color: COLORS._333333,
    marginTop: scaleHeight(FixNum.CONST_VAL_5),
    marginHorizontal: scaleWidth(FixNum.CONST_VAL_10),
    textAlign: GlobalVal.CENTER,
  },
  regBgView: {
    ...BASESTYLE.flex1,
    paddingHorizontal: scaleWidth(FixNum.CONST_VAL_12),
  },
  regBgContentView: {
    width: Percentage.PRECENT_100,
    // backgroundColor: COLORS.white,
    // borderRadius: FixNum.CONST_VAL_20,
    padding: FixNum.CONST_VAL_20,
    marginTop: FixNum.CONST_VAL_32,
    // shadowColor: COLORS.rgba_4_44_176_005,
    // shadowOffset: {
    //   width: FixNum.CONST_VAL_3,
    //   height: FixNum.CONST_VAL_3,
    // },
    // shadowOpacity: FixNum.CONST_VAL_03,
    // shadowRadius: FixNum.CONST_VAL_5,
    // elevation: FixNum.CONST_VAL_5,
  },
  imgLogo: {
    alignSelf: 'center',
    marginTop: scaleHeight(FixNum.CONST_VAL_32),
  },
  languageContain: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: scaleHeight(FixNum.CONST_VAL_61),
  },
  errMessage: {
    color: COLORS.colorRed,
    marginTop: FixNum.CONST_VAL_5,
    fontSize: FixNum.CONST_VAL_14,
  },
});
