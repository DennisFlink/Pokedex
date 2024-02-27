import { PokemonCard } from "./Pokemoncard";

const Pokemonsection = () => {
  return (
    <section className="pokemon-section">
      <div className="pokemon-container">
        <ul>
          <PokemonCard />
        </ul>
      </div>
    </section>
  );
};

export default Pokemonsection;
