import { getPokemonDetails } from '../API/Pokemonlist'
import { useState, useEffect } from 'react'
import { PokemonDetails } from '../API/Pokemonlist'
import { Modal } from './Pokemondialog'
export const PokemonCard = () => {
 const [pokemonImage, setpokemonImage] = useState<PokemonDetails[]>([])
 const [OpenModal, setOpenModal] = useState(false)
 const [pokemonName, setpokemonName] = useState<string>('')

 const openModal = (pokemonName: string) => {
  setOpenModal(true)
  setpokemonName(pokemonName)
 }
 const closeModal = () => {
  setOpenModal(false)
 }
 useEffect(() => {
  getPokemonDetails().then((pokemons) => {
   setpokemonImage(pokemons ?? [])
  })
 }, [])

 return (
  <>
   <ul>
    {pokemonImage.map((pokemon) => (
     <li
      key={pokemon.name}
      id={pokemon.name}
      onClick={() => {
       openModal(pokemon.name)
      }}
     >
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
      <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
      <p>Type: {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</p>
     </li>
    ))}
   </ul>
   <Modal isOpen={OpenModal} hasCloseBtn={true} pokemonName={pokemonName}>
    <button type="button" onClick={() => closeModal()}>
     CLOSE
    </button>
   </Modal>
  </>
 )
}
