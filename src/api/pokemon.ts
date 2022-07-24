import {PokemonResponse, PokemonsResponse} from './../types/api.types';
import client from './client';

const getPokemons = async (): Promise<PokemonsResponse> =>
  await client.get('/pokemon').then((res) => res.data);

const getPokemon = async (name: string): Promise<PokemonResponse> =>
  await client.get(`/pokemon/${name}`).then((res) => res.data);

const pokemonApi = {
  getPokemons,
  getPokemon,
};

export default pokemonApi;
