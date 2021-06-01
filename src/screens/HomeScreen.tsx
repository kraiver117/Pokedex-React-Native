import React from 'react';
import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';

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
                keyExtractor={ (pokemon) => pokemon.id }
                showsVerticalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                    <View>
                        <FadeInImage 
                            uri={ item.picture } 
                            style={{
                                width: 100,
                                height: 100
                            }}
                        />
                        <Text>{ item.name }</Text>
                    </View>
                )}
                
                // Infinite Scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.5 }
                
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
