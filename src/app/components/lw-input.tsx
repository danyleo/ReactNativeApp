import React from 'react';
import {withTheme} from 'react-native-paper';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps {
  label: string;
  value: string;
  iconName: string;
  onChangeText: any;
  textStyle?: any;
  theme: AppTheme;
  style?: any;
}

function LWInput(props: InputProps) {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);

  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.iconName} size={18} color={colors.placeHolderColor} />
      <TextInput
        style={[styles.textInput, props.textStyle]}
        placeholder={props.label}
      />
    </View>
  );
}

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      height: dimensions.textInputHeight,
      borderWidth: 1,
      borderColor: colors.borderColor,
      borderRadius: dimensions.textInputRadius,
      paddingHorizontal: dimensions.rw(15),
    },
    textInput: {
      marginLeft: dimensions.rw(10),
      flex: 1,
      height: dimensions.textInputHeight,
      fontSize: fontSizes.inputText,
      fontFamily: fonts.brandon,
      fontWeight: '600',
    },
  });
};

export default withTheme(LWInput);
