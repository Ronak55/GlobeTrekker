import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Explore = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Where to Explore?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('CountryList') }}>
                    <Text style={styles.buttonText}>Countries</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('ContinentList') }}>
                    <Text style={styles.buttonText}>Continents</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: 'white',
    },
    buttonContainer: {
        marginTop: 60,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginBottom: 20,
        width: '80%',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Explore;
