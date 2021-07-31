import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ListHeader from '../components/ListHeader';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const Animation103Screen = () => {
  const {theme} = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <ListHeader title="Switch Options" />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{...styles.textSwitches, color: theme.colors.text}}>
          isActive
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{...styles.textSwitches, color: theme.colors.text}}>
          isHungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{...styles.textSwitches, color: theme.colors.text}}>
          isHappy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.textState}>{JSON.stringify(state, null, 3)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  textState: {
    fontSize: 24,
    marginTop: 20,
    color: '#FFFFFF',
  },

  textSwitches: {
    fontSize: 25,
    color: '#FFFFFF',
  },
});

export default Animation103Screen;
