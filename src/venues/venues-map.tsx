import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Header from './components/header';

import MapView, {Marker} from 'react-native-maps';

const DEVICE_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = Dimensions.get('window').width - 20;
const LAT_DELTA = 0.00074;
const LON_DELTA = 0.00048;

import Carousel from 'react-native-snap-carousel';
import VenueCard from './components/venue-card';

const VenuesMap = (props: any) => {
  const {theme} = props;
  const styles = useStyles(theme);

  const {venues} = useSelector(state => state.venues);
  const mapViewRef = useRef<MapView>(null);
  const initialVenueIndex = 1;

  const renderCard = ({item}) => <VenueCard item={item} onPress={() => {}} />;

  const onSliderItemChange = (slideIndex: number) => {
    const newLocation = {
      latitude: venues[slideIndex].lat,
      longitude: venues[slideIndex].lon,
      latitudeDelta: LAT_DELTA,
      longitudeDelta: LON_DELTA,
    };

    if (mapViewRef.current) {
      mapViewRef.current.animateToRegion(newLocation, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MapView
        ref={mapViewRef}
        onRegionChangeComplete={region => {
          console.log(region);
        }}
        style={styles.map}
        initialRegion={{
          latitude: venues[initialVenueIndex].lat,
          longitude: venues[initialVenueIndex].lon,
          latitudeDelta: LAT_DELTA,
          longitudeDelta: LON_DELTA,
        }}>
        {venues.map(venue => (
          <Marker
            key={venue.id}
            coordinate={{
              latitude: venue.lat,
              longitude: venue.lon,
            }}
            title={venue.name}
            description={venue.address}
          />
        ))}
      </MapView>
      <View style={styles.cardsContainer}>
        <Carousel
          firstItem={initialVenueIndex}
          data={venues}
          renderItem={renderCard}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={CARD_WIDTH}
          layout={'default'}
          onSnapToItem={onSliderItemChange}
        />
      </View>
    </SafeAreaView>
  );
};

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes} = theme.app;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.screenBackground,
    },
    map: {
      flex: 1,
    },
    cardsContainer: {
      position: 'absolute',
      bottom: dimensions.rh(15),
    },
  });
};

export default withTheme(VenuesMap);
