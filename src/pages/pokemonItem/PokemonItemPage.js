import { Loader } from 'components/elements/Loader';
import { Suspense, lazy } from 'react';

const LazyPokemonItem = lazy(() =>
  import(
    '../../components/elements/PokemonItem/PokemonItem' /* webpackChunkName: "PokemonItemPage" */
  ),
);

export const PokemonItemPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <LazyPokemonItem />
      </Suspense>
    </>
  );
};
