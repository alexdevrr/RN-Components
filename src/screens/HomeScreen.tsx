import React from 'react';
import {View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';

import {menuItems} from '../data/menuItem';
import ListHeader from '../components/ListHeader';
import {styles} from '../themes/appTheme';

const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 3,
          marginVertical: 7,
          borderColor: '#293241',
        }}
      />
    );
  };

  return (
    <View
      style={{
        ...styles.gloablMargin,
      }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<ListHeader title="Menu Options" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
