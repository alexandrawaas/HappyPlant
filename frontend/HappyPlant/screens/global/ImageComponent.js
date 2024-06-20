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

  const renderContent = useCallback(() => {
    let res
    if(raw) {
      res = <Image source={imageData} style={{ ...styles.default, ...styles.image, resizeMode: 'contain' }} />
    } else if(!raw && loading) {
      res = <ActivityIndicator size = "large" color = "#42f590" style = { style? { ...style, resizeMode: 'contain' } : {...styles.default, resizeMode: 'contain' }} />
    } else if(!raw && !loading && imageBase64) {
      res = <Image source={{ uri: imageBase64 }} style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }} />
    }
    return res
  }, [loading, raw, imageBase64])

  return (
    <View>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    width: 200,
    height: 200,
  },
});

export default ImageComponent;