import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ListHeader from '../components/ListHeader';
import CustomSwitch from '../components/CustomSwitch';

const Animation103Screen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <>
      <ListHeader title="Switch Options" />
      <View style={styles.container}>
        <CustomSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Animation103Screen;
