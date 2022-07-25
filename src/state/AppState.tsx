import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import {useQuery, UseQueryResult} from 'react-query';
import {pokemonApi} from '../api';
import {PokemonResponseResult, PokemonsResponse} from '../types/api.types';

type AppContextProps = {
  pokemons: UseQueryResult<PokemonsResponse>;
  filteredPokemons: PokemonResponseResult[] | undefined;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

type AppStateProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useApp = () => useContext(AppContext);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pokemons = useQuery<PokemonsResponse>('all-pokemons', () => {
    return pokemonApi.getAllPokemons();
  });

  const filteredPokemons = useMemo(() => {
    if (searchQuery === '') {
      return pokemons.data?.results;
    }
    return pokemons.data?.results.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [pokemons, searchQuery]);

  return (
    <AppContext.Provider
      value={{pokemons, filteredPokemons, setSearchQuery, searchQuery}}
    >
      {children}
    </AppContext.Provider>
  );
};
