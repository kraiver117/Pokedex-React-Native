import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'>{};

export const PokemonScreen = ( {navigation, route}: Props ) => {
    const { simplePokemon, color } = route.params;

    return (
        <View>
            <Text style={{ color }}>{ simplePokemon.name } - { color }</Text>
        </View>
    );
}
