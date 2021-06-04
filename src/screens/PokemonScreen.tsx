import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonDetails'>{};

export const PokemonScreen = ( {navigation, route}: Props ) => {
    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <View style={{ 
                ...styles.headerContainer,
                backgroundColor: color
            }}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack() }
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10
                    }}
                >
                    <Icon 
                        name='arrow-back-outline' 
                        color='white' 
                        size={35} 
                    />
                </TouchableOpacity>

                {/* Pokemon Name */}
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 40
                }}>
                    { name + '\n' } #{ id }
                </Text>

                {/* White Pokeball */}
                <Image 
                    source={ require('../assets/pokebola-blanca.png') } 
                    style={ styles.pokebola }
                />

                {/* Pokemon Image */}
                <FadeInImage 
                    uri={ picture }
                    style={ styles.pokemonImage }
                />

            </View>

            {/* Details and Loading */}
            {
                isLoading 
                ? 
                    (
                        <View style={ styles.loadingIndicator }>
                            <ActivityIndicator
                                color={ color }
                                size={ 50 }
                            />
                        </View>
                )
                : <PokemonDetails pokemon={ pokemon } />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370, 
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokebola: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});