import {MD3Theme} from 'react-native-paper/lib/typescript/src/types';
import {
  responsiveWidth, 
  responsiveHeight, 
  responsiveFontSize 
} from './src/app/libs/responsive';


declare global {
    interface AppTheme extends MD3Theme {
      app: {
        colors: Colors,
        fontSizes: FontSizes,
        fonts: Fonts,
        dimensions: Dimensions,
      },
      }

      interface Colors  {
        primaryColor: string,
        textColor: string,
        textColorFade: string,
        screenBackground: string,
        inputBackground: string,
        inputTextColor: string,
        disableButton: string,
        green: string,
        borderColor: string,
        placeHolderColor: string,
        buttonTextColor: string,
        white: string,
        black: string,
        grayBack: string
      };
      
      interface FontSizes  {
        inputText: number,
        inputNumber: number,
        buttonLabel: number,
        otpText: number,
      }
      
      interface Dimensions  {
        textInputRadius: number,
        buttonRadius: number,
        textInputHeight: number | string,
        textInputWidth: number | string,
        buttonHeight: number | string,
        rw: Function,
        rh: Function,
        rf: Function
      }

      interface Fonts  {
        roboto: string,
        brandon: string,
      }
  }
  
  // Adding this exports the declaration file which Typescript/CRA can now pickup:
  export {}