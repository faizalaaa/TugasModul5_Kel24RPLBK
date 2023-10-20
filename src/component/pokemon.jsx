import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
      .then((response) => {
        const pokemonNames = response.data.results.map(
          (pokemon) => pokemon.name
        );
        setPokemonData(pokemonNames);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  }, []);

  return (
    <PokemonContext.Provider value={pokemonData}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
