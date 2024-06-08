import {View, Text, StyleSheet, Pressable} from "react-native";
import WindowSelectionGrid from "./room/WindowSelectionGrid";
import { useEffect, useState } from "react";
import { API_URL } from '../config';

export default function PlaceWindow({ route, navigation }) {
    const { result } = route.params;
    const [pixels, setPixels] = useState(null)

    const handleDone = async () =>{
        if(pixels != null){
            //TODO authToken????
            const pixelValues = pixels.map(p => p.item);
            //console.log(JSON.stringify( pixelValues),);
           try {
                
                const response = await fetch(`${API_URL}/rooms/${result.id}/windows`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGFtcGxlLnVzZXJAdGVzdC5jb20iLCJleHAiOjE3MTc4OTE3NzEsInVzZXJJZCI6ImNkNDE3MTg2LTFmNDUtNGY2NS1hNWYyLTE2NmIzMmFmMTZjYSIsImlhdCI6MTcxNzg4OTE3OX0.adR5wmg1X9CflDRRmptRqRwkDA3LAlnoRBJ_y1PULzIgcWAxY0KcTkIz7w3hI6dkqq16U1gzT1pcUUs2lPlM7Q`,
                  },
                  body: JSON.stringify( pixelValues),
                     
                });
            
                if (response.ok) {
                  const result  = await response.json();
                  navigation.navigate('Räume');
                } else {
                  console.error('Failed to post data:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error posting data:', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{result.name}</Text>
            <Text style={styles.text}>Wählen Sie die Position Ihrer Fenster. Tippen Sie dafür auf die Kästchen am Rand des Raumes.</Text>
            <WindowSelectionGrid room={result} callback={setPixels}></WindowSelectionGrid>
            <Pressable
                        style={styles.button}
                        onPress={handleDone}
                        title="Raum erstellen">
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