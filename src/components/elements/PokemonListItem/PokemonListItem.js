import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styles from './PokemonListItem.module.scss';

const { pokemonItem, pokemonItem_wrap, pokemonItem_title, pokemonItem_img } =
  styles;
const { pokemon } = routes;

const PokemonListItem = ({ id, item }) => {
  const { name } = item;

  const getImgById = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <li className={pokemonItem}>
      <Link to={`${pokemon}/${id}`} className={pokemonItem_wrap}>
        <p className={pokemonItem_title}>{name}</p>
        <img
          src={getImgById}
          alt={`photh of ${name} pokemon`}
          width="200"
          height="200"
          className={pokemonItem_img}
        />
      </Link>
    </li>
  );
};

export default PokemonListItem;
