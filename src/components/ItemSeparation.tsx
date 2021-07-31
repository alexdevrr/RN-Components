import React from 'react';
import {View} from 'react-native';

interface Props {
  borderBottomWidth?: number;
  marginVertical?: number;
  borderColor?: string;
}

const ItemSeparator = ({
  borderBottomWidth = 2,
  marginVertical = 7,
  borderColor = 'red',
}: Props) => {
  return (
    <View
      style={{
        borderBottomWidth,
        marginVertical,
        borderColor,
      }}
    />
  );
};

export default ItemSeparator;
