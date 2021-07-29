import React from 'react';
import {View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';

import {menuItems} from '../data/menuItem';
import ListHeader from '../components/ListHeader';
import {styles} from '../themes/appTheme';
import ItemSeparator from '../components/ItemSeparation';

const HomeScreen = () => {
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
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

export default HomeScreen;
