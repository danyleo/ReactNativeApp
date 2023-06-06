import React from 'react';
import {withTheme} from 'react-native-paper';
import {StyleSheet, View, Text, Image} from 'react-native';

interface SocialButtonProps {
  label: string;
  icon: any;
  onPress: any;
  theme: AppTheme;
  style?: any;
}

function LWSocialButton(props: SocialButtonProps) {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);

  return (
    <View style={[styles.container, props.style]}>
      <Image source={props.icon} style={styles.icon} />
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
}

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    icon: {
      width: dimensions.rh(22),
      height: dimensions.rh(22),
      resizeMode: 'contain',
    },
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      height: dimensions.buttonHeight,
      borderWidth: 1,
      borderColor: colors.placeHolderColor,
      borderRadius: dimensions.textInputRadius,
      paddingHorizontal: dimensions.rw(15),
    },
    text: {
      flex: 1,
      marginLeft: dimensions.rw(10),
      fontSize: fontSizes.buttonLabel,
      color: colors.black,
      fontFamily: fonts.brandon,
      textAlign: 'center',
    },
  });
};

export default withTheme(LWSocialButton);
