export type PokemonResponseResult = {
  name: string;
  url: string;
};

export type PokemonsResponse = {
  count: number;
  next: string | null;
  previous?: string | null;
  results: PokemonResponseResult[];
};

// Single Pokemon Types
export type PokemonResponse = {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: Stat[];
};

export type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
