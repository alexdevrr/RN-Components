import React, {useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import ListHeader from '../components/ListHeader';
import {colors, styles} from '../themes/appTheme';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      setData('Hello world');
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={colors.orange}
          colors={[colors.skyBlue, colors.blueDark, '#8fff07']}
        />
      }>
      <View style={styles.gloablMargin}>
        <ListHeader title="Pull to refresh" />

        {data && <ListHeader title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
