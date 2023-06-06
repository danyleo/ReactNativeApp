import * as React from 'react';
import {withTheme} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Booking from '../booking';
import Home from '../home';
import Chat from '../chat';
import Profile from '../profile';
import CoWork from '../co-work';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomStack = (props: any) => {
  const {theme} = props;
  const {colors, dimensions, fontSizes} = theme.app;
  const styles = useStyles(theme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.textColorFade,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tab.Screen
        name="CoWork"
        component={CoWork}
        options={{
          tabBarLabel: 'Co-work',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../app/assets/map.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={Booking}
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../app/assets/calendar.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../app/assets/home.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../app/assets/comment.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../app/assets/user.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const useStyles = (theme: AppTheme) => {
  const {colors, dimensions, fontSizes, fonts} = theme.app;

  return StyleSheet.create({
    tabBar: {
      height: dimensions.rh(90),
      borderTopLeftRadius: dimensions.rh(25),
      borderTopRightRadius: dimensions.rh(25),
    },
    tabBarLabel: {
      fontSize: dimensions.rf(13),
      textAlign: 'center',
      fontFamily: fonts.brandon,
      fontWeight: '700',
    },
    icon: {
      width: dimensions.rh(19),
      height: dimensions.rh(19),
      resizeMode: 'contain',
    },
  });
};

export default withTheme(BottomStack);
