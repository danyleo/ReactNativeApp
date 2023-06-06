import React from 'react';
import {Button, withTheme} from 'react-native-paper';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: any;
  style?: any;
  disabled?: boolean;
  textColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  theme: AppTheme;
}

function LWButton(props: ButtonProps) {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);

  let backColor = props.disabled ? colors.disableButton : colors.primaryColor;

  return (
    <Button
      mode="contained"
      textColor={props.disabled ? colors.white : colors.buttonTextColor}
      style={[styles.customStyle, {backgroundColor: backColor}, props.style]}
      labelStyle={props.labelStyle ? props.labelStyle : styles.labelStyle}
      onPress={props.onPress}>
      {props.label}
    </Button>
  );
}

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    labelStyle: {
      fontSize: fontSizes.buttonLabel,
      textAlign: 'center',
      fontFamily: fonts.brandon,
      color: colors.buttonTextColor,
    },
    customStyle: {
      borderRadius: dimensions.buttonRadius,
      backgroundColor: colors.primaryColor,
      height: dimensions.buttonHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default withTheme(LWButton);
