import {FixNum} from '@app/constants';
import {Dimensions, PixelRatio, Platform} from 'react-native';
import {scale} from 'react-native-size-matters';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone 6 scale
const ScaleHeight = SCREEN_HEIGHT / FixNum.CONST_VAL_812;
const ScaleWidth = SCREEN_WIDTH / FixNum.CONST_VAL_375;

const VW = Dimensions.get('window').width / 100;
const VH = Dimensions.get('window').height / 100;

export const isWebsite = (): boolean => Platform.OS === 'web';
export const dynamicSize = (size: number) => ScaleWidth * size;

export const normalizeFont = (size: number) => {
  if (isWebsite()) {
    return size;
  }
  const newSize = size * ScaleWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return (
      Math.round(PixelRatio.roundToNearestPixel(newSize)) - FixNum.CONST_VAL_2
    );
  }
};

export const scaleHeight = (height: number) => {
  if (isWebsite()) {
    return height;
  }
  return Math.round(height * ScaleHeight);
};

export const scaleWidth = (width: number) => {
  if (isWebsite()) {
    return width;
  }
  return Math.round(width * ScaleWidth);
};

export const scaler = (size: number) => scale(size);
