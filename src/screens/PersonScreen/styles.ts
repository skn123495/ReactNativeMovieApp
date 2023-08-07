import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@app/utils/responsive';
import {StyleSheet, Platform} from 'react-native';

const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : ' my-3';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  safeArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    ...verticalMargin,
  },
  backButton: {
    borderRadius: 10,
    padding: 1,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBackIcon: {
    height: 20,
    width: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowRadius: 40,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
  },
  profileImageContainer: {
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    height: 180,
    width: 180,
    borderColor: '#ccc',
    borderWidth: 2,
  },
  profileImage: {
    height: SCREEN_HEIGHT * 0.43,
    width: SCREEN_WIDTH * 0.74,
  },
  personInfo: {
    marginTop: 30,
    alignItems: 'center',
  },
  personName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  personPlaceOfBirth: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2B2B2B',
    borderRadius: 100,
  },
  infoItem: {
    borderRightWidth: 2,
    borderRightColor: '#4B4B4B',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  infoTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoValue: {
    color: '#ccc',
    fontSize: 12,
  },
  biographyContainer: {
    marginTop: 30,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  biographyText: {
    color: '#ccc',
    letterSpacing: 1,
    lineHeight: 24,
    marginTop: 10,
  },
  biographyTile: {color: 'white', fontSize: 18},
});
