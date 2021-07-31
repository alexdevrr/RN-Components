import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';

import {menuItems} from '../data/menuItem';
import ListHeader from '../components/ListHeader';
import {styles} from '../themes/appTheme';
import ItemSeparator from '../components/ItemSeparation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.gloablMargin,
      }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={
          <ListHeader title="Menu Options" color={theme.colors.primary} />
        }
        ItemSeparatorComponent={() => (
          <ItemSeparator borderColor={theme.colors.text} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
