import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity,ActivityIndicator} from 'react-native';
import { useQuery, gql } from '@apollo/client';
import Icon from 'react-native-vector-icons/Ionicons';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      emoji
      name
      code
      native
      capital
      currencies
        phone
      continent {
        name
      }
      languages{
        name
        native
      }

    }
  }
`;

const CountryListScreen = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const { loading, error, data } = useQuery(GET_COUNTRIES, {
      variables: { filter: searchText },
    });
  
    if (loading) {
      return (
        <View style={styles.container}>
           <ActivityIndicator size='large' color='black'/>
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
  
    const countries = data?.countries || [];

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchText.toLowerCase())
      );
    
      
  const handleCountryPress = (country) => {
    navigation.navigate('CountryDetails', { country });
  };
  
    const renderItem = ({ item }) => (

    
        <TouchableOpacity
        style={styles.countryCard}
         onPress={() => handleCountryPress(item)}
      >
        <View style={styles.countryFlagContainer}>
          <Text style={styles.emoji}>{item.emoji}</Text>
        </View>
        <View style={styles.countryInfo}>
          <Text style={styles.countryName}>{item.name}</Text>
          <Text style={styles.countryDetail}>Code: {item.code}</Text>
          <Text style={styles.countryDetail}>Continent: {item.continent.name}</Text>
          <Text style={styles.countryDetail}>Capital: {item.capital}</Text>
        </View>
      </TouchableOpacity>
    );
  
    return (
    
      <View style={styles.container}>
        <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search any country..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
       
        <FlatList
          data={filteredCountries}
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
    emoji: {
      fontSize: 40,
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
      justifyContent:'space-between',
      marginBottom: 10,
      padding:10,
      

    },
    searchInput: {
      flex: 1,
      height: 40,
      backgroundColor: '#F5F5F5',
      borderRadius:20,
      borderWidth:1,
      paddingLeft:50,
      backgroundColor:"#fff"
    
  },
  
  searchIcon:{

    left:40,
    top:10,
    zIndex:1
    
  }
  
  })
  
  export default CountryListScreen;