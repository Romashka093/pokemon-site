import { Loader } from 'components/elements/Loader';
import { Suspense, lazy } from 'react';

const LazyPokemonListPage = lazy(() =>
  import(
    '../../components/PokemonList/PokemonList' /* webpackChunkName: "PokemonListPage" */
  ),
);
export const PokemonListPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <LazyPokemonListPage />
      </Suspense>
    </>
  );
};
