import React, {useCallback, useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image185, searchMovies} from '@app/Api/moviedb';
import {debounce} from 'lodash';
import AppLoader from '@app/components/smallDesigns/appLoader';
import {COLORS, ROUTE_NAME} from '@app/constants';
import {navigate} from '@app/services/navigationService';
import {View, Text} from 'native-base';
import {styles} from './styles';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = (search: string) => {
    if (search && search.length > 2) {
      setLoading(true);
      searchMovies({
        query: search,
        include_adult: false,
        language: 'en-US',
        page: '1',
      }).then(data => {
        console.log('got search results');
        setLoading(false);
        if (data && data.results) setResults(data.results);
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView style={styles.container}>
      {/* search input */}
      <View style={styles.searchInputContainer}>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor="lightgray"
          style={styles.searchInput}
        />
        <TouchableOpacity
          onPress={() => navigate(ROUTE_NAME.HOME_SCREEN)}
          style={styles.closeButton}>
          <Text fontSize="sm" color={COLORS.WHITE}>
            X
          </Text>
        </TouchableOpacity>
      </View>

      {/* search results */}
      {loading ? (
        <AppLoader />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Results ({results.length})</Text>
          <View style={styles.resultsList}>
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigate(ROUTE_NAME.MOVIE_SCREEN, item)}>
                  <View style={styles.resultItem}>
                    <Image
                      source={{
                        uri: image185(item?.poster_path) || fallbackMoviePoster,
                      }}
                      style={styles.resultImage}
                    />
                    <Text style={styles.resultTitle}>
                      {item?.title?.length > 22
                        ? item?.title.slice(0, 22) + '...'
                        : item?.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.noResultsContainer}>
          <Image
            source={require('../../assets/images/movieTime.png')}
            style={styles.noResultsImage}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default React.memo(SearchScreen);
