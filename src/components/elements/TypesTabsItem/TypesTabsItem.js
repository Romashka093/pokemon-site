import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { colors } from 'utility/helpers/pokemon_type_colors';
import styles from './TypesTabsItem.module.scss';

const { tab } = styles;
const { type } = routes;

const TypesTabsItem = ({ name }) => {
  return (
    <li
      className={tab}
      style={{
        backgroundColor: `${colors[name]}`,
        boxShadow: `${colors[name]}88 8px 6px 16px`,
      }}
    >
      <Link to={`${type}/${name}`}>{name}</Link>
    </li>
  );
};

export default TypesTabsItem;
