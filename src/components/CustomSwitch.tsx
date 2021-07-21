import React, {useState} from 'react';
import {Switch} from 'react-native';
import {colors} from '../themes/appTheme';

interface Props {
  isEnabled: boolean;
  toggleSwitch: () => void;
}

const CustomSwitch = ({isEnabled, toggleSwitch}: Props) => {
  return (
    <Switch
      trackColor={{false: colors.blueDark, true: colors.orange}}
      // thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
      thumbColor={isEnabled ? colors.blueDark : colors.orange}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
