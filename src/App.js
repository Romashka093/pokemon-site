import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from 'components/Layout';
import { PokemonList } from 'components/PokemonList';
import { PokemonItem } from 'components/elements/PokemonItem';

const { main, pokemon, type } = routes;

const App = () => {
  return (
    <>
      <Routes>
        <Route path={main} element={<Layout />}>
          <Route index element={<PokemonList />} />
          <Route path={`${pokemon}/:id`} element={<PokemonItem />} />
          <Route path={`${type}/:name`} element={<PokemonList />} />
          <Route path="*" element={<Navigate to={main} replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
