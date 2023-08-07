import {COLORS, FixNum, GlobalVal, Percentage} from '@app/constants';
import {dynamicSize} from '@app/utils/responsive';

const styles = {
  modalContainer: {flex: FixNum.CONST_VAL_1, backgroundColor: COLORS.modal},
  boxContainer: {
    backgroundColor: COLORS.WHITE,
    width: Percentage.PRECENT_100,
    maxHeight: Percentage.PRECENT_90,
    borderRadius: dynamicSize(FixNum.CONST_VAL_7),
    shadowColor: '#000',
    shadowOffset: {width: FixNum.CONST_VAL_1, height: FixNum.CONST_VAL_1},
    shadowOpacity: 2.8,
    shadowRadius: FixNum.CONST_VAL_2,
    alignSelf: GlobalVal.CENTER,
    position: GlobalVal.ABSOLUTE,
    bottom: FixNum.CONST_VAL_0,
    paddingHorizontal: FixNum.CONST_VAL_4,
    paddingVertical: dynamicSize(FixNum.CONST_VAL_15),
  },
};

export default styles;
