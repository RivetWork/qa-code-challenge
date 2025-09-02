import type { PokemonSpeciesFlavor } from '@features/pokemon/types/pokemonTypes';

type Props = {
  description: PokemonSpeciesFlavor['flavor_text'];
};

export default function PokemonDetailsDescription({ description }: Props) {
  if (description === '' || !description) {
    return <h2>Fix me!</h2>;
  }
  return (
    <section>
      <h2>Description</h2>
      <p>{description}</p>
    </section>
  );
}
