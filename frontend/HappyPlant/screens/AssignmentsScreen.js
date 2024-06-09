import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchURL } from '../utils/ApiService';

export default function AssignmentsScreen({ navigation }) {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [completedAssignments, setCompletedAssignment] = useState({});

    useEffect(() => {
        // fetchURL('/assignments', 'GET', data => {
        //     setAssignments(data);
        //     setLoading(false);
        // })

        // Dummy assignments for testing
        const dummyData = [
            { id: '1', plantName: 'Gerold', assignmentType: 'WATERING', lastDone: new Date('2024-06-01') },
            { id: '2', plantName: 'Peter', assignmentType: 'WATERING', lastDone: new Date('2024-06-05') },
            { id: '3', plantName: 'Clara', assignmentType: 'CUTTING', lastDone: new Date('2024-06-02') },
            { id: '4', plantName: 'Tomm', assignmentType: 'FERTILIZING', lastDone: new Date('2024-05-30') },
            { id: '5', plantName: 'Lala', assignmentType: 'REPOTTING', lastDone: new Date('2024-06-03') },
            { id: '6', plantName: 'Timi', assignmentType: 'REPOTTING', lastDone: new Date('2024-06-07') },
        ];
        setAssignments(dummyData);
        setLoading(false);
    }, []);

    const toggleAssignmentCompletion = (id) => {
        setCompletedAssignment(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const translateAssignmentType = (type) => {
        const translationMap = {
            'WATERING': 'Gießen',
            'CUTTING': 'Schneiden',
            'FERTILIZING': 'Düngen',
            'REPOTTING': 'Umtopfen'
        };
        return translationMap[type] || type;
    };

    const isDue = (lastDone) => {
        const SEVEN_DAYS_IN_MS = 7 * 24 * 26* 60 * 1000;
        const now = new Date();
        return now - lastDone > SEVEN_DAYS_IN_MS;
    }

    const renderAssignmentItem = ({ item }) => {
        const isCompleted = completedAssignments[item.id];
        const translatedType = translateAssignmentType(item.assignmentType);
        const due = isDue(item.lastDone);
        const formattedDate = `${('0' + item.lastDone.getDate()).slice(-2)}.${('0' + (item.lastDone.getMonth() + 1)).slice(-2)}.${item.lastDone.getFullYear()}`;

        return (
            <View style={[styles.listItem, isCompleted ? styles.itemCompleted : due ? styles.itemDue : null]}>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>{`${item.plantName} ${translatedType.toLowerCase()}`}</Text>
                    {due && !isCompleted && <Text style={styles.itemDueText}>{`seit ${formattedDate}`}</Text>}
                </View>
                <TouchableOpacity onPress={() => toggleAssignmentCompletion(item.id)}>
                    <MaterialCommunityIcons 
                        name={isCompleted ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
                        size={39}
                        color={isCompleted ? '#5C724F' : (due ? '#B10C0C' : '#9F9D9D')}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    const groupedAssignments = assignments.reduce((acc, curr) => {
        (acc[curr.assignmentType] = acc[curr.assignmentType] || []).push(curr);
        return acc;
    }, {});

    return (
        <View style={styles.container}>
            {loading ? (
                <Text style={styles.text}>Aufgaben werden geladen...</Text>
            ) : (
                assignments.length === 0 ? (
                    <LinearGradient
                        colors={['#FDFBEF', '#F6FFED']}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={styles.doneContainer}
                    >
                        <View style={styles.doneContent}>
                            <Text style={styles.headline}>Gut gemacht!</Text>
                            <Image source={require('../assets/assignments-done.png')} style={styles.image} />
                            <Text style={styles.text}>Du hast alle heutigen</Text>
                            <Text style={styles.text}>Aufgaben erledigt.</Text>
                        </View>
                    </LinearGradient>
                ) : (
                    <LinearGradient
                        colors={['#FDFBEF', '#F6FFED']}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={styles.assignmentsContainer}
                    >
                        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                            {Object.keys(groupedAssignments).map((type, index) => (
                                <View key={type} style={styles.categoryContainer}>
                                    {index !== 0 && <View style={styles.separator} />}
                                    <Text style={styles.categoryText}>{translateAssignmentType(type)}</Text>
                                    <FlatList 
                                        data={groupedAssignments[type]}
                                        renderItem={({ item }) => renderAssignmentItem({ item })}
                                        keyExtractor={item => item.id.toString()}
                                        contentContainerStyle={styles.listContainer}
                                    />
                                </View>
                            ))}
                            <View style={{ height: 120 }}></View>
                        </ScrollView>
                    </LinearGradient>  
                )
            )}
        </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
    },
    assignmentsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 12,
        paddingTop: 20,
        paddingHorizontal: 12,
    },
    scrollViewContainer: {
        width: '100%',
        alignItems: 'center',
    },
    categoryContainer: {
        width: '100%',
    },
    listContainer: {
        width: '100%',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
        borderColor: '#9f9d9d',
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 6,
        width: '100%',
    },
    itemCompleted: {
        borderColor: '#8ebf6f',
    },
    itemDue: {
        borderColor: '#b10c0c',
    },
    itemDueText: {
        fontWeight: 'regular',
        fontSize: 10,
        lineHeight: 12,
        color: '#ff0b0b',
    },
    itemTextContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    itemText: {
        fontWeight: 'regular',
        fontSize: 15,
        lineHeight: 18,
        color: '#000000',
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#9f9d9d',
        marginVertical: 10,
    },
    doneContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        borderRadius: 12,
        width: '100%',
    },
    doneContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 243,
        height: 243,
        borderRadius: 50,
        margin: 27,
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        color: '#7e7a7a',
    },
    text: {
        fontWeight: 'regular',
        fontSize: 20,
        lineHeight: 24,
        color: '#9f9d9d',
    },
    categoryText: {
        fontWeight: 'regular',
        fontSize: 20,
        lineHeight: 24,
        color: '#9f9d9d',
        marginBottom: 5,
    },
});
