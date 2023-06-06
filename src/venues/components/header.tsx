import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import {withTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {toggleSignModal} from '../../account/account-slice';
import LWButton from '../../app/components/lw-button';
import LWInput from '../../app/components/lw-input';
import LWLocationInput from '../../app/components/lw-location-input';

const Header = (props: any) => {
  const {theme} = props;
  const styles = useStyles(theme);
  const dispatch = useDispatch();

  const [searchTxt, setSearchTxt] = useState('');

  const onBuyPlan = () => {
    dispatch(toggleSignModal());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <LWButton
            label="Get a credit plan"
            onPress={onBuyPlan}
            style={styles.button}
          />
          <View style={styles.rightIcons}>
            <TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
              <Image
                source={require('../../app/assets/heart.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
              <Image
                source={require('../../app/assets/list.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
              <Image
                source={require('../../app/assets/filter.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerBottom}>
          <LWInput
            label="Search Loacations"
            iconName={'magnify'}
            value={searchTxt}
            onChangeText={setSearchTxt}
            textStyle={styles.searchText}
            style={styles.searchInput}
          />
          <LWLocationInput
            label="Dubai"
            onPress={() => {}}
            style={styles.locationSelect}
          />
        </View>
      </View>
    </View>
  );
};

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes} = theme.app;

  return StyleSheet.create({
    button: {
      height: dimensions.rh(40),
    },
    icon: {
      width: dimensions.rh(20),
      height: dimensions.rh(20),
      resizeMode: 'contain',
    },
    iconContainer: {
      padding: 9,
    },
    header: {
      width: '90%',
      alignSelf: 'center',
      paddingVertical: dimensions.rh(20),
    },
    headerTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rightIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerBottom: {
      flexDirection: 'row',
      marginTop: dimensions.rh(10),
    },
    searchText: {
      fontSize: dimensions.rf(14),
    },
    searchInput: {
      flex: 0.7,
      height: dimensions.rh(40),
    },
    locationSelect: {
      flex: 0.3,
      marginLeft: dimensions.rw(10),
      height: dimensions.rh(40),
    },
    container: {
      backgroundColor: colors.screenBackground,
    },
  });
};

export default withTheme(Header);
