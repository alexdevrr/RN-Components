import React, {useContext, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageSourcePropType,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ListHeader from '../components/ListHeader';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {items} from '../data/data-slide';
import {StyleSheet, Animated} from 'react-native';
import {useState} from 'react';
import {colors} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

import useAnimations from '../hooks/useAnimations';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/themeContext/ThemeContext';

// Del Navigation.tsx
interface Props extends StackScreenProps<any, any> {}

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const {width: totalWidth} = Dimensions.get('screen');

const SlideshowScreen = ({navigation}: Props) => {
  const {theme} = useContext(ThemeContext);

  const [activeSlide, setActiveSlide] = useState(0);

  const {fadeIn, opacity} = useAnimations();

  const isActive = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          backgroundColor: theme.colors.background,
          flex: 1,
          justifyContent: 'center',
          padding: 40,
          alignItems: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 300, resizeMode: 'center'}}
        />

        <View>
          <Text style={{...styles.textTitle, color: theme.colors.primary}}>
            {item.title}
          </Text>
          <Text style={{...styles.textDesc, color: theme.colors.text}}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: 20,
      }}>
      <View style={{marginHorizontal: 20}}>
        <ListHeader title="Slideshow" />
      </View>
      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={totalWidth}
        itemWidth={totalWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveSlide(index);
          if (index == 2) {
            fadeIn();
            // solo se activa si está en la ultima pagina
            isActive.current = true;
          }
        }}
      />

      {/* style={{left: -150, height: 100}} */}

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 40,
          paddingBottom: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          containerStyle={{backgroundColor: theme.colors.background}}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 3,
            backgroundColor: colors.orange, // color bolita
          }}
          inactiveDotStyle={{
            backgroundColor: theme.colors.text, // color bolita desact
          }}
          inactiveDotOpacity={0.8}
          inactiveDotScale={0.6}
        />

        <Animated.View
          style={{
            opacity,
          }}>
          <TouchableOpacity
            style={{
              ...styles.btnOrange,
              backgroundColor: theme.colors.notification,
            }}
            activeOpacity={0.8}
            onPress={() => {
              // solo se puede presionar si está activo
              if (isActive.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Text style={{...styles.textBtnOrange, color: theme.colors.border}}>
              Entrar
              <Icon
                name="chevron-forward-outline"
                size={20}
                color={theme.colors.border}
              />
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    color: colors.orange,
    // color: '#8b3cd4',
  },

  textDesc: {
    fontSize: 15,
    textAlign: 'justify',
  },

  btnOrange: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 50,
    borderRadius: 10,
    borderColor: colors.orange,
  },

  textBtnOrange: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default SlideshowScreen;
