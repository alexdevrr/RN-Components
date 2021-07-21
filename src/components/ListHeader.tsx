import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}

const ListHeader = ({title}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.gloablMargin, marginTop: top + 20}}>
      <Text style={{...styles.title, marginBottom: 20}}>{title}</Text>
    </View>
  );
};

export default ListHeader;
