import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {withTheme} from 'react-native-paper';

const Booking = (props: any) => {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={require('../app/assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Book</Text>
    </View>
  );
};

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: dimensions.rw(180),
      height: dimensions.rh(42),
      resizeMode: 'contain',
    },
    title: {
      marginTop: dimensions.rh(20),
      fontSize: 30,
      color: colors.textColor,
      fontFamily: fonts.brandon,
      fontWeight: '500',
      textAlign: 'center',
    },
  });
};

export default withTheme(Booking);
