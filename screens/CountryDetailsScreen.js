import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountryDetailsScreen = ({ route }) => {
    const { country } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>🎉 Welcome to {country.name} !</Text>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.emoji}>{country.emoji}</Text>
                    <Text style={styles.countryName}>{country.name}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Country Code:</Text>
                        <Text style={styles.detailText}>{country.code}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}> Native Name:</Text>
                        <Text style={styles.detailText}>{country.native}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Languages:</Text>
                        <View style={styles.languagesContainer}>
                            {country.languages.map((language, index) => (
                                <Text key={index} style={styles.languageText}>
                                    {`${language.name} (${language.native})`}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Continent:</Text>
                        <Text style={styles.detailText}>{country.continent.name}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Capital:</Text>
                        <Text style={styles.detailText}>{country.capital}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Currency:</Text>
                        <Text style={styles.detailText}>{country.currencies}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Phone:</Text>
                        <Text style={styles.detailText}>+{country.phone}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    emoji: {
        fontSize: 80,
        marginRight: 15,
    },
    countryName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
    },
    detailsContainer: {
        marginTop: 20,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    detailLabel: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777777',

    },
    detailText: {
        flex: 2,
        fontSize: 16,
        color: '#333333',
    },

    languagesContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    languageText: {
        marginRight: 10,
        marginBottom: 5,
        fontSize: 16,
        color: '#333333',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
});

export default CountryDetailsScreen;
