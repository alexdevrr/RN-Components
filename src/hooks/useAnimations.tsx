import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimations = () => {
  const opacity = useRef(new Animated.Value(0.2)).current;
  const position = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const easing = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initPosition: number) => {
    position.setValue(0);

    Animated.timing(position, {
      toValue: initPosition,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    position,
    fadeOut,
    easing,
    startMoving,
  };
};

export default useAnimations;
