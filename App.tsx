import {enableLatestRenderer} from 'react-native-maps';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import AppStack from './src/app/app-stack';

enableLatestRenderer();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

export default App;
