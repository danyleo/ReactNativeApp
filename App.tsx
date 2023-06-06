import {enableLatestRenderer} from 'react-native-maps';
import AppStack from './src/app/app-stack';
import {Provider as StoreProvider} from 'react-redux';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {store} from './src/app/store';
import {Colors, FontSizes, Dimensions, Fonts} from './src/app/config/theme';
import SignInModal from './src/account/sign-in-modal';

enableLatestRenderer();

const theme: AppTheme = {
  ...DefaultTheme,
  app: {
    colors: Colors,
    fontSizes: FontSizes,
    fonts: Fonts,
    dimensions: Dimensions,
  },
};

function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AppStack />
        <SignInModal />
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
