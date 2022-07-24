import React from 'react';
import {useQuery} from 'react-query';
import {pokemonApi} from '../api';

type PokemonCardProps = {
  name: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({name}) => {
  const pokemon = useQuery(['pokemon', name], () =>
    pokemonApi.getPokemon(name),
  );

  if (pokemon.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 border border-gray-100 rounded-lg p-4 transform hover:shadow-md ">
      <div className="w-full h-56 flex justify-center items-center">
        <img
          className="w-full h-full object-contain transition hover:scale-110"
          src={pokemon.data?.sprites.other.dream_world.front_default}
          alt=""
        />
      </div>
      <div className="mt-2">{pokemon.data?.name}</div>
    </div>
  );
};

export default PokemonCard;
