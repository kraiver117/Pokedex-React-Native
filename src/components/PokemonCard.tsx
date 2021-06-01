import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SimplePokemon } from '../interface/pokemonInterfaces';

const windowWidth =  Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity>
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4
            }}>
                {/* Nombre del pokemon y ID */}
                <Text style={ styles.name }>
                    { pokemon.name }
                    { '\n#' + pokemon.id }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        margin: 25,
        borderRadius: 10
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});