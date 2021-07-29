import React from 'react';
import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import useAnimations from '../hooks/useAnimations';
import {useState} from 'react';
import {colors} from '../themes/appTheme';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimations();

  const [isloading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isloading && (
        <ActivityIndicator
          size={70}
          color={colors.orange}
          // Para que se ponga en el centro de la imagen
          style={{
            position: 'absolute',
          }}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoad={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;
