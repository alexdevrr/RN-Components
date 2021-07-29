import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import ListHeader from '../components/ListHeader';
import {useForm} from '../hooks/useForm';
import {colors} from '../themes/appTheme';

import {styles as stylesGlobal} from '../themes/appTheme';

const TextInputScreen = () => {
  const {onChange, statecurrent, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      {/* OnFocus input */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={stylesGlobal.gloablMargin}>
            <ListHeader title="TextInputs Options" />
            <TextInput
              style={styles.input}
              onChangeText={value => onChange(value, 'name')}
              placeholder="Type your name"
              placeholderTextColor="#C1C1C1"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={styles.input}
              onChangeText={value => onChange(value, 'email')}
              placeholder="Type your email"
              placeholderTextColor="#C1C1C1"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={value => onChange(value, 'phone')}
              placeholder="Type your phone"
              placeholderTextColor="#C1C1C1"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              onChangeText={value => onChange(value, 'password')}
              placeholder="Type your password"
              placeholderTextColor="#C1C1C1"
              autoCorrect={false}
              autoCapitalize="none"
              // It used so that the password is not displayed
              secureTextEntry={true}
            />

            <View
              style={{
                marginVertical: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
                Suscribed
              </Text>

              <CustomSwitch
                isOn={isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />
            </View>

            <Text style={{color: 'white', fontSize: 30}}>
              {JSON.stringify(statecurrent, null, 5)}
            </Text>
            {/* Finish global margin */}
          </View>
          <View style={{height: 100}} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.orange,
    height: 40,
    borderRadius: 5,
    color: '#FFFFFF',
    marginVertical: 10,
  },
});

export default TextInputScreen;
