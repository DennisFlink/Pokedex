const POKEMON_API = "https://pokeapi.co/api/v2/";

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

interface PokemonListItem {
  name: string;
  url: string;
}

export const getPokemonList = async () => {
  try {
    const response = await fetch(POKEMON_API + "pokemon?limit=21&offset=0");
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data: PokemonListResponse = await response.json();
    const pokemonNames: PokemonListItem[] = data.results;

    return pokemonNames.map((pokemon) => pokemon.name);
  } catch (err) {
    console.log("FETCH ERROR", err);
  }
};

export const getPokemonDetails = async () => {
  const pokemonUrl = await getPokemonList();
  if (pokemonUrl) {
    const reponses = await Promise.all(
      pokemonUrl.map(async (pokemon) => {
        const response = await fetch(POKEMON_API + `pokemon/${pokemon}`);
        return response.json();
      })
    );
    console.log(reponses);
    return reponses;
  }
};
