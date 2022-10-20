import { Suspense, lazy } from 'react';

const LazyPokemonItem = lazy(() =>
  import(
    '../../components/elements/PokemonItem/PokemonItem' /* webpackChunkName: "PokemonItemPage" */
  ),
);

export const PokemonItemPage = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <LazyPokemonItem />
      </Suspense>
    </>
  );
};
