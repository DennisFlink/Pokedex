import { ChangeEvent, useState } from 'react'
import { getClickedPokemonDetails } from '../API/Pokemonlist'
const SearchBar = () => {
  const [searchText, setSearchText] = useState('')

  const searchPokemon = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.toLowerCase())
    fetchSearchedPokemon(searchText)
  }
  const fetchSearchedPokemon = (name: string) => {
    console.log(name)
    getClickedPokemonDetails(name).then
  }
  return (
    <div className="search-container">
      <label htmlFor="pokemonName">Search Pokemon</label>
      <input type="text" id="pokemonName" placeholder="Search Pokemon" value={searchText} onChange={searchPokemon}></input>
    </div>
  )
}

export default SearchBar
