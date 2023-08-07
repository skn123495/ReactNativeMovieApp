import {COLORS} from '@app/constants';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@app/utils/responsive';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  movieContainer: {
    width: '100%',
  },
  safeArea: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginTop: Platform.OS === 'ios' ? '' : ' mt-3',
  },
  backButton: {
    borderRadius: 30 / 2,
    marginLeft: 10,
    padding: 1,
    backgroundColor: COLORS.moviePri,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowBackIcon: {
    height: 20,
    width: 20,
  },
  moviePoster: {
    SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.55,
  },
  gradient: {
    SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.4,
    position: 'absolute',
    bottom: 0,
  },
  movieDetailsContainer: {
    marginTop: -(SCREEN_HEIGHT * 0.09),
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  movieTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  movieStatus: {
    color: '#A3A3A3',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 2,
  },
  genresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  genreText: {
    color: '#A3A3A3',
    fontWeight: '600',
    fontSize: 14,
  },
  movieDescription: {
    color: '#A3A3A3',
  },
});
