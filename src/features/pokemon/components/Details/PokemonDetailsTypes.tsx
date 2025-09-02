import type { PokemonType } from '@features/pokemon/types/pokemonTypes';

type Props = {
  types: PokemonType[];
};

export default function PokemonDetailsTypes({ types }: Props) {
  return (
    <section>
      <h2>Types</h2>
      <ul className="types">
        {types.map((pokemonType) => (
          <li key={pokemonType.type.name}>{pokemonType.type.name}</li>
        ))}
      </ul>
    </section>
  );
}
