import { Link } from 'react-router-dom';
import { routes } from 'routes';
const { pokemon } = routes;
// PokemonListItem.module.scss

const PokemonListItem = ({ id, item }) => {
  const { name } = item;

  const getImgById = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <Link to={`${pokemon}/${id}`}>
      <li>
        <p>{name}</p>
        <img
          src={getImgById}
          alt={`photh of ${name} pokemon`}
          width="200"
          height="200"
        />
      </li>
    </Link>
  );
};

export default PokemonListItem;
