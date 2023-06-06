import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {toggleSignModal} from '../../account/account-slice';
import LwButton from '../../app/components/lw-button';

interface VenueCardProps {
  item: any;
  onPress: any;
  style?: any;
  theme: AppTheme;
}

const VenueCard = (props: VenueCardProps) => {
  const {theme} = props;
  const styles = useStyles(theme);
  const dispatch = useDispatch();

  const onBuyPlan = () => {
    dispatch(toggleSignModal());
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: props.item.thumbnail,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentView}>
        <View style={styles.row}>
          <View style={styles.nameView}>
            <Text style={styles.cardTitle}>{props.item.name}</Text>
          </View>
          <View style={styles.timeView}>
            <Text style={styles.time}>{props.item.is_branch_open}</Text>
          </View>
        </View>
        <Text style={styles.address}>{props.item.address}</Text>
        <View style={styles.bottomRow}>
          <View style={styles.costView}>
            <Text style={styles.amount}>
              {props.item.branch_cost} (0 credits)
            </Text>
          </View>
          <View style={styles.buyView}>
            <LwButton
              label="Buy Credits"
              onPress={onBuyPlan}
              style={styles.button}
              labelStyle={styles.butonTxt}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      marginHorizontal: dimensions.rw(20),
      marginBottom: dimensions.rw(5),
      shadowColor: colors.black,
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 5,
      borderRadius: dimensions.rh(20),
    },
    imageView: {
      borderTopRightRadius: dimensions.rh(20),
      borderTopLeftRadius: dimensions.rh(20),
    },
    butonTxt: {
      textAlign: 'center',
      fontSize: dimensions.rf(12),
      fontWeight: '700',
      color: colors.white,
      fontFamily: fonts.brandon,
    },
    button: {
      height: dimensions.rh(38),
    },
    contentView: {
      borderBottomRightRadius: dimensions.rh(20),
      borderBottomLeftRadius: dimensions.rh(20),
      paddingHorizontal: dimensions.rw(15),
      paddingVertical: dimensions.rh(12),
    },
    nameView: {
      flex: 0.7,
    },
    timeView: {
      flex: 0.4,
      justifyContent: 'center',
    },
    costView: {
      flex: 0.6,
    },
    buyView: {
      flex: 0.4,
      justifyContent: 'center',
    },
    address: {
      marginTop: dimensions.rh(8),
      textAlign: 'left',
      fontSize: dimensions.rf(12),
      fontWeight: '700',
      color: colors.textColorFade,
      fontFamily: fonts.brandon,
    },
    amount: {
      textAlign: 'left',
      fontSize: dimensions.rf(14),
      fontWeight: '800',
      color: colors.black,
      fontFamily: fonts.brandon,
    },
    cardTitle: {
      textAlign: 'left',
      fontSize: dimensions.rf(16),
      color: colors.textColor,
      fontFamily: fonts.brandon,
      fontWeight: 'bold',
    },
    time: {
      textAlign: 'right',
      fontSize: dimensions.rf(13),
      fontWeight: '700',
      color: colors.green,
      fontFamily: fonts.brandon,
    },
    bottomRow: {
      marginTop: dimensions.rh(20),
      flexDirection: 'row',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    image: {
      height: dimensions.rh(100),
      resizeMode: 'cover',
      borderTopRightRadius: dimensions.rh(20),
      borderTopLeftRadius: dimensions.rh(20),
    },
  });
};

export default withTheme(VenueCard);
