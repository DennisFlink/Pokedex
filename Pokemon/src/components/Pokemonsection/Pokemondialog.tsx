import { useState, useEffect } from 'react'

import { PokemonDetails, getClickedPokemonDetails } from '../API/Pokemonlist'

interface ModalProps {
  isOpen: boolean
  hasCloseBtn: boolean
  pokemonName: string
  children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, pokemonName }) => {
  const [ModalContent, setModalContent] = useState<PokemonDetails[]>([])
  useEffect(() => {
    if (isOpen && pokemonName) {
      getClickedPokemonDetails(pokemonName).then((pokemon) => {
        setModalContent(pokemon ?? [])
      })
    }
  }, [isOpen, pokemonName])
  return (
    <dialog open={isOpen} className="modal">
      {ModalContent.map((pokemon) => (
        <div key={pokemon.name} className="pokemondialog">
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          <p>Weight: {pokemon.weight}</p>
          
          <div className="stat-container">
            {pokemon.stats.map((stats, index) => (
              <div key={index}>
                <p>{stats.stat.name.charAt(0).toUpperCase() + stats.stat.name.slice(1)}</p>
                <p>{stats.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {children}
    </dialog>
  )
}
