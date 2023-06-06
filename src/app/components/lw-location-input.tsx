import React from 'react';
import {withTheme} from 'react-native-paper';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface LocationInputProps {
  label: string;
  onPress: any;
  style?: any;
  theme: AppTheme;
}

function LWLocationInput(props: LocationInputProps) {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, props.style]}>
      <View style={styles.left}>
        <Icon name="map-marker" size={20} color={colors.primaryColor} />
        <Text style={styles.label}>{props.label}</Text>
      </View>

      <Icon name="chevron-down" size={25} color={'#444'} />
    </TouchableOpacity>
  );
}

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    left: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal: '3%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: dimensions.buttonHeight,
      borderWidth: 1,
      borderRadius: dimensions.textInputRadius,
      borderColor: colors.borderColor,
    },
    label: {
      marginLeft: dimensions.rw(1),
      fontSize: dimensions.rf(14),
      textAlign: 'center',
      color: colors.textColor,
      fontFamily: fonts.brandon,
      fontWeight: '700',
    },
  });
};

export default withTheme(LWLocationInput);
