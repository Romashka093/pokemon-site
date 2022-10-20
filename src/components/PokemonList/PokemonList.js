import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonSelector, pokemonOperations } from 'redux/pokemon';
import { useLocalStorage } from 'utility/hooks';
import { getIdFromUrl } from 'utility/helpers';
import { PokemonListItem } from '../elements/PokemonListItem';
import { Pagination } from '../elements/Pagination';
import { useLocation, useParams } from 'react-router-dom';
import { routes } from 'routes';
import styles from './PokemonList.module.scss';

const { list } = styles;
const { type } = routes;
const perPage = 12;

const PokemonList = () => {
  let { pathname } = useLocation();
  let { name } = useParams();

  const dispatch = useDispatch();
  const pokemonList = useSelector(pokemonSelector.getPokemonList);

  const [startFrom, setStartFrom] = useLocalStorage('startFrom', 0);

  const totalPages = Math.ceil(pokemonList?.count / perPage);
  const pageIs = startFrom / perPage + 1;
  const isTypeRoute = `${type}/${name}` === pathname;

  useEffect(() => {
    !isTypeRoute &&
      dispatch(pokemonOperations.fetchPokemonList({ startFrom, perPage }));
  }, [dispatch, startFrom, isTypeRoute]);

  useEffect(() => {
    isTypeRoute && dispatch(pokemonOperations.fetchPokemonListByType(name));
  }, [dispatch, name, isTypeRoute]);

  const handlerPagination = evt => {
    const { name } = evt.target;
    if (pageIs === totalPages) {
      return;
    }
    if (pageIs < 1) {
      setStartFrom(0);
      return;
    } else
      name === 'next'
        ? setStartFrom(startFrom + perPage)
        : setStartFrom(startFrom - perPage);
  };

  return (
    <>
      {isTypeRoute ? (
        <ul className={list}>
          {pokemonList?.results?.length > 0 &&
            pokemonList?.results?.map(item => (
              <PokemonListItem
                key={getIdFromUrl(item.url)}
                id={getIdFromUrl(item.url)}
                item={item}
              />
            ))}
        </ul>
      ) : (
        <>
          <ul className={list}>
            {pokemonList?.results?.length > 0 &&
              pokemonList?.results?.map(item => (
                <PokemonListItem
                  key={getIdFromUrl(item.url)}
                  id={getIdFromUrl(item.url)}
                  item={item}
                />
              ))}
          </ul>
          <Pagination
            handlerPagination={handlerPagination}
            pageIs={pageIs}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
};

export default PokemonList;
