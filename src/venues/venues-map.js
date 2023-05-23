import React, {useRef} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';

const DEVICE_WIDTH = Dimensions.get('window').width;
const LAT_DELTA = 0.00074;
const LON_DELTA = 0.00048;

const VenuesMap = () => {
  const {venues} = useSelector(state => state.venues);
  const mapViewRef = useRef(null);
  const initialVenueIndex = 1;

  const renderVenueCard = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardAddress}>{item.address}</Text>
    </View>
  );

  const onSliderItemChange = slideIndex => {
    const newLocation = {
      latitude: venues[slideIndex].lat,
      longitude: venues[slideIndex].lon,
      latitudeDelta: LAT_DELTA,
      longitudeDelta: LON_DELTA,
    };
    mapViewRef.current.animateToRegion(newLocation, 1000);
  };

  return (
    <View style={styles.container}>
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
          renderItem={renderVenueCard}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={450}
          layout={'default'}
          onSnapToItem={onSliderItemChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  cardsContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 40,
    paddingTop: 40,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  card: {
    backgroundColor: '#00A699',
    borderRadius: 20,
    padding: 16,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 8,
    height: 200,
    width: 450,
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  cardAddress: {
    marginTop: 8,
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
  },
});

export default VenuesMap;
