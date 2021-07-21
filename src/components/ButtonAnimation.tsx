import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles101} from '../screens/Animation101Screen';

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
  color = '#293241',
  backgroundC = '#ee6c4d',
  borderC = '#293241',
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
