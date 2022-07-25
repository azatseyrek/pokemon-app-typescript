import React from 'react';

import {useNavigate, useParams} from 'react-router';
import Layout from '../components/Layout';
import PokemonCard from '../components/PokemonCard';
import useFindPokemon from '../hooks/find-pokemon';

const Pokemon: React.FC = () => {
  const {pokemon: pokemonName} = useParams();

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const pokemon = useFindPokemon(pokemonName);

  if (pokemon.isLoading) {
    return <p>Loading</p>;
  }
  return (
    <Layout>
      <div className="container mt-10 mx-auto px-6 md:px-0">
        {pokemon.data && (
          <div className="max-w-lg mx-auto space-y-6">
            <PokemonCard name={pokemon.data.name} showStats />
            <div
              role="button"
              className="block border-2 border-gray-300 shadow-lg hover:bg-gray-100 hover:text-gray-600 hover:border-gray-600 w-min p-2 rounded-xl  text-sm text-gray-400"
              onClick={goBack}
            >
              Back
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Pokemon;
