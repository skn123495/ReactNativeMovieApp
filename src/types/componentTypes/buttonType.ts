import { TextStyle, ViewStyle } from "react-native";

export interface IPrimaryButton {
  buttonLabel: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
  isDisabled?: boolean;
}
