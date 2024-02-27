import { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const searchPokemon = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="search-container">
      <label htmlFor="pokemonName">Search Pokemon</label>
      <input
        type="text"
        id="pokemonName"
        placeholder="Search Pokemon"
        value={searchText}
        onChange={searchPokemon}
      ></input>
    </div>
  );
};

export default SearchBar;
