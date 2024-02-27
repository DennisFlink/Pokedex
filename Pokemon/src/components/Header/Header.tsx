import TabButton from "../Tabs/Tabbutton";
import SearchBar from "./Searchbar";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="pokeball.svg" alt="Img of a pokeball" />
        <h1>POKÉDEX</h1>
      </div>
      <nav>
        <TabButton>All Pokémon</TabButton>
        <TabButton>My List</TabButton>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Header;
