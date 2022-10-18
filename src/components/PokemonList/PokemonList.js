import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonSelector, pokemonOperations } from 'redux/pokemon';
import { useLocalStorage } from 'utility/hooks';
import { typesOperations, typesSelector } from 'redux/pokemon_types';
import { PokemonListItem } from '../elements/PokemonListItem';
import styles from './PokemonList.module.scss';

const { type } = styles;

const perPage = 12;

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(pokemonSelector.getPokemonList);
  const allTypes = useSelector(typesSelector.getTypes);

  const types = allTypes?.results;
  //   const [serchQuery, setSerchQuery] = useState('');

  const [startFrom, setStartFrom] = useLocalStorage('startFrom', 0);

  const totalPages = Math.ceil(pokemonList?.count / perPage);
  const pageIs = startFrom / perPage + 1;

  useEffect(() => {
    dispatch(typesOperations.fetchPokemonTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(pokemonOperations.fetchPokemonList({ startFrom, perPage }));
  }, [dispatch, startFrom]);

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

  //   const handlerSerchButton = evt => {
  //     evt.preventDefault();
  //     dispatch(pokemonOperations.fetchFoundPokemonList(serchQuery));
  //   };

  //   const handlerSerchInput = evt => {
  //     evt.preventDefault();
  //     const { value } = evt.target;
  //     setSerchQuery(value);
  //   };

  return (
    <>
      {/* <form action="" onSubmit={handlerSerchButton}>
        <input
          autoFocus
          type="search"
          onChange={handlerSerchInput}
          value={serchQuery}
        />
        <button type="submit">Go</button>
      </form> */}
      <ul className={type}>
        {types?.length > 0 &&
          types.map(el => {
            const urlArr = el.url.split('/');
            const id = urlArr[urlArr.length - 2];
            return <li key={id}>{el.name}</li>;
          })}
      </ul>
      <ul>
        {pokemonList?.results?.length > 0 &&
          pokemonList?.results?.map(item => {
            const urlArr = item.url.split('/');
            const pokemonID = urlArr[urlArr.length - 2];
            // console.log('pokemonID :>> ', pokemonID);
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
