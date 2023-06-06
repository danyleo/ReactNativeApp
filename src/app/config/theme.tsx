import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../libs/responsive';

const Colors: Colors = {
  primaryColor: '#255DFE',
  textColor: '#565656',
  textColorFade: '#A5A5A5',
  placeHolderColor: '#AFAFAF',
  screenBackground: '#fff',
  inputBackground: '#fff',
  inputTextColor: '#565656',
  disableButton: '#DBD9E1',
  green: '#87C534',
  borderColor: '#DDDDDD',
  buttonTextColor: '#fff',
  white: '#fff',
  black: '#000',
  grayBack: '#ECEBF1',
};

const FontSizes: FontSizes = {
  inputText: responsiveFontSize(15),
  inputNumber: responsiveFontSize(16),
  buttonLabel: responsiveFontSize(15),
  otpText: responsiveFontSize(30),
};

const Dimensions: Dimensions = {
  textInputRadius: responsiveHeight(25),
  buttonRadius: responsiveHeight(25),
  textInputHeight: responsiveHeight(50),
  textInputWidth: '100%',
  buttonHeight: responsiveHeight(50),
  rw: responsiveWidth,
  rh: responsiveHeight,
  rf: responsiveFontSize,
};

const Fonts: Fonts = {
  roboto: 'Roboto-Regular',
  brandon: 'BrandonText-Regular',
};

export {Colors, FontSizes, Dimensions, Fonts};
