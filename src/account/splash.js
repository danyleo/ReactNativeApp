import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, LogBox} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors, Fonts} from '../app/config/theme';
import {setVenues} from '../venues/venues-slice';

const TEXTS = ['Hi,', 'This is Daniyal', 'Senior React Native Developer'];

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const [fadeInOutAnim] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   fetch('https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues')
  //     .then(response => response.json())
  //     .then(data => {
  //       dispatch(setVenues(data.results));
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    animateFadeInOut();
  }, [currentIndex]);

  const animateFadeInOut = () => {
    Animated.sequence([
      Animated.timing(fadeInOutAnim, {
        toValue: 1,
        duration: 300, // Duration for fade-in animation
        useNativeDriver: true,
      }),
      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 300, // Duration for fade-out animation
        useNativeDriver: true,
        delay: 500, // Delay before starting the fade-out animation
      }),
    ]).start(() => {
      // Animation completed
      const nextIndex = currentIndex + 1;
      if (nextIndex < TEXTS.length) {
        setCurrentIndex(nextIndex);
      } else {
        navigation.navigate('BottomStack');
      }
    });
  };

  const currentText = TEXTS[currentIndex];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Text style={[{opacity: fadeInOutAnim}, styles.text]}>
        {currentText}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: Colors.textColor,
    fontFamily: Fonts.brandon,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Splash;
