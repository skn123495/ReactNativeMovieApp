import React from 'react';
import {COLORS, GlobalVal} from '@app/constants';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import {FixedValue} from '@app/constants/enum';
import {scaleHeight, scaleWidth} from '@app/utils/responsive';
/* The `<SlotsChips>` component is being used to render a selectable chip with a label. */
{
  /*
<SlotsChips
  selected={first}
  label={'12:00 PM'}
  onPress={() => setfirst(!first)}
/> */
}
const styles = StyleSheet.create({
  whiteContainer: {
    borderColor: COLORS._ACB0B8,
    borderRadius: FixedValue.CONST_VAL_5,
    borderWidth: FixedValue.CONST_VAL_1,
    marginHorizontal: FixedValue.CONST_VAL_10,
    marginTop: FixedValue.CONST_VAL_10,
    width: scaleWidth(FixedValue.CONST_VAL_77),
    height: scaleHeight(FixedValue.CONST_VAL_32),
    alignItems: GlobalVal.CENTER,
    justifyContent: GlobalVal.CENTER,
  },
});

export interface SlotsChipsProp {
  label?: string | undefined;
  selected?: boolean;
  onPress?: () => void;
}
const SlotsChips = (props: SlotsChipsProp): JSX.Element => {
  const {label, selected, onPress} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[
          styles.whiteContainer,
          {
            backgroundColor: selected ? COLORS._3366FF : COLORS.WHITE,
          },
        ]}>
        <Text
          fontSize={12}
          fontWeight={'semibold'}
          color={selected ? COLORS.WHITE : COLORS.BLACK}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
};
export default React.memo(SlotsChips);
