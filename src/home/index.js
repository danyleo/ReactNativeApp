import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {setVenues} from '../venues/venues-slice';

const TEXTS = [
  'Hi,',
  'This is Daniyal',
  'Senior React Native Developer',
  'Loading Venues...',
];

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [fadeInOutAnim] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues')
      .then(response => response.json())
      .then(data => {
        dispatch(setVenues(data.results));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    animateFadeInOut();
  }, [currentIndex]);

  const animateFadeInOut = () => {
    Animated.sequence([
      Animated.timing(fadeInOutAnim, {
        toValue: 1,
        duration: 500, // Duration for fade-in animation
        useNativeDriver: true,
      }),
      Animated.timing(fadeInOutAnim, {
        toValue: 0,
        duration: 500, // Duration for fade-out animation
        useNativeDriver: true,
        delay: 1000, // Delay before starting the fade-out animation
      }),
    ]).start(() => {
      // Animation completed
      const nextIndex = currentIndex + 1;
      if (nextIndex < TEXTS.length) {
        setCurrentIndex(nextIndex);
      } else {
        navigation.navigate('VenuesMap');
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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
