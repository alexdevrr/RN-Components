import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.2)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.orangeBox, opacity}} />
      <View style={styles.containerBtns}>
        <TouchableOpacity onPress={fadeOut} style={styles.btnFadeIn}>
          <Text style={{color: '#ee6c4d', fontWeight: 'bold'}}>FadeOut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={fadeIn}
          style={{
            ...styles.btnFadeIn,
            backgroundColor: '#ee6c4d',
            borderColor: '#293241',
          }}>
          <Text style={{color: '#293241', fontWeight: 'bold'}}>FadeIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
