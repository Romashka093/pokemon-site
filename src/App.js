import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from 'components/Layout';

import { PokemonListPage } from 'pages/pokemonList/pokemonListPage';
import { PokemonItemPage } from 'pages/pokemonItem/PokemonItemPage';

const { main, pokemon, type } = routes;

const App = () => {
  return (
    <>
      <Routes>
        <Route path={main} element={<Layout />}>
          <Route index element={<PokemonListPage />} />
          <Route path={`${pokemon}/:id`} element={<PokemonItemPage />} />
          <Route path={`${type}/:name`} element={<PokemonListPage />} />
          <Route path="*" element={<Navigate to={main} replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
