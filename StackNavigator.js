import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import CountryDetScreen from './screens/CountryDetailsScreen';
import CountryListScreen from './screens/CountryListScreen';
import Explore from './screens/Explore';
import ContinentList from './screens/ContinentList';
import SpecificCountry from './screens/SpecificCountry';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="CountryList" component={CountryListScreen} />
        <Stack.Screen name="CountryDetails" component={CountryDetScreen} />
        <Stack.Screen name="ContinentList" component={ContinentList} />
        <Stack.Screen name="SpecificCountry" component={SpecificCountry} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
