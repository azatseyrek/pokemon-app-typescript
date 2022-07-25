import React from 'react';
import {Link} from 'react-router-dom';
import useFindPokemon from '../hooks/find-pokemon';
import Loader from './Loader';

type PokemonCardProps = {
  name: string;
  showStats?: boolean;
};

const PokemonCard: React.FC<PokemonCardProps> = ({name, showStats}) => {
  const pokemon = useFindPokemon(name);

  if (pokemon.isLoading) {
    return (
      <div className="w-full h-56 bg-gray-50 border border-gray-100 rounded-lg p-4 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const otherSprites = pokemon.data?.sprites.other;

  return (
    <Link
      to={`/${name}`}
      className=" group flex flex-col justify-center items-center space-y-4 bg-gray-50 border border-gray-100 rounded-lg p-4 transform hover:shadow-md "
    >
      <div className="w-full h-56 flex justify-center items-center ">
        <img
          className="w-full h-full object-contain transition group-hover:scale-110"
          src={
            otherSprites?.dream_world.front_default ||
            otherSprites?.['official-artwork']?.front_default ||
            'https://s2.coinmarketcap.com/static/img/coins/200x200/8303.png'
          }
          alt=""
        />
      </div>
      <div className="mt-2 font-medium capitalize text-gray-500 transition group-hover:text-black ">
        {pokemon.data?.name}{' '}
      </div>

      {showStats && (
        <div className="space-y-3">
          <header className="font-medium text-gray-500">Stats</header>
          {pokemon.data?.stats.map((stat) => {
            return (
              <div className=" grid grid-cols-2 items-center space-y-1">
                <div className="text-gray-500 mr-6">{stat.stat.name}</div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 h-3">
                    <div
                      style={{width: `${Math.min(100, stat.base_stat)}%`}}
                      className="h-full bg-yellow-400"
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400 w-8 text-right">
                    {stat.base_stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Link>
  );
};

PokemonCard.defaultProps = {
  showStats: false,
};
export default PokemonCard;
