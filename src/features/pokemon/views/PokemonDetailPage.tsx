import { useGetPokemonByNameQuery } from "@api/pokeApi";
import PokemonDetailsHeader from "../components/Details/PokemonDetailsHeader";
import PokemonDetailsTypes from "../components/Details/PokemonDetailsTypes";
import PokemonDetailsAbilities from "../components/Details/PokemonDetailsAbilities";
import PokemonDetailsHeightWeight from "../components/Details/PokemonDetailsHeightWeight";
import PokemonDetailsStats from "../components/Details/PokemonDetailsStats";
import PokemonDetailsDescription from "../components/Details/PokemonDetailsDescription";

export default function PokemonDetailPage() {
  const {
    data: pokemon,
    isLoading,
    isError,
    error,
  } = useGetPokemonByNameQuery("Invalid Name");

  if (isLoading) return <div className="skeleton">Loading details…</div>;
  if (isError) return <div role="alert">Error: {JSON.stringify(error)}</div>;
  if (!pokemon) return <div role="alert">Pokémon not found.</div>;
  return (
    <article className="detail">
      <PokemonDetailsHeader sprites={pokemon.sprites} name={pokemon.name} />

      <PokemonDetailsDescription description="" />

      <section className="meta">
        <PokemonDetailsTypes types={pokemon.types} />
        <PokemonDetailsAbilities abilities={pokemon.abilities} />
        <PokemonDetailsHeightWeight
          height={pokemon.height}
          weight={pokemon.weight}
        />
      </section>

      <PokemonDetailsStats stats={pokemon.stats} />
    </article>
  );
}
