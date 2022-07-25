import React from 'react';

import {v4 as uuidv4} from 'uuid';
import PokemonCard from '../components/PokemonCard';
import {useApp} from '../state/AppState';

// lazy loading package
import {InView} from 'react-intersection-observer';
import Loader from '../components/Loader';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Home: React.FC = () => {
  const {pokemons, filteredPokemons} = useApp();

  if (pokemons.isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  console.log(filteredPokemons);

  return (
    <Layout>
      <Header />
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPokemons?.map((pokemon) => (
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
      </main>
    </Layout>
  );
};

export default Home;
