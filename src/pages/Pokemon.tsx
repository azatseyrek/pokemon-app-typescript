import React from 'react';

import {useParams} from 'react-router';
import Loading from '../components/Loading';
import useFindPokemon from '../hooks/find-pokemon';

const Pokemon: React.FC = () => {
  const {pokemon: pokemonName} = useParams();

  const pokemon = useFindPokemon(pokemonName);

  if (pokemon.isLoading) {
    return <Loading />;
  }
  return <p>{pokemon.data?.name}</p>;
};

export default Pokemon;
