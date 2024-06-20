import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { API_URL } from '../../config';
import { getAuthToken } from "../../utils/AuthTokenUtil";
import { fetchImage } from '../../utils/ApiService';


const ImageComponent = ({ imageId, style, raw = false, imageData }) => {
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!raw) {
      if (!imageId) {
        setLoading(false);
        return;
      }

      fetchImage(`/images/${imageId}`, 'GET', null, (response) => {
        setImageBase64(response);
        setLoading(false);
      })
    }
  }, [imageId, raw]);

  console.log({ uri: imageBase64 })
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#42f590" style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }} />
      </View>
    );
  }

  return (
    <View>{raw
      ? <Image source={imageData} style={{ ...styles.default, ...styles.image, resizeMode: 'contain' }} />
      : {
        loading
          ?<ActivityIndicator size = "large" color = "#42f590" style = { style? { ...style, resizeMode: 'contain'
      } : {...styles.default, resizeMode: 'contain' }} />
      : {imageBase64 && <Image source={{ uri: imageBase64 }} style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }} />}
            }}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    width: 200,
    height: 200,
  },

});

export default ImageComponent;