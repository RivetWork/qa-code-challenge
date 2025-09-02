import type { PokemonStat } from '@features/pokemon/types/pokemonTypes';

type Props = {
  stats: PokemonStat[];
};

export default function PokemonDetailsStats({ stats }: Props) {
  return (
    <section>
      <h2>Base Stats</h2>
      <ul className="stats">
        {stats.map((pokemonStat) => (
          <li key={pokemonStat.stat.name}>
            <span>{pokemonStat.stat.name}</span>
            <progress
              max={200}
              value={pokemonStat.base_stat}
              aria-valuenow={pokemonStat.base_stat}
            />
            <span className="stat-val">{pokemonStat.base_stat}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
