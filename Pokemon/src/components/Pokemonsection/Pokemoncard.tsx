import { getPokemonDetails } from "../API/Pokemonlist";
import { useState, useEffect } from "react";

export const PokemonCard = () => {
  const [pokemonImage, setpokemonImage] = useState([]);
  useEffect(() => {
    getPokemonDetails().then((pokemons) => {
      setpokemonImage(pokemons);
    });
  }, []);

  return (
    <>
      {pokemonImage.map((pokemon, index) => (
        <li key={pokemon.name}>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          <p>{pokemon.name}</p>
          <p>type: {pokemon.types[0].type.name}</p>
        </li>
      ))}
    </>
  );
};
