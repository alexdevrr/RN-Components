import React from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';
import ListHeader from '../components/ListHeader';
import {colors} from '../themes/appTheme';
import ItemSeparator from '../components/ItemSeparation';

interface Props {
  title: string;
  data?: string[];
}

const SectionListScreen = () => {
  const DATA = [
    {
      title: 'Main dishes',
      data: [
        'Pizza',
        'Burger',
        'Risotto',
        'Pizza',
        'Burger',
        'Risotto',
        'Pizza',
        'Burger',
        'Risotto',
        'Pizza',
        'Burger',
        'Risotto',
      ],
    },
    {
      title: 'Sides',
      data: [
        'French Fries',
        'Onion Rings',
        'Fried Shrimps',
        'French Fries',
        'Onion Rings',
        'Fried Shrimps',
        'French Fries',
        'Onion Rings',
        'Fried Shrimps',
        'French Fries',
        'Onion Rings',
        'Fried Shrimps',
      ],
    },
    {
      title: 'Drinks',
      data: [
        'Water',
        'Coke',
        'Beer',
        'Water',
        'Coke',
        'Beer',
        'Water',
        'Coke',
        'Beer',
      ],
    },
    {
      title: 'Desserts',
      data: [
        'Cheese Cake',
        'Ice Cream',
        'Water',
        'Coke',
        'Beer',
        'Water',
        'Coke',
        'Beer',
        'Beer',
        'Water',
        'Coke',
        'Beer',
        'Cheese Cake',
        'Ice Cream',
        'Water',
        'Coke',
        'Beer',
        'Water',
        'Coke',
        'Beer',
        'Water',
        'Coke',
        'Beer',
        'Water',
        'Coke',
      ],
    },
  ];

  const Item = ({title}: Props) => {
    return (
      <View>
        <Text style={{color: '#FFFFFF', fontSize: 18}}>{title}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.marginGlobal}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index} // Food array
          ListHeaderComponent={() => <ListHeader title="Section List" />}
          renderSectionHeader={({section}) => {
            // Menu title
            return (
              <View style={{backgroundColor: colors.blueDark}}>
                <ListHeader title={section.title} color={colors.orange} />
              </View>
            );
          }}
          ListFooterComponent={() => (
            <ListHeader title={'Menus: ' + DATA.length} color={colors.orange} />
          )}
          stickySectionHeadersEnabled
          ItemSeparatorComponent={() => (
            <ItemSeparator borderColor={colors.skyBlue} borderBottomWidth={1} />
          )}
          SectionSeparatorComponent={() => (
            <ItemSeparator borderColor={colors.orange} borderBottomWidth={3} />
          )}
          renderItem={({item}) => <Item title={item} />}
          renderSectionFooter={({section}) => (
            <ListHeader
              color={colors.skyBlue}
              title={'Total: ' + section.data.length}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleMenus: {
    fontWeight: 'bold',
    color: colors.orange,
    fontSize: 22,
    marginTop: 7,
  },

  marginGlobal: {
    marginHorizontal: 20,
  },
});

export default SectionListScreen;
