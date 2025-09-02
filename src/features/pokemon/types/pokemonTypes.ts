export type NamedAPIResource = { name: string; url: string };

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
};

export type PokemonStat = {
  base_stat: number;
  stat: NamedAPIResource;
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type PokemonAbility = {
  is_hidden: boolean;
  ability: NamedAPIResource;
};

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      ['official-artwork']?: { front_default: string | null };
    };
  };
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
};

export type PokemonDetails = {
  flavor_text: string;
  language: { name: string };
};

export type PokemonSpecies = {
  flavor_text_entries: Array<PokemonDetails>;
  version: NamedAPIResource;
};
