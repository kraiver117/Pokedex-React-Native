import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interface/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

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
                <Text style={{...styles.name, marginHorizontal: 18, marginVertical: 3 }}>
                    { pokemon.name }
                    { '\n#' + pokemon.id }
                </Text>
                <View style={ styles.pokebolaContainer }>
                    <Image  
                        source={ require('../assets/pokebola-blanca.png') }
                        style={ styles.pokebola }
                    />
                </View>
                <FadeInImage 
                    uri={ pokemon.picture }
                    style={ styles.pokemonImage }
                />
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
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden'
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -20
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -10
    }
});