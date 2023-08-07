import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@app/utils/responsive';
import {StyleSheet, Platform} from 'react-native';

const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : ' my-3';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchInputContainer: {
    margin: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
  closeButton: {
    borderRadius: 25 / 2,
    padding: 2,
    marginRight: 10,
    backgroundColor: 'gray',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsContainer: {
    paddingHorizontal: 15,
  },
  resultsTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  resultsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  resultItem: {
    marginBottom: 8,
    alignItems: 'center',
  },
  resultImage: {
    width: SCREEN_WIDTH * 0.44,
    height: SCREEN_HEIGHT * 0.3,
    borderRadius: 7,
  },
  resultTitle: {
    color: 'gray',
    paddingTop: 1,
  },
  noResultsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noResultsImage: {
    height: 96,
    width: 96,
  },
});
