import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Loader } from '../Loader';
import styles from './PokemonListItem.module.scss';
import { useSelector } from 'react-redux';
import { pokemonSelector } from 'redux/pokemon';

const { pokemonItem, pokemonItem_wrap, pokemonItem_title } = styles;
const { pokemon } = routes;

const PokemonListItem = ({ id, item }) => {
  const { name } = item;
  const isLoadData = useSelector(pokemonSelector.getLoading);
  const getImgById = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <li className={pokemonItem}>
      <Link to={`${pokemon}/${id}`} className={pokemonItem_wrap}>
        <p className={pokemonItem_title}>{name}</p>
        {isLoadData ? (
          <Loader />
        ) : (
          <img
            loading="lazy"
            src={getImgById}
            alt={`photh of ${name} pokemon`}
            title={`photh of ${name} pokemon`}
            width="200"
            height="200"
          />
        )}
      </Link>
    </li>
  );
};

export default PokemonListItem;
