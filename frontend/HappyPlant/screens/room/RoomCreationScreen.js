import {View, Text, TextInput, StyleSheet, ScrollView, Pressable, Platform  } from "react-native";
import { useEffect, useState } from "react";
import RoomTypeCarousel from "./RoomTypeCarousel";
import { API_URL } from '../../config';

export default function RoomCreationScreen({ navigation }) {
    const [name, setName] = useState("")
    const [category, setRoomCategory] = useState("OTHER")
    const [x, setX] = useState("")
    const [y, setY] = useState("")
    const [nameWarningEnabled, setNameWarningEnabled] = useState(false)
    const [proportionWarningEnabled, setProportionWarningEnabled] = useState(false)

    const handleXinput = (input) => { 
        // Allow only numbers 
        const numericValue = input.replace(/[^0-9]/g, ""); 
        setX(numericValue); 
    }; 

    const handleYinput = (input) => { 
        // Allow only numbers 
        const numericValue = input.replace(/[^0-9]/g, ""); 
        setY(numericValue); 
    }; 

    const handleCancle = () =>{
        navigation.navigate('Neuen Raum erstellen');
    }

    const handleContinue = async () =>{
        setNameWarningEnabled(false);
        setProportionWarningEnabled(false);

        let shouldCancel = false;
        if(name.length < 1 || name.length > 50){
            setNameWarningEnabled(true);
            shouldCancel = true;
        }
        currX = parseInt(x); currY = parseInt(y);
        if( x.length < 1 || y.length < 1 || currX == 0 || currY == 0 || currX > 50 || currY > 50 ){
            setProportionWarningEnabled(true);
            shouldCancel = true;
        }
        if(shouldCancel){ return;}

        //TODO authToken????
        try {
            const response = await fetch(`${API_URL}/rooms`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGFtcGxlLnVzZXJAdGVzdC5jb20iLCJleHAiOjE3MTc5Njc1ODMsInVzZXJJZCI6ImRiZjVmOGViLTNlNWItNDUwMC1hZDU1LWY3YjU1NGNlZDc3ZSIsImlhdCI6MTcxNzk2NDk5MX0.sRWPYhP0TAKQnibLfOrN1WkbVuiYI0EiP0jnfbGcoV3WcVotR3bqyIlcBBqy8qJcWiYoh6h4UVEJsK0sp49QOw`,
              },
              body:
              JSON.stringify({ 
                    name: name,
                    category: category,
                    ratioValueX: x, 
                    ratioValueY: y 
                }),
            });
      
            if (response.ok) {
              const result  = await response.json();
              //console.log('Success:', result  );
              navigation.navigate('Fenster platzieren', {result });
            } else {
              console.error('Failed to post data:', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Error posting data:', error);
          }
    }

    return (
            <View style={styles.container}>
                <ScrollView style={styles.upper}>
                    <RoomTypeCarousel callback={setRoomCategory}></RoomTypeCarousel>
                    <Text style={styles.text}>Name des Raums</Text>
                    <TextInput
                        style={[styles.textInput, styles.nameInput]}
                        onChangeText={setName}
                        value={name}
                        placeholder="mein neuer Raum"
                        placeholderTextColor={"ligthgrey"}
                    />
                    {nameWarningEnabled &&
                        <Text style={styles.warning}>Der Raumname muss zwischen 1 und 50 Zeichen lang sein</Text>
                    }
                    <Text style={styles.text}>Seitenverhältnis</Text>
                    <View style={styles.proportionView}>
                        <TextInput
                            style={[styles.xInput, styles.textInput]}
                            inputMode= "numeric"
                            onChangeText={handleXinput}
                            value={x}
                            placeholder="X"
                            placeholderTextColor={"ligthgrey"}
                        />
                        <Text style={styles.colon}> : </Text>
                        <TextInput
                            style={[styles.yInput, styles.textInput]}
                            inputMode= "numeric"
                            onChangeText={handleYinput}
                            value={y}
                            placeholder="Y"
                            placeholderTextColor={"ligthgrey"}
                        />
                    </View>
                    {proportionWarningEnabled &&
                        <Text style={styles.warning}>Das Verhältnis muss aus zwei Zahlen zwischen 1 und 50 bestehen</Text>
                    }
                </ScrollView>

                <View style={styles.buttonView}>
                    <Pressable
                        style={styles.button}
                        onPress={handleCancle}
                        title="Abbrechen">
                            <Text style={styles.buttonText}>Abbrechen</Text>
                    </Pressable>
                    <Pressable
                        style={styles.button}
                        onPress={handleContinue}
                        title="Weiter">
                            <Text style={styles.buttonText}>Weiter</Text>
                    </Pressable>
                </View>
            </View>
        
    );
}

const styles = StyleSheet.create({
    warning:{
        color: "red"
    },
    container: {
        flex: 1,
    },
    upper:{
        flex:1,
    },
    text: {
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    textInput: {
        fontSize:24,
        fontWeight: "bold",
        backgroundColor: "white",
        borderRadius: 12
    },
    nameInput:{
        borderTopColor: "grey",
        borderBottomColor: "grey",
        borderWidth: 1.5,
        paddingVertical: 7,
        marginBottom: 16,
        paddingLeft: 6,
    },
    proportionView: {
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: "grey",
        borderRadius: 12,
        backgroundColor: "white",
        marginBottom: 16,
    },
    colon:{
        fontSize:24,
        fontWeight: "bold",
        backgroundColor: "white",
        paddingVertical: 7, 
        borderWidth: 0,
    },
    xInput:{
        flex:1,
        borderRightWidth: 0,
        borderLeftColor: "grey",
        textAlign: "center"
    },
    yInput:{
        flex:1,
        borderRightColor: "grey",
        borderLeftWidth: 0,
        textAlign: "center"
    },
    buttonView: {
        flexDirection: 'row',
        marginBottom: 120,
    },
    button:{
        flex:1,
        padding: 20,
        marginHorizontal: 10,
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