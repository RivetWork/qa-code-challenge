import type { PokemonDetail } from '@features/pokemon/types/pokemonTypes';

type Props = {
  sprites: PokemonDetail['sprites'];
  name: string;
};

export default function PokemonDetailsHeader({ sprites, name }: Props) {
  const img = sprites.other?.['official-artwork']?.front_default ?? sprites.front_default;

  return (
    <header className="detail-header">
      {img && <img src={img} alt={name} width={200} height={200} />}
      <h1>{name.substring(0, 1).toUpperCase() + name.substring(1)}</h1>
    </header>
  );
}
