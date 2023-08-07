import React, {useEffect, useState} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {goBack} from '@app/services/navigationService';
import {
  fallbackPersonImage,
  fetchPersonDetails,
  fetchPersonMovies,
  image342,
} from '@app/Api/moviedb';
import MovieList from '@app/components/MovieList/MovieList';
import AppLoader from '@app/components/smallDesigns/appLoader';
import {COLORS, IMAGES} from '@app/constants';
import {Text, View, Image} from 'react-native';
import {styles} from './styles';

interface PersonDetails {
  name: string;
  place_of_birth: string;
  gender: number;
  birthday: string;
  known_for_department: string;
  popularity?: number;
  profile_path?: string;
  biography?: string;
  id?: number;
}

const PersonScreen = (props: any) => {
  const item = props?.route?.params;
  const [isFavourite, toggleFavourite] = useState(false);
  const [person, setPerson] = useState({});
  const [personMovies, setPersonMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPersonDetails(item?.id);
    getPersonMovies(item?.id);
  }, [item]);

  const getPersonDetails = async (id: any) => {
    const data = await fetchPersonDetails(id);
    console.log('got person details');
    setLoading(false);
    if (data) {
      setPerson(data);
    }
  };

  const getPersonMovies = async (id: any) => {
    const data = await fetchPersonMovies(id);
    console.log('got person movies');
    if (data && data.cast) {
      setPersonMovies(data.cast);
    }
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 20}}>
      {/* back button */}
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          style={[styles.backButton, {backgroundColor: COLORS.moviePri}]}
          onPress={() => goBack()}>
          <Image
            source={IMAGES.arrow_back}
            tintColor="white"
            style={styles.arrowBackIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          {/* <HeartIcon size={35} color={isFavourite ? 'red' : 'white'} /> */}
        </TouchableOpacity>
      </SafeAreaView>

      {/* person details */}
      {loading ? (
        <AppLoader />
      ) : (
        <View>
          <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{
                  uri: image342(person?.profile_path) || fallbackPersonImage,
                }}
                style={styles.profileImage}
              />
            </View>
          </View>

          <View style={styles.personInfo}>
            <Text style={styles.personName}>{person?.name}</Text>
            <Text style={styles.personPlaceOfBirth}>
              {person?.place_of_birth}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Gender</Text>
              <Text style={styles.infoValue}>
                {person?.gender === 1 ? 'Female' : 'Male'}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Birthday</Text>
              <Text style={styles.infoValue}>{person?.birthday}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Known For</Text>
              <Text style={styles.infoValue}>
                {person?.known_for_department}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>Popularity</Text>
              <Text style={styles.infoValue}>
                {person?.popularity?.toFixed(2)} %
              </Text>
            </View>
          </View>

          <View style={styles.biographyContainer}>
            <Text style={styles.biographyTitle}>Biography</Text>
            <Text style={styles.biographyText}>
              {person?.biography ? person.biography : 'N/A'}
            </Text>
          </View>

          {/* person movies */}
          {person?.id && personMovies.length > 0 && (
            <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
          )}
        </View>
      )}
    </ScrollView>
  );
};
export default React.memo(PersonScreen);
