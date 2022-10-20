import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokemonOperations } from 'redux/pokemon';
import { namesOperations, namesSelector } from 'redux/pokemon_names';
import { routes } from '../../routes';
import styles from './Searcher.module.scss';

const { searcher, searcher_label, searcher_input, searcher_btn } = styles;

const { pokemon } = routes;

const Searcher = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonNames = useSelector(namesSelector.getNames);

  const [serchQuery, setSerchQuery] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    dispatch(namesOperations.fetchPokemonNames());
  }, [dispatch]);

  const handlerSerchButton = evt => {
    evt.preventDefault();
    dispatch(pokemonOperations.fetchPokemonItem(serchQuery));
    navigate(`${pokemon}/${serchQuery}`, { replace: true });
  };

  const handlerSerchInput = evt => {
    const { value } = evt.target;
    setSerchQuery(value);
    const findNames = pokemonNames.filter(elem => elem.includes(value));
    setNames(findNames);
  };

  return (
    <form onSubmit={handlerSerchButton} className={searcher}>
      <label htmlFor="pokemonChoice" className={searcher_label}>
        Search:
      </label>
      <input
        id="pokemonChoice"
        name="pokemonChoice"
        list="pokemonName"
        type="search"
        onChange={handlerSerchInput}
        value={serchQuery}
        className={searcher_input}
        placeholder="Pokemon name"
      />
      <button type="submit" className={searcher_btn}>
        Go
      </button>
      <datalist id="pokemonName">
        {names?.length > 0 &&
          names.map(name => <option key={name} value={name}></option>)}
      </datalist>
    </form>
  );
};

export default Searcher;
