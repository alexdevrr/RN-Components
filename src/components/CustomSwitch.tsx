import React, {useContext, useState} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const {theme} = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: theme.colors.text, true: theme.colors.primary}}
      // thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      thumbColor={isEnabled ? theme.colors.text : theme.colors.primary}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
