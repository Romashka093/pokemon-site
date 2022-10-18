import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pocemonSelector, pocemonOperations } from 'redux/pocemon';
import useLocalStorage from 'utility/hooks/useLocalStorage';
import PokemonListItem from '../elements/PokemonListItem/PokemonListItem';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pocemonList = useSelector(pocemonSelector.getPocemonList);

  const [startFrom, setStartFrom] = useLocalStorage('startFrom', 0);
  const [perPage] = useState(12);
  const totalPages = Math.ceil(pocemonList?.count / perPage);
  const pageIs = startFrom / perPage + 1;

  useEffect(() => {
    dispatch(pocemonOperations.fetchPokemonList({ startFrom, perPage }));
  }, [dispatch, startFrom, perPage]);

  const handlerPagination = evt => {
    evt.preventDefault();
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
      <ul>
        {pocemonList?.results?.length > 0 &&
          pocemonList?.results?.map(item => {
            const urlArr = item.url.split('/');
            const pokemonID = urlArr[urlArr.length - 2];
            console.log('pokemonID :>> ', pokemonID);
            return (
              <PokemonListItem key={pokemonID} id={pokemonID} item={item} />
            );
          })}
      </ul>
      <div>{`You are on ${
        pageIs === 0 ? 1 : pageIs
      } page from ${totalPages}`}</div>
      <button onClick={handlerPagination} name="prev">
        PREV
      </button>
      <button onClick={handlerPagination} name="next">
        NEXT
      </button>
    </>
  );
};

export default PokemonList;
