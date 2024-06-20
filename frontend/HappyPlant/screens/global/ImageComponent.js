import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
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

  if (raw) {
    return (<View>
      <Image source={imageData} style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }} />
    </View>)
  } else if (!raw && loading) {
    return (<View>
      <ActivityIndicator size="large" color="#42f590" style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }} />
    </View>)
  } else if (!raw && !loading && imageBase64) {
    return (<View>
      <Image source={{ uri: imageBase64 }} style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }} />
    </View>)
  }
}

const styles = StyleSheet.create({
  default: {
    width: 200,
    height: 200,
  },
});

export default ImageComponent;