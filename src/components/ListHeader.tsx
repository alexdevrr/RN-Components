import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
  color?: string;
}

const ListHeader = ({title, color = '#ee6c4d'}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20}}>
      <Text style={{...styles.title, color, marginBottom: 20}}>{title}</Text>
    </View>
  );
};

export default ListHeader;
