import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import ListHeader from '../components/ListHeader';
import {colors} from '../themes/appTheme';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;

      setNumbers([...numbers, ...newArray]);
    }
  };

  const renderItem = (item: number) => {
    return (
      <View>
        <FadeInImage
          uri={`https://picsum.photos/id/${item}/1024/1024`}
          style={{
            width: '100%',
            height: 400,
          }}
        />
      </View>
    );
    {
      /* <Image
          source={{uri: `https://picsum.photos/id/${item}/500/400`}}
          style={{
            width: '100%',
            height: 400,
          }}
        /> */
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={numbers => numbers.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <ListHeader title="Infinite scroll screen" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={80} color={colors.orange} />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;
