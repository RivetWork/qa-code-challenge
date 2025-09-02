import type { PokemonAbility } from '@features/pokemon/types/pokemonTypes';

type Props = {
  abilities: PokemonAbility[];
};

export default function PokemonDetailsAbilities({ abilities }: Props) {
  return (
    <section>
      <h2>Abilities</h2>
      <ul className="abilities">
        {abilities.map((pokemonAbility) => (
          <li key={pokemonAbility.ability.name}>{pokemonAbility.ability.name}</li>
        ))}
      </ul>
    </section>
  );
}
