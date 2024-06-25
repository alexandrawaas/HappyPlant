import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from "react-native-vector-icons/Feather";

export default function PlantsOnPixelPopup({ roomId, pixel, visible, onClose, navigation, onPlantDelete }) {
    const handlePlantPress = (plantId) => {
        navigation.navigate('plants', { screen: 'Pflanzenprofil', params: {id: plantId} });
        visible = false
        onClose();
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <LinearGradient
                    style={styles.modalContainer} colors={['#fdfbef', '#fef1ed']}
                >
                    <LinearGradient
                        colors={['#bef5b5', '#b0e4a7']}
                        style={styles.titleContainer}
                    >
                        <Text style={styles.title} >Pflanzen auf diesem Pixel</Text>
                    </LinearGradient>
                    <View style={styles.bodyContainer}>
                        <ScrollView >
                            {pixel?.plants.map((plant, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.plantButton}
                                    onPress={() => handlePlantPress(plant.id)}
                                >
                                    <Text style={styles.buttonText} numberOfLines={1}>{plant.name} ({plant.species.name}) </Text>
                                    {/* <View style={styles.warningContainer}>
                                        {!plant.hasOptimalLightingCondition
                                            ? <WarnIcon/>
                                            : null}
                                        {plant.assignments.length !== 0
                                            ? <AssignmentIcon/>
                                            : null}
                                    </View> */}
                                    <View style={styles.warningContainer}>
                                        <Feather name="trash-2" color="grey" size={14} onPress={() => onPlantDelete(plant)}/>
                                    </View>
                                </TouchableOpacity>
                            ))}</ScrollView>
                        <View style={styles.closeButtonContainer}>
                            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                                <Text style={styles.closeButtonText}>Schließen</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        // padding: 20,
        borderRadius: 10,
        width: '80%',
        display: 'flex',
        maxHeight: 300,
        overflow: 'scroll',
    },
    titleContainer: {
        padding: 20,
        paddingBottom: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#233d0c',
    },
    bodyContainer: {
        padding: 20,
        paddingTop: 10,
    },
    plantButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    warningContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    closeButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    closeButton: {
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#cef2c8',
        borderRadius: 30,
    },
    closeButtonText: {
        color: '#233d0c',
    },
});
