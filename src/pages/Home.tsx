import React from 'react';
import {useQuery} from 'react-query';
import {pokemonApi} from '../api';
import {v4 as uuidv4} from 'uuid';
import {PokemonResponseResult, PokemonsResponse} from '../types/api.types';
import PokemonCard from '../components/PokemonCard';

const Home: React.FC = () => {
  const pokemons = useQuery<PokemonsResponse>('pokemons', () => {
    return pokemonApi.getPokemons();
  });

  if (pokemons.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home</h1>

      <div className="grid grid-cols-4 gap-8">
        {pokemons.data?.results.map((pokemon: PokemonResponseResult) => (
          <PokemonCard key={uuidv4()} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
