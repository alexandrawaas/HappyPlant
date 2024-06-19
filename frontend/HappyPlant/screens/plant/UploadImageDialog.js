import React, { useState } from 'react';
import { View, Image, Button, Text,  Platform, StyleSheet } from 'react-native';
import { fetchURLUploadImage } from '../../utils/ApiService';



const UploadImageDialog = ({navigation, route}) => {
  const {photo, plantId} = route.params;

  const handleUploadPhoto = () => {
    fetchURLUploadImage(plantId, createFormData(photo));
    navigation.goBack()
  };

  const createFormData = () => {
    const data = new FormData();
    const uri = photo.uri;
    const uriParts = uri.split('.');
    const fileType = uriParts[uriParts.length - 1];
  
    data.append('file', {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });
  
    return data;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
    </View>
  );
};

export default UploadImageDialog;