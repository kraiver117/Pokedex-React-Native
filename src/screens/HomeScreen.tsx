import React from 'react';
import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, isLoading, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <FlatList 
                data={ simplePokemonList }
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={({ item, index }) => (
                    <PokemonCard pokemon={ item } />
                )}

                //Header
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        top: top + 20,
                        marginBottom: top + 20
                    }}>
                        Pokedex
                    </Text>
                )}
                
                // Infinite Scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.5 }
                
                //Footer
                ListFooterComponent={
                    <ActivityIndicator 
                        style={{ height: 100 }}
                        size={ 30 }
                        color='red'
                    />
                }
            />
        </>
    );
};
