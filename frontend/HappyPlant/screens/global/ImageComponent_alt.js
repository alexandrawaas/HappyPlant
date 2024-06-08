import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import { API_URL } from '../../config';



const ImageComponent = (props) => {
  return (
    <View>
      <Image
            style={props.style!=null?{...props.style, resizeMode: 'contain'}:{...styles.default, resizeMode: 'contain'}}
            source={{
            uri: API_URL + "/images/" + props.imageId,
            method: 'GET',
            }}
        >
    </Image>
    </View>
  );
};



export default ImageComponent;

const styles = StyleSheet.create({
  default: {
      width: 200,
      height: 200,
  },
});