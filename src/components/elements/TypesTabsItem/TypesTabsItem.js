import { Link } from 'react-router-dom';
import { routes } from 'routes';

// import styles from "./TypesTabsItem.module.scss";
// const {  } = styles;
const { type } = routes;

const TypesTabsItem = ({ name }) => {
  return (
    <li>
      <Link to={`${type}/${name}`}>{name}</Link>
    </li>
  );
};

export default TypesTabsItem;
