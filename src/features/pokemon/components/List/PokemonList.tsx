import type { NamedAPIResource } from '../../types/pokemonTypes';
import { Link } from 'react-router-dom';

type Props = {
  items: NamedAPIResource[];
};

export default function PokemonList({ items }: Props) {
  return (
    <ul className="list">
      {items.map((pokemon) => (
        <li key={pokemon.name} className="list-item">
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            {pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
