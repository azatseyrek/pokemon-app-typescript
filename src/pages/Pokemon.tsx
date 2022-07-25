import React from 'react';

import {useParams} from 'react-router';
import useFindPokemon from '../hooks/find-pokemon';

const Pokemon: React.FC = () => {
  const {pokemon: pokemonName} = useParams();

  const pokemon = useFindPokemon(pokemonName);

  if (pokemon.isLoading) {
    return <p>Loading</p>;
  }
  return <p>{pokemon.data?.name}</p>;
};

export default Pokemon;
