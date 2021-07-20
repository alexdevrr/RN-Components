import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MenuItem} from '../interfaces/flatListInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(menuItem.component)}
      activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.containerTextAndIcon}>
          <Icon
            name={menuItem.icon}
            size={30}
            color="#293241"
            style={styles.icon}
          />
          <Text style={styles.textOption}>{menuItem.name}</Text>
        </View>

        <View>
          <Icon
            name="chevron-forward-outline"
            size={30}
            color="#293241"
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerTextAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },

  textOption: {
    color: '#ee6c4d',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatListMenuItem;
