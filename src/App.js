// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { pocemonOperations } from 'redux/pocemon';
import { PokemonList } from 'components/PokemonList';

const App = () => {
  // const dispatch = useDispatch();
  // const startFrom = 0;
  // const perPage = 12;
  // useEffect(() => {
  //   dispatch(pocemonOperations.fetchPokemonList({ startFrom, perPage }));
  // }, [dispatch]);
  return (
    <>
      <div>Hi Pokémon!</div>
      <PokemonList />
    </>
  );
};

export default App;
