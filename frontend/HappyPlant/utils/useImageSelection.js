import * as ImagePicker from 'expo-image-picker';
import { useActionSheet } from '@expo/react-native-action-sheet';
import {useEffect, useState, useCallback} from "react";
import { fetchURL, fetchURLUploadImage } from "./ApiService";

export function useImageSelecetion() {
    const [imageData, setImageData] = useState(undefined);
    const { showActionSheetWithOptions } = useActionSheet();

    const showActionSheet = useCallback(() => {
        const options = ['Neues Foto aufnehmen', 'Foto aus Bibliothek aussuchen', 'Abbrechen'];
        const cancelButtonIndex = 2;
    
        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            (buttonIndex) => {
                if (buttonIndex === 0) {
                    handleTakePhoto();
                } else if (buttonIndex === 1) {
                    handleChoosePhoto();
                }
            }
        );
    }, []);

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [1, 1],
            quality: 1,
        });
    
        if (!result.canceled) {
            setImageData(result.assets[0])
        }
    };
    
    const handleTakePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
    
        if (!result.canceled) {
            setImageData(result.assets[0])
        }
    };

    return [imageData, showActionSheet];
  }

