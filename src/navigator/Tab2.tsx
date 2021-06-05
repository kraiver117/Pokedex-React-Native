import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./StackNavigation";
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab2.Screen name="Home" component={SearchScreen} />
            <Tab2.Screen name="PokemonDetails" component={PokemonScreen} />
        </Tab2.Navigator>
    );
}
