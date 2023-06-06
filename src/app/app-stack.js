import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomStack from './bottom-stack';
import Splash from '../account/splash';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomStack" component={BottomStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
