import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueDardBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  blueDardBox: {
    backgroundColor: '#293241',
    width: 150,
    height: 150,
  },
});

export default Animation102Screen;
