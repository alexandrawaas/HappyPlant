import * as ImagePicker from 'expo-image-picker';
import { useActionSheet } from '@expo/react-native-action-sheet';
import {useState, useCallback} from "react";


export function useImageSelecetion() {
    const [imageData, setImageData] = useState(undefined);
    const [disableSend, setDisableSend] = useState(false);
    const { showActionSheetWithOptions } = useActionSheet();

    const showActionSheet = useCallback(() => {
        const options = ['Neues Foto aufnehmen', 'Foto aus Bibliothek aussuchen', 'Abbrechen'];
        const cancelButtonIndex = 2;
    
        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            async (buttonIndex) => {
                if (buttonIndex === 0) {
                    await handleTakePhoto();
                } else if (buttonIndex === 1) {
                    await handleChoosePhoto();
                }
            }
        );
    }, []);

    const handleChoosePhoto = async () => {
        setDisableSend(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [1, 1],
            quality: 0.2,
        });
    
        if (!result.canceled) {
            setImageData(result.assets[0])
        }
        setDisableSend(false);
    };
    
    const handleTakePhoto = async () => {
        setDisableSend(true);
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.2,
        });
    
        if (!result.canceled) {
            setImageData(result.assets[0])
        }
        setDisableSend(false);
    };

    return [imageData, disableSend, showActionSheet];
  }

