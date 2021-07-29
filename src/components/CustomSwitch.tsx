import React, {useState} from 'react';
import {Switch} from 'react-native';
import {colors} from '../themes/appTheme';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#FFFFFF', true: colors.orange}}
      // thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      thumbColor={isEnabled ? '#FFFFFF' : colors.orange}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
