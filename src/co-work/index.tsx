import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import VenuesMap from '../venues/venues-map';

const CoWork = (props: any) => {
  return (
    <View style={styles.container}>
      <VenuesMap {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444',
  },
});

export default CoWork;
