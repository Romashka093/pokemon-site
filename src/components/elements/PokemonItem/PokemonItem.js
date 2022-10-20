import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonOperations, pokemonSelector } from 'redux/pokemon';

const PokemonItem = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(pokemonSelector.getPokemonItem);

  useEffect(() => {
    dispatch(pokemonOperations.fetchPokemonItem(id));
  }, [dispatch, id]);

  const getImgById = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <div>
      <h2>{item?.name}</h2>
      <div>
        <img src={getImgById} alt="" />
        <ul>
          <h3>Moves</h3>
          {item?.moves?.length > 0 &&
            item.moves.map(el => <li key={el.move.url}>{el.move.name}</li>)}
        </ul>
        <ul>
          <h4>Stats</h4>
          {item?.stats.length > 0 &&
            item.stats.map(el => (
              <li key={el.stat.name}>
                <div>
                  <h5>{el.base_stat}</h5>
                  <p>{el.stat.name}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonItem;
