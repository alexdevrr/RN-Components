import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles101} from '../screens/Animation101Screen';
import {colors} from '../themes/appTheme';

interface Props {
  animation: () => void;
  textBtn: string;
  color?: string;
  backgroundC?: string;
  borderC?: string;
}

const ButtonAnimation = ({
  animation,
  textBtn,
  color = colors.blueDark,
  backgroundC = colors.orange,
  borderC = colors.blueDark,
}: Props) => {
  return (
    <>
      <TouchableOpacity
        onPress={animation}
        style={{
          ...styles101.btnFadeIn,
          backgroundColor: backgroundC,
          borderColor: borderC,
        }}>
        <Text style={{...styles101.textBtn, color}}>{textBtn}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonAnimation;
