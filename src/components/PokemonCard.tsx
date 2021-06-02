import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interface/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
// import { getImageColors } from '../helpers/getColors';
import ImageColors from 'react-native-image-colors';


const windowWidth =  Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    
    // const getColors = async () => {
    //     const [primary = 'red'] = await getImageColors(pokemon.picture);
    //     setBgColor(primary);
    // }
    
    useEffect(() => {
        // getColors();

        ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
            .then(colors => {

                if (!isMounted.current) return;
                
                (colors.platform === 'android')
                    ? setBgColor(colors.dominant)
                    : setBgColor(colors.primary)
            })

        return () => {
            isMounted.current = false;
        }
        
    }, []);

    return (
        <TouchableOpacity>
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
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