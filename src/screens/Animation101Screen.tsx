import React from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import useAnimations from '../hooks/useAnimations';
import ButtonAnimation from '../components/ButtonAnimation';

const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, easing, startMoving} =
    useAnimations();

  return (
    <View style={styles101.container}>
      <Animated.View
        style={{
          ...styles101.orangeBox,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />

      <View style={styles101.containerBtns}>
        <ButtonAnimation animation={fadeOut} textBtn="FadeOut" />

        <ButtonAnimation
          animation={fadeIn}
          textBtn="FadeIn"
          color="#ee6c4d"
          backgroundC="#293241"
          borderC="#ee6c4d"
        />

        <ButtonAnimation
          textBtn="Restart"
          animation={() => startMoving(-100)}
          color="#98c1d9"
          backgroundC="#3d5a80"
          borderC="#98c1d9"
        />

        <ButtonAnimation
          textBtn="Easing"
          animation={easing}
          color="#3d5a80"
          backgroundC="#e0fbfc"
          borderC="#3d5a80"
        />
      </View>
    </View>
  );
};

export const styles101 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orangeBox: {
    backgroundColor: '#ee6c4d',
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#293241',
  },

  containerBtns: {
    marginTop: 15,
    flexDirection: 'row',
  },

  textBtn: {
    color: '#ee6c4d',
    fontWeight: 'bold',
  },

  btnFadeIn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#293241',
    width: 90,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ee6c4d',
    marginRight: 10,
  },
});

export default Animation101Screen;
