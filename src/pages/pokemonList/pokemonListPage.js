import { Suspense, lazy } from 'react';

const LazyPokemonListPage = lazy(() =>
  import(
    '../../components/PokemonList/PokemonList' /* webpackChunkName: "PokemonListPage" */
  ),
);
export const PokemonListPage = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <LazyPokemonListPage />
      </Suspense>
    </>
  );
};
