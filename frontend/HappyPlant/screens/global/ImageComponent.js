import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { API_URL } from '../../config';
import { getAuthToken } from "../../utils/AuthTokenUtil";
import { fetchImage } from '../../utils/ApiService';


const ImageComponent = ({ imageId, style }) => {
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageId) {
      setLoading(false);
      return;
    }

    fetchImage(`/images/${imageId}`, 'GET', null, (response) =>{
        setImageBase64(response);
        setLoading(false);
    })

    
  }, [imageId]);


  if (loading) { 
    return (
      <View>
        <ActivityIndicator size="large" color="#42f590" style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }}/>
      </View>
    );
  }

  return (
    <View>
      {imageBase64 && <Image source={{ uri: imageBase64 }} style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }} />}
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