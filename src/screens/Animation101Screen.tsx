import React from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import useAnimations from '../hooks/useAnimations';
import ButtonAnimation from '../components/ButtonAnimation';
import {colors} from '../themes/appTheme';

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
          color={colors.orange}
          backgroundC={colors.blueDark}
          borderC={colors.orange}
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
    backgroundColor: colors.orange,
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.blueDark,
  },

  containerBtns: {
    marginTop: 15,
    flexDirection: 'row',
  },

  textBtn: {
    color: colors.orange,
    fontWeight: 'bold',
  },

  btnFadeIn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blueDark,
    width: 90,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.orange,
    marginRight: 10,
  },
});

export default Animation101Screen;
