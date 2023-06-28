import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import Icon from 'react-native-vector-icons/Ionicons';


const GET_CONTINENTS = gql`
  query GetContinents{
    continents {
      name
      code
      countries{
        name
        emoji
        code
        capital
        languages{
            name
        }

      }
    }
  }
`;


const ContinentList = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const { loading, error, data } = useQuery(GET_CONTINENTS, {
        variables: { filter: searchText },
    });

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='black' />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error occurred.</Text>
            </View>
        );
    }

    const continents = data?.continents || [];

    const filteredContinents = continents.filter(continent =>
        continent.name.toLowerCase().includes(searchText.toLowerCase())
    );


    const renderItem = ({ item }) => {
        const countryCount = item.countries.length;

        // Count the total number of languages
        let languageCount = 0;
        item.countries.forEach(country => {
            languageCount += country.languages.length;
        });

        const handleCountryPress = (continent) => {
            navigation.navigate('SpecificCountry', { continents: continent });
        };


        return (

            <TouchableOpacity
                style={styles.countryCard}
                onPress={() => handleCountryPress(item)}
            >
                <View style={styles.countryFlagContainer}>
                    <Text style={styles.code}>{item.code}</Text>
                </View>
                <View style={styles.countryInfo}>
                    <Text style={styles.countryName}>{item.name}</Text>
                    <Text style={styles.countryDetail}>Countries: {countryCount}</Text>
                    <Text style={styles.countryDetail}>Languages: {languageCount}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (

        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search any continent..."
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>

            <FlatList
                data={filteredContinents}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    flatListContent: {
        paddingBottom: 20,
    },
    countryCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 6,
    },
    countryFlagContainer: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#F5F5F5',
    },
    code: {
        fontSize: 20,
    },
    countryInfo: {
        flex: 1,
        marginLeft: 40,
    },
    countryName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    countryDetail: {

        fontSize: 14,
        marginBottom: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,


    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        borderWidth: 1,
        paddingLeft: 50,
        backgroundColor: "#fff"

    },

    searchIcon: {

        left: 40,
        top: 10,
        zIndex: 1

    }

})

export default ContinentList;