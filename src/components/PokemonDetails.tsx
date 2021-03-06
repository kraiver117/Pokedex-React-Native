import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FullPokemon } from '../interface/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: FullPokemon;
}

export const PokemonDetails = ({ pokemon }: Props ) => {
    return (
        <ScrollView 
        showsVerticalScrollIndicator={ false }
            style={{
            ...StyleSheet.absoluteFillObject
            }}
        >
            {/* Types and weight */}
            <View style={{
                ...styles.container,
                marginTop: 390
            }}>
                <Text style={ styles.title }>Types</Text>
                <View style={{ flexDirection: 'row'}}>
                    {
                        pokemon.types.map( ({type}) => (
                            <Text
                                style={{ ...styles.regularText, marginRight: 10 }}
                                key={ type.name }
                            >
                                { type.name }
                            </Text>
                        ))
                    }
                </View>

                {/* Weight */}
                <Text style={ styles.title }>Peso</Text>
                <Text style={ styles.regularText }>{ pokemon.weight }kg</Text>

            </View>

            {/* Sprites */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Sprites</Text>

                <ScrollView
                    showsHorizontalScrollIndicator={ false }
                    horizontal={ true }
                >
                    <FadeInImage 
                        uri={ pokemon.sprites.front_default }
                        style={ styles.basicSprite }
                    />

                    <FadeInImage 
                        uri={ pokemon.sprites.back_default }
                        style={ styles.basicSprite }
                    />

                    <FadeInImage 
                        uri={ pokemon.sprites.front_shiny }
                        style={ styles.basicSprite }
                    />

                    <FadeInImage 
                        uri={ pokemon.sprites.back_shiny }
                        style={ styles.basicSprite }
                    />
                </ScrollView>
            </View>

            {/* Abilities */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Habilidades base</Text>
                <View style={{ flexDirection: 'row'}}>
                    {
                        pokemon.abilities.map( ({ability}) => (
                            <Text
                                style={{ ...styles.regularText, marginRight: 10 }}
                                key={ ability.name }
                            >
                                { ability.name }
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Moves */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map( ({move}) => (
                            <Text
                                style={{ ...styles.regularText, marginRight: 10 }}
                                key={ move.name }
                            >
                                { move.name }
                            </Text>
                        ))
                    }
                </View>
            </View>

             {/* Stats */}
            <View style={ {...styles.container, alignItems: 'center'} }>
                <Text style={ styles.title }>Stats</Text>
                <View style={{ }}>
                    {
                        pokemon.stats.map( (stat, index) => (
                            <View  
                                key={ stat.stat.name + index }
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{ ...styles.regularText, marginRight: 10, width: 150 }}
                                >
                                    { stat.stat.name }
                                </Text>

                                <Text
                                    style={{ ...styles.regularText, fontWeight: 'bold' }}
                                >
                                    { stat.base_stat }
                                </Text>
                            </View>
                        ))
                    }
                </View>

                {/* Final Sprite */}
                <View style={{ 
                    marginBottom: 80
                }}>
                    <FadeInImage 
                        uri={ pokemon.sprites.front_default }
                        style={ styles.basicSprite }
                    />
                </View>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20 
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});
