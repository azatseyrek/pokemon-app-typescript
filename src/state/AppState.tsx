import React, {createContext, ReactNode, useContext} from 'react';
import {useQuery, UseQueryResult} from 'react-query';
import {pokemonApi} from '../api';
import {PokemonsResponse} from '../types/api.types';

type AppContextProps = {
  pokemons: UseQueryResult<PokemonsResponse>;
};

type AppStateProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useApp = () => useContext(AppContext);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const pokemons = useQuery<PokemonsResponse>('all-pokemons', () => {
    return pokemonApi.getAllPokemons();
  });

  return (
    <AppContext.Provider value={{pokemons}}>{children}</AppContext.Provider>
  );
};
