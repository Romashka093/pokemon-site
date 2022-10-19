import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonSelector, pokemonOperations } from 'redux/pokemon';
import { namesOperations, namesSelector } from 'redux/pokemon_names';
// pokemonOperations

const Searcher = () => {
  const dispatch = useDispatch();
  const pokemonNames = useSelector(namesSelector.getNames);
  const totalPokemon = useSelector(pokemonSelector.getPokemonCount);

  const [serchQuery, setSerchQuery] = useState('');
  const [names, setNames] = useState([]);
  // console.log('names', names);

  useEffect(() => {
    dispatch(namesOperations.fetchPokemonNames(totalPokemon));
  }, [dispatch, totalPokemon]);

  const handlerSerchButton = evt => {
    evt.preventDefault();
    // TODO додати перехід на сторінку одного покемону
    dispatch(pokemonOperations.fetchPokemonItem(serchQuery));
  };

  const handlerSerchInput = evt => {
    const { value } = evt.target;
    setSerchQuery(value);
    const findNames = pokemonNames.filter(elem => elem.includes(value));
    setNames(findNames);
  };

  return (
    <form onSubmit={handlerSerchButton}>
      <label htmlFor="pokemonChoice"></label>
      <input
        id="pokemonChoice"
        name="pokemonChoice"
        list="pokemonName"
        type="search"
        onChange={handlerSerchInput}
        value={serchQuery}
      />
      <button type="submit">Go</button>
      <datalist id="pokemonName">
        {names?.length > 0 &&
          names.map(name => <option key={name} value={name}></option>)}
      </datalist>
    </form>
  );
};

export default Searcher;
// Searcher.module.scss
