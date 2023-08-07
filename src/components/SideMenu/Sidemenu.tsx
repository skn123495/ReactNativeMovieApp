import React from 'react';
import {
  View,
  Alert,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Heading} from 'native-base';
import {COLORS, FixNum, GlobalVal, IMAGES, TEXT} from '@app/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: GlobalVal.ROW,
    alignItems: GlobalVal.CENTER,
    marginLeft: FixNum.CONST_VAL_25,
    marginRight: FixNum.CONST_VAL_25,
    marginTop: FixNum.CONST_VAL_33,
  },
  img: {width: FixNum.CONST_VAL_24, height: FixNum.CONST_VAL_24},
  titleContainer: {
    flexDirection: GlobalVal.ROW,
    alignItems: GlobalVal.CENTER,
    paddingLeft: FixNum.CONST_VAL_5,
  },
  listName: {color: COLORS._6C757D, paddingLeft: FixNum.CONST_VAL_20},
});

const SideMenu = (props: any): JSX.Element => {
  const navigation = useNavigation();
  async function signOut() {
    try {
      await AsyncStorage.removeItem('token');
      navigation.reset({index: 0, routes: [{name: 'AuthStack'}]});
    } catch (error) {
      Alert.alert('Sorry', 'Something Went Wrong');
      setIsAuthenticating(false);
    }
  }
  const DRAWER_NAV_LIST = [
    {id: 1, name: 'Dashboard', image: IMAGES.bx_home},
    {id: 2, name: 'Clients', image: IMAGES.clientImg},
    {id: 3, name: 'Calendar', image: IMAGES.uil_calender},
    {id: 4, name: 'Visits', image: IMAGES.uiw_date},
    {id: 5, name: 'Invoices', image: IMAGES.uil_invoice},
    // {id: 6, name: 'Items', image: IMAGES.itemImg},
    // {id: 7, name: 'Medicines', image: IMAGES.medicalImg},
    // {id: 8, name: 'Settings', image: IMAGES.settings},
    // {id: 9, name: 'Client Requests', image: IMAGES.tabler_message},
    // {id: 10, name: 'Feedback', image: IMAGES.uilchart_lines},
    // {id: 11, name: 'Client Referrals', image: IMAGES.shareOutlined},
    // {id: 12, name: 'User Activity Logs', image: IMAGES.cil_history},
  ];
  return (
    <DrawerContentScrollView {...props} safeArea>
      <View>
        <View style={styles.titleContainer}>
          <Avatar
            mr={3}
            ml={3}
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <View>
            <Heading fontSize={14} fontWeight={'medium'} mb={1}>
              {TEXT.NAME}
            </Heading>
            <Text style={{color: COLORS._6C757D}}>{TEXT.ROLE}</Text>
          </View>
        </View>
        {DRAWER_NAV_LIST.map(item => {
          return (
            <TouchableOpacity style={styles.container} key={item?.id}>
              <Image source={item?.image} style={styles.img} />
              <Text style={styles.listName}>{item?.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};
export default SideMenu;
