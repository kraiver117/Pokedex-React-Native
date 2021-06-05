import React, { useEffect, useState } from 'react';
import { Platform, View, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interface/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        if (searchTerm.length === 0) {
            return setPokemonFiltered([]);
        }

        if (isNaN(Number(searchTerm))) {
            setPokemonFiltered(
                simplePokemonList.filter( 
                    (pokemon) => pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) 
                )
            );2
        } else{ 
            const pokemonById = simplePokemonList.find((pokemon) => pokemon.id === searchTerm);
            setPokemonFiltered(
                ( pokemonById ) ? [pokemonById] : []
            );
        }
        
    }, [searchTerm]);

    if (isFetching) {
        return <Loading />
    }

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }}>
            <SearchInput 
                onDebounce={ setSearchTerm }
                style={{ 
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 15
                }}
            />
            
            <FlatList 
                data={ pokemonFiltered }
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={({ item }) => (
                    <PokemonCard pokemon={ item } />
                )}

                //Header
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 60
                    }}>
                        { searchTerm }
                    </Text>
                )}                   
            />
        </View>
    );
}