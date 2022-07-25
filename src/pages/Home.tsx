import React from 'react';

import {v4 as uuidv4} from 'uuid';
import {PokemonResponseResult} from '../types/api.types';
import PokemonCard from '../components/PokemonCard';
import {useApp} from '../state/AppState';

const Home: React.FC = () => {
  const {pokemons} = useApp();

  // const pokemons = useQuery<PokemonsResponse>('all-pokemons', () => {
  //   return pokemonApi.getAllPokemons();
  // });

  if (pokemons.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {pokemons.data?.results.map((pokemon: PokemonResponseResult) => (
          <PokemonCard key={uuidv4()} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
