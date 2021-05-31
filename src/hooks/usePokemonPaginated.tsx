import { useEffect, useRef } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemonPaginated = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40');
    
    const loadPokemons = async() => {
        const response = await pokemonApi.get(nextPageUrl.current);
        console.log(response);
    }

    useEffect(() => {
        loadPokemons();
    }, []);
}
