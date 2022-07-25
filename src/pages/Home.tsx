import React from 'react';

import {v4 as uuidv4} from 'uuid';
import {PokemonResponseResult} from '../types/api.types';
import PokemonCard from '../components/PokemonCard';
import {useApp} from '../state/AppState';

// lazy loading package
import {InView} from 'react-intersection-observer';

const Home: React.FC = () => {
  const {pokemons} = useApp();

  if (pokemons.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {pokemons.data?.results.map((pokemon: PokemonResponseResult) => (
          // lazy image loading
          <InView
            key={uuidv4()}
            rootMargin="200px 0px"
            threshold={0.3}
            triggerOnce={true}
          >
            {({inView, ref}) => {
              return inView ? (
                <PokemonCard key={uuidv4()} name={pokemon.name} />
              ) : (
                <div
                  ref={ref}
                  className="w-full h-56 bg-gray-100 rounded-lg "
                ></div>
              );
            }}
          </InView>
        ))}
      </div>
    </div>
  );
};

export default Home;
