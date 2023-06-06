import React, {useState} from 'react';
import {withTheme} from 'react-native-paper';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

interface LWLoginToggleProps {
  onChange: any;
  theme: AppTheme;
  style?: any;
}

function LWLoginToggle(props: LWLoginToggleProps) {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);

  const [isLogin, setIsLogin] = useState(true);

  const left = () => {
    if (isLogin) {
      return (
        <View style={styles.button}>
          <Text style={styles.textActive}>Login</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.buttonNone}>
          <Text style={styles.text}>Login</Text>
        </View>
      );
    }
  };

  const right = () => {
    if (!isLogin) {
      return (
        <View style={styles.button2}>
          <Text style={styles.textActive}>Sign up</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.buttonNone}>
          <Text style={styles.text}>Sign up</Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        setIsLogin(!isLogin);
      }}
      style={[styles.container, props.style]}>
      {left()}
      {right()}
    </TouchableOpacity>
  );
}

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    buttonNone: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
    },
    button: {
      width: '50%',
      height: '100%',
      borderRadius: dimensions.textInputRadius,
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    button2: {
      width: '50%',
      height: '100%',
      borderRadius: dimensions.textInputRadius,
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    container: {
      flexDirection: 'row',
      width: '100%',
      padding: 4,
      backgroundColor: colors.grayBack,
      height: dimensions.textInputHeight,
      borderRadius: dimensions.textInputRadius,
    },
    text: {
      fontSize: fontSizes.buttonLabel,
      textAlign: 'center',
      color: colors.textColorFade,
      fontFamily: fonts.brandon,
      fontWeight: '600',
    },
    textActive: {
      fontSize: fontSizes.buttonLabel,
      textAlign: 'center',
      color: colors.primaryColor,
      fontFamily: fonts.brandon,
      fontWeight: '600',
    },
  });
};

export default withTheme(LWLoginToggle);
