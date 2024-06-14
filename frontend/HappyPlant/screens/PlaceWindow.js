import {View, Text, StyleSheet, Pressable, BackHandler} from "react-native";
import WindowSelectionGrid from "./room/WindowSelectionGrid";
import { useEffect, useState } from "react";
import { API_URL } from '../config';
import { fetchURL } from "../utils/ApiService";
import { useRoute } from "@react-navigation/native";

export default function PlaceWindow({ navigation }) {
    const route = useRoute();
    const [room, setRoom] = useState()
    const [pixels, setPixels] = useState(null)

    useEffect(() => {
      setRoom(route.params.roomData)
    }, [route])

    useEffect(() => {
        const backAction = async () => {
            try {
                //console.log(result.id);
                const response = await fetch(`${API_URL}/rooms/${room?.id}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGFtcGxlLnVzZXJAdGVzdC5jb20iLCJleHAiOjE3MTgyNzkwNjMsInVzZXJJZCI6IjQ2Yzg3MGY2LTgwNTQtNDQ3Zi05ZDZiLWQxMzc0YWE2YmUzZSIsImlhdCI6MTcxODI3NjQ3MX0.1vF6Baon_EecBaDzTRfm0AMbfj1xYH4w2SudkmUF2ybQhBw8g5liqDCIDds2bMaKZnWykzJy5kPQOM8pJTm0dQ`
                  }, 
                });
            
                if (response.ok) {

                  //navigation.navigate('Räume');
                } else {
                  console.error('Failed to post data:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error posting data:', error);
            }
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);

    const handleDone = async () =>{
        if(pixels != null){
            const pixelValues = pixels.map(p => p.item);
            console.log(pixelValues)
            fetchURL(`/rooms/${room?.id}/windows`, 'PUT', pixelValues, () => {
                navigation.navigate('Räume');
            });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{room?.name}</Text>
            <Text style={styles.text}>Wählen Sie die Position Ihrer Fenster. Tippen Sie dafür auf die Kästchen am Rand des Raumes.</Text>
            <WindowSelectionGrid room={room} callback={setPixels} />
            <Pressable
              style={styles.button}
              onPress={handleDone}
              title="Raum erstellen"
            >
              <Text style={styles.buttonText}>Raum erstellen</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
    },
    heading: {
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    text: {
        fontSize:10,
        fontWeight: "bold",
        marginBottom: 16,
    },
    button:{
        padding: 20,
        marginHorizontal: 20,
        minWidth: 120,
        backgroundColor: '#bef5b5',
        borderRadius: 50,
        borderColor: '#b0e4a7',
        borderWidth: 2,
    },
    buttonText:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
});
