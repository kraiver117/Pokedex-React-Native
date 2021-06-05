import React, { useEffect, useState } from 'react';
import { Platform, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounce } from '../hooks/useDebounce';

interface Props {
    onDebounce: ( value: string ) => void;
    style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ style, onDebounce }: Props) => {
    
    const [textValue, setTextValue] = useState('');
    const debounceValue = useDebounce(textValue);

    useEffect(() => {
        onDebounce(debounceValue);
    }, [debounceValue]);

    return (
        <View style={{ 
            ...styles.container,
            ...style as any
        }}>
            <View style={ styles.textBackground }>
                <TextInput 
                    style={{ 
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2 
                    }}
                    placeholder='Buscar Pokémon'
                    autoCapitalize='none'
                    autoCorrect={ false }
                    value={ textValue }
                    onChangeText={ setTextValue }
                />
                <Icon 
                    name='search-outline'
                    color='grey'
                    size={ 30 }
                />
            </View> 
        </View>
    );
}

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        flexDirection: 'row',
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18
    }
});
