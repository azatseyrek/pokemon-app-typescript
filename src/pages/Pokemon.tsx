import React from 'react';
import {useQuery} from 'react-query';
import {useParams} from 'react-router';
import {pokemonApi} from '../api';
import Loading from '../components/Loading';

const Pokemon: React.FC = () => {
  const {pokemon: pokemonName} = useParams();

  const pokemon = useQuery(['pokemon', pokemonName], () => {
    if (!pokemonName) {
      return null;
    }
    return pokemonApi.getPokemon(pokemonName);
  });

  if (pokemon.isLoading) {
    return <Loading />;
  }
  return <p>{pokemon.data?.name}</p>;
};

export default Pokemon;
