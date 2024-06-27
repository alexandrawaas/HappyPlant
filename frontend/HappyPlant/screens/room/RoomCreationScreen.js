import {View, Text, TextInput, StyleSheet, ScrollView, Pressable, Platform, TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import RoomTypeCarousel from "./RoomTypeCarousel";
import { API_URL } from '../../config';
import { fetchURL } from "../../utils/ApiService";
import {AssignmentTypeTranslations} from "../../utils/EnumTranslations";
import {LinearGradient} from "expo-linear-gradient";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import Feather from "react-native-vector-icons/Feather";

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
        
        const payload = { 
            name: name,
            category: category,
            ratioValueX: x, 
            ratioValueY: y 
        };
        fetchURL('/rooms', 'POST', payload, navigation, (data) => {
            navigation.navigate('Fenster platzieren', {roomData: data});
        })
    }

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerRight: () => (
                <TouchableOpacity onPress={handleContinue} style={{margin: 8}}>
                    <Feather name="arrow-right" color="grey" size={25}/>
                </TouchableOpacity>
            )
        })
    });


    return (
            <View style={styles.container}>
                <ScrollView style={styles.upper}>
                    <VerticalPlaceholder size={20}/>
                    <RoomTypeCarousel callback={setRoomCategory}></RoomTypeCarousel>
                    <View style={styles.innerContainer}>
                        <Text style={styles.sectionTitle}>Name des Raums</Text>
                        <View style={styles.textInputContainer}>
                            <View style={[styles.textInputInnerContainer]}>
                                <TextInput style={styles.textInput}
                                           inputMode={"text"}
                                           onChangeText={setName}
                                           value={name}
                                           placeholder="Gib einen Namen ein..."
                                           placeholderTextColor={"ligthgrey"}/>
                            </View>
                        </View>
                        {nameWarningEnabled &&
                            <Text style={styles.warning}>Der Raumname muss zwischen 1 und 50 Zeichen lang sein</Text>
                        }
                        <Text style={styles.sectionTitle}>Seitenverhältnis</Text>
                        <View>
                            <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.numberInputContainer}>
                                    <View style={styles.numberInputInnerContainer}>
                                        <TextInput mode={"outline"}
                                                   inputMode={"numeric"}
                                                   style={styles.numberInput}
                                                   maxLength={2}
                                                   onChangeText={handleXinput}
                                                   value={x}
                                                   placeholder="X"
                                        ></TextInput>
                                    </View>
                                    <Text style={styles.colon}> : </Text>

                                    <View style={styles.numberInputInnerContainer}>
                                        <TextInput mode={"outline"}
                                                   inputMode={"numeric"}
                                                   style={styles.numberInput}
                                                   onChangeText={handleYinput}
                                                   maxLength={2}
                                                   value={y}
                                                   placeholder="Y">
                                            </TextInput>
                                </View>
                            </LinearGradient>
                        </View>
                        {proportionWarningEnabled &&
                            <Text style={styles.warning}>Das Verhältnis muss aus zwei Zahlen zwischen 1 und 50 bestehen</Text>
                        }
                    </View>
                </ScrollView>
            </View>
        
    );
}

const styles = StyleSheet.create({
    warning:{
        color: "red"
    },
    container: {
        flex: 1,
        padding: 10,
    },
    innerContainer: {
        padding: 5,
    },
    upper:{
        flex:1,
    },
    text: {
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 8,
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

    },
    colon:{
        fontSize:24,
        fontWeight: "bold",
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
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    textInput: {
        width: '90%',
        fontSize: 16,
        textAlign: "left",
        textAlignVertical: "bottom",
        paddingBottom: 5,
        paddingTop: 5,
        color: "black",
    },
    textInputContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",

    },
    textInputInnerContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: 40,
        backgroundColor: '#fef7ee',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 4
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },
    sectionTitle: {
        alignSelf: "center",
        fontSize: 18,
        color: "grey",
        marginTop: 20,
        marginBottom: 10,
        width: '100%'
    },
    numberInput: {
        width: 40,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "bottom",
        paddingBottom: 5,
        paddingTop: 5,
    },
    numberInputContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginBottom: 16,
    },
    numberInputInnerContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "bottom",
        justifyContent: "center",
        width: 60,
        height: 30,
        backgroundColor: "#f5eae7",
        borderRadius: 10,
        marginHorizontal: 10,
    },
});
