import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const deafultStyle = StyleSheet.create({
    default: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
  });

const ImageComponent = (url, style) => {
  return (
    <View>
        <Image
        style={style != null ? style : deafultStyle.default}
        source={{
          uri: {url},
        }}
      />
    </View>
  );
};

export default DisplayAnImage;