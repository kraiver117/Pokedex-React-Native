import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interface/pokemonInterfaces';

export const usePokemonPaginated = () => {
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40');
    
    const loadPokemons = async() => {
        const response = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = response.data.next;
        mapPokemonList(response.data.results);
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        pokemonList.forEach( pokemon => console.log(pokemon.name));
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return { 
        simplePokemonList
    }
}
