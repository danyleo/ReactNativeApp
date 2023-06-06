import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions as RNDimensions,
  Animated,
  Keyboard,
  StyleSheet,
  Image,
} from 'react-native';

import {withTheme} from 'react-native-paper';
import LWInput from '../app/components/lw-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LWSocialButton from '../app/components/lw-social-button';
import LwLoginToggle from '../app/components/lw-login-toggle';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSignModal} from './account-slice';
import LWButton from '../app/components/lw-button';

const DEVICE_HEIGHT = RNDimensions.get('window').height;

const SignInModal = (props: any) => {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);
  const dispatch = useDispatch();

  const offset = useRef(new Animated.Value(DEVICE_HEIGHT));

  const {isSignInModalOpen} = useSelector(state => state.account);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isSignInModalOpen) {
      Animated.timing(offset.current, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(offset.current, {
        toValue: DEVICE_HEIGHT,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isSignInModalOpen]);

  const toggleModal = () => {
    dispatch(toggleSignModal());
    Keyboard.dismiss();
  };

  let backOpacity = offset.current.interpolate({
    inputRange: [0, 20, DEVICE_HEIGHT],
    outputRange: [0.6, 0, 0],
  });

  return (
    <Animated.View
      style={[styles.conatiner, {transform: [{translateY: offset.current}]}]}>
      <Animated.View style={[styles.backContainer, {opacity: backOpacity}]} />

      <TouchableOpacity
        onPress={toggleModal}
        activeOpacity={1}
        style={{flex: 0.2}}
      />

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={styles.contentView}>
        <View style={styles.header}>
          <View />
          <Image
            source={require('../app/assets/logo.png')}
            style={styles.logo}
          />
          <TouchableOpacity activeOpacity={0.5} onPress={toggleModal}>
            <Icon name="close" size={21} color={colors.textColor} />
          </TouchableOpacity>
        </View>

        <LwLoginToggle style={styles.loginBtn} onChange={() => {}} />

        <LWInput
          label="your@email.com*"
          iconName="email-outline"
          value={email}
          onChangeText={setEmail}
          style={styles.emailInput}
        />

        <LWButton
          disabled
          label="Login"
          onPress={() => {}}
          style={styles.loginBtn}
        />

        <View style={styles.seperator}>
          <View style={styles.line} />
          <Text style={styles.seperatorText}>OR CONTINUE WITH</Text>
          <View style={styles.line2} />
        </View>

        <LWSocialButton
          label="Continue With Apple"
          icon={require('../app/assets/apple.png')}
          onPress={() => {}}
        />

        <LWSocialButton
          label="Continue With Apple"
          icon={require('../app/assets/g-plus.png')}
          style={styles.emailInput}
          onPress={() => {}}
        />

        <LWSocialButton
          label="Continue With Apple"
          icon={require('../app/assets/fb.png')}
          style={styles.emailInput}
          onPress={() => {}}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    seperator: {
      marginTop: dimensions.rh(30),
      marginBottom: dimensions.rh(30),
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: colors.borderColor,
    },
    line2: {
      flex: 1,
      marginLeft: dimensions.rw(10),
      height: 1,
      backgroundColor: colors.borderColor,
    },
    seperatorText: {
      marginLeft: dimensions.rw(10),
      fontSize: dimensions.rf(11),
      color: colors.textColorFade,
      fontFamily: fonts.brandon,
      fontWeight: '700',
    },
    emailInput: {
      marginTop: dimensions.rh(20),
    },
    loginBtn: {
      marginTop: dimensions.rh(30),
    },
    logo: {
      width: dimensions.rw(160),
      height: dimensions.rh(32),
      resizeMode: 'contain',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    contentView: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: '5%',
      paddingVertical: dimensions.rh(20),
      borderTopLeftRadius: dimensions.rh(30),
      borderTopRightRadius: dimensions.rh(30),
    },
    conatiner: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 10,
      elevation: 10,
    },
    backContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: colors.black,
    },
  });
};

export default withTheme(SignInModal);
