declare module 'react-native-modern-datepicker' {
  import {Component} from 'react';

  export interface DatePickerProps {
    mode?: 'date' | 'time' | 'datetime' | 'countdown | calendar';
    selected?: string | Date;
    onSelectedChange?: (date: string | Date) => void;
    minimumDate?: string | Date;
    maximumDate?: string | Date;
    minuteInterval?: number;
    style?: object;
    minuteInterval?: number;
    iOSDatePickerMode?: 'wheel' | 'spinner' | 'default';
    isIphoneFullScreen?: boolean;
    language?: string;
    renderChildren?: () => JSX.Element | JSX.Element[];
    textStyle?: object;
    backdropStyle?: object;
  }

  export default class DatePicker extends Component<DatePickerProps> {
    constructor(props: DatePickerProps);
  }

  export function getFormatedDate(
    date: Date | string | any,
    format: string | any,
  ): string;
}
