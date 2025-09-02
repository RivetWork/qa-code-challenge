import { useGetPokemonListQuery } from "@api/pokeApi";
import PokemonList from "../components/List/PokemonList";
import { useSelector } from "react-redux";
import {
  selectPageSize,
  selectDensity,
} from "@features/settings/state/settingsSelectors";
import PageSizeInput from "@features/settings/components/PageSizeInput";
import { useState } from "react";

export default function PokemonListPage() {
  const [page, setPage] = useState(1);
  const pageSize = useSelector(selectPageSize);
  const density = useSelector(selectDensity);

  const { items, isLoading, isFetching, isError, error } =
    useGetPokemonListQuery(
      { limit: pageSize, offset: (page - 1) * pageSize },
      {
        selectFromResult: (result) => ({
          ...result,
          items: result.data?.results ?? [],
        }),
      }
    );

  if (isLoading) return <div className="skeleton">Loading Pokémon…</div>;
  if (isError) return <div role="alert">Error: {JSON.stringify(error)}</div>;
  if (!items.length) return <div>No Pokémon found.</div>;
  return (
    <div data-density={density}>
      <div className="toolbar">
        <div>
          <button
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page === 1}
            aria-label="Previous page"
          >
            Prev
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
        <div className="spacer" />
        <PageSizeInput />
      </div>
      {isFetching && (
        <div className="loading-indicator" role="status" aria-live="polite">
          <span className="spinner" aria-hidden="true" />
          <span>Loading Pokémon…</span>
        </div>
      )}
      <PokemonList items={items} />
    </div>
  );
}
