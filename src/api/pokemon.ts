import {PokemonResponse, PokemonsResponse} from './../types/api.types';
import client from './client';

const getAllPokemons = async (): Promise<PokemonsResponse> =>
  await client.get('/pokemon?limit=2000').then((res) => res.data);

const getPokemon = async (name: string): Promise<PokemonResponse> =>
  await client.get(`/pokemon/${name}`).then((res) => res.data);

const pokemonApi = {
  getAllPokemons,
  getPokemon,
};

export default pokemonApi;
