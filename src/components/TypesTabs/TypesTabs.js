import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typesSelector, typesOperations } from 'redux/pokemon_types';
import { getIdFromUrl } from 'utility/helpers';
import { TypesTabsItem } from 'components/elements/TypesTabsItem';
import styles from './TypesTabs.module.scss';

const { tabs } = styles;

const TypesTabs = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector(typesSelector.getTypes);

  useEffect(() => {
    dispatch(typesOperations.fetchPokemonTypes());
  }, [dispatch]);

  const types = allTypes?.results;
  return (
    <ul className={tabs}>
      {types?.length > 0 &&
        types.map(el => (
          <TypesTabsItem key={getIdFromUrl(el.url)} name={el.name} />
        ))}
    </ul>
  );
};

export default TypesTabs;
