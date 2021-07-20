import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'earth-outline',
    component: 'Animation102Screen',
  },
];

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  // Render an objet for the list
  const renderListHeader = () => {
    return (
      <View>
        <Text style={{...styles.title, marginBottom: 20}}>Menu options</Text>
      </View>
    );
  };

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
    <View style={{...styles.gloablMargin, flex: 1, marginTop: top + 20}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
