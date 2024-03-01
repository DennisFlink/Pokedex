const POKEMON_API = 'https://pokeapi.co/api/v2/'

interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}

interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonDetails {
  name: string
  weight: number
  stats: PokemonStat[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: {
    type: {
      name: string
    }
  }[]
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}
export const getPokemonList = async () => {
  try {
    const response = await fetch(POKEMON_API + 'pokemon?limit=41&offset=0')
    if (!response.ok) {
      throw new Error('Failed to fetch todos')
    }
    const data: PokemonListResponse = await response.json()
    const pokemonNames: PokemonListItem[] = data.results
    console.log(pokemonNames)

    return pokemonNames.map((pokemon) => pokemon.name)
  } catch (err) {
    console.log('FETCH ERROR', err)
  }
}

export const getPokemonDetails = async () => {
  const pokemonUrl = await getPokemonList()
  if (pokemonUrl) {
    const reponses: PokemonDetails[] = await Promise.all(
      pokemonUrl.map(async (pokemon) => {
        const response = await fetch(POKEMON_API + `pokemon/${pokemon}`)
        return response.json()
      }),
    )

    return reponses
  }
}

export const getClickedPokemonDetails = async (name: string) => {
  try {
    const response = await fetch(POKEMON_API + `pokemon/${name}`)
    const data: PokemonDetails = await response.json()
    const dataArray: PokemonDetails[] = [data]
    return dataArray
  } catch (err) {
    console.log('Error', err)
  }
}
