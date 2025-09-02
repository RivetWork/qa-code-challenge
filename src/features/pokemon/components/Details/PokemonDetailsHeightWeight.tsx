import type { PokemonDetail } from '@features/pokemon/types/pokemonTypes';

const DENOMINATOR = 10;

type Props = {
  height: PokemonDetail['height'];
  weight: PokemonDetail['weight'];
};

export default function PokemonDetailsHeightWeight({ height, weight }: Props) {
  return (
    <section>
      <h2>Height & Weight</h2>
      <ul>
        <li>
          <strong>Height:</strong> {height / DENOMINATOR} m
        </li>
        <li>
          <strong>Weight:</strong> {weight / DENOMINATOR} kg
        </li>
      </ul>
    </section>
  );
}
