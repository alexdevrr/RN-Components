import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import ListHeader from '../components/ListHeader';

import prompt from 'react-native-prompt-android';

import {colors, styles as stylesGenerals} from '../themes/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'This is the alert message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        // This option is to exit, by pressing anywhere on the screen
        cancelable: true,
      },
    );

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={stylesGenerals.gloablMargin}>
      <ListHeader title="Alerts Options" />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.btnAlert} onPress={showAlert}>
          {/* <Button title="Show message" onPress={showAlert} /> */}
          <Text style={styles.textBtn}>Show message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAlert} onPress={showPrompt}>
          {/* <Button title="Show message" onPress={showAlert} /> */}
          <Text style={styles.textBtn}>Show prompt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnAlert: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginRight: 10,
  },

  textBtn: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default AlertScreen;
