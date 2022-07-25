import React from 'react';
import {Link} from 'react-router-dom';
import useFindPokemon from '../hooks/find-pokemon';

type PokemonCardProps = {
  name: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({name}) => {
  const pokemon = useFindPokemon(name);

  if (pokemon.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Link
      to={`/${name}`}
      className=" group flex flex-col justify-center items-center space-y-4 bg-gray-50 border border-gray-100 rounded-lg p-4 transform hover:shadow-md "
    >
      <div className="w-full h-56 flex justify-center items-center ">
        <img
          className="w-full h-full object-contain transition group-hover:scale-110"
          src={pokemon.data?.sprites.other.dream_world.front_default}
          alt=""
        />
      </div>
      <div className="mt-2 font-medium capitalize text-gray-500 transition group-hover:text-black ">
        {pokemon.data?.name}
      </div>
    </Link>
  );
};

export default PokemonCard;
