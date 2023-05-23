import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home';
import VenuesMap from '../venues/venues-map';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VenuesMap" component={VenuesMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
