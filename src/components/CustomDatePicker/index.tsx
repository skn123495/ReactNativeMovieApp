import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import DatePicker, {
  getFormatedDate,
  DatePickerProps,
} from 'react-native-modern-datepicker';
import {Button, FormControl, Image, Text, View} from 'native-base';
import moment from 'moment';
import {IMAGES} from '@app/constants';
import {styles} from './styles';

// Defining the custom props for the CustomDatePicker component
interface CustomDatePickerProps extends DatePickerProps {
  value?: Date | any | null;
  onDateChange?: (date: Date) => void;
  label?: string | null;
}

// The main CustomDatePicker component function
const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value = null,
  onDateChange = () => {},
  label = null,
}) => {
  // Get the current date in YYYY/MM/DD format
  const todayDate = new Date();
  const today = getFormatedDate(todayDate, 'YYYY/MM/DD');

  // Get the date for yesterday in YYYY/MM/DD format
  const yesterday: any = getFormatedDate(
    todayDate.setDate(todayDate.getDate() - 1),
    'YYYY/MM/DD',
  );

  // State for handling the modal open/close and selected date
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | string>(
    value != null ? getFormatedDate(value, 'YYYY/MM/DD') : today,
  );

  // Function to handle the button press
  const handleOnPress = () => {
    // Convert the date to a Date object using moment.js and call the onDateChange prop
    onDateChange(moment(date, 'YYYY/MM/DD').toDate());
    // Toggle the modal open/close state
    setOpen(prev => !prev);
  };

  // Function to handle date change in the DatePicker component
  const handleDateChange = (propDate: Date | string) => {
    // Convert the date to a string if it's a Date object, or use it directly if it's a string
    const dateString =
      typeof propDate === 'string'
        ? propDate
        : getFormatedDate(propDate, 'YYYY/MM/DD');
    // Update the date state
    setDate(dateString);
  };

  return (
    <>
      <View>
        {/* Display the label for the date picker */}
        <FormControl.Label>{label || 'Date'}</FormControl.Label>
        {/* Show a button to select the date */}
        <TouchableOpacity onPress={handleOnPress} style={styles.containerOne}>
          <View style={styles.innerContain}>
            <Text>
              {today === date
                ? 'Today'
                : yesterday === date
                ? 'Yesterday'
                : moment(date, 'YYYY/MM/DD').format('dddd, D MMMM YYYY')}
            </Text>
            <Image source={IMAGES.arrow_down} alt="image" style={styles.img} alt="img"/>
          </View>
        </TouchableOpacity>
        {/* The modal for the date picker */}
        <Modal animationType="slide" transparent={true} visible={open}>
          <View
            flex={1}
            justifyContent="center"
            backgroundColor="rgba(0,0,0,0.5)">
            <View style={styles.modalView}>
              {/* The DatePicker component */}
              <DatePicker
                mode="calendar"
                // Convert the date string back to a Date object when passing to DatePicker
                selected={typeof date === 'string' ? new Date(date) : date}
                onSelectedChange={e => handleDateChange(e)}
                minimumDate={today}
              />
              {/* Button to close the modal */}
              <Button onPress={handleOnPress}>Done</Button>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
// Memoize the component to prevent unnecessary re-renders
export default React.memo(CustomDatePicker);
