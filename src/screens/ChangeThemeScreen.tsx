import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ListHeader from '../components/ListHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme} = useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <ListHeader title="ChangeThemeScreen" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btnDarkWhite}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={{color: '#000000', fontSize: 16}}>Dark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnDarkWhite}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={{color: '#000000', fontSize: 16}}>Litght</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnDarkWhite: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffFff',
    width: 120,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    marginRight: 10,
    marginBottom: 10,
  },
});

export default ChangeThemeScreen;
