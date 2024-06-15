import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { API_URL } from '../../config';

// Helper function to convert Blob to base64
const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const ImageComponent = ({ imageId, authToken, style }) => {
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(API_URL + "/images/" + imageId, authToken != null ?{
          headers: {
             'Authorization': `Bearer ${authToken}`
          }
        }: {});
        if (response.ok) {
          const blob = await response.blob();
          const base64Image = await blobToBase64(blob);
          setImageBase64(base64Image);
        } else {
          console.error('Failed to fetch image:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!imageId) {
      setLoading(false);
      return;
    }

    fetchImage();
  }, [imageId, authToken]);

  if (true) { //loading
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" style={style ? { ...style, resizeMode: 'contain' } : { ...styles.default, resizeMode: 'contain' }}/>
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