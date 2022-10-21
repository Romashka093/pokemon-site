import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'routes';
import { PokemonListPage } from 'pages/pokemonList/pokemonListPage';
import { PokemonItemPage } from 'pages/pokemonItem/PokemonItemPage';
import { Loader } from 'components/elements/Loader';

const LazyLayout = lazy(() =>
  import('../src/components/Layout/Layout' /* webpackChunkName: "Layout" */),
);

const { main, pokemon, type } = routes;

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={main} element={<LazyLayout />}>
            <Route index element={<PokemonListPage />} />
            <Route path={`${pokemon}/:id`} element={<PokemonItemPage />} />
            <Route path={`${type}/:name`} element={<PokemonListPage />} />
            <Route path="*" element={<Navigate to={main} replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
