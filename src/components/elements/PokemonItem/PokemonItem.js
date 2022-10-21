import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonOperations, pokemonSelector } from 'redux/pokemon';
import { colors } from 'utility/helpers/pokemon_type_colors';
import { TypesTabsItem } from '../TypesTabsItem';
import styles from './PokemonItem.module.scss';
import { Loader } from '../Loader';
import { routes } from 'routes';

const { main } = routes;
const {
  section,
  section_heading,
  section_picture,
  section_types,
  section_content,
  section_content_list,
  section_content_list_heading,
  section_content_list_item,
  section_content_list_item__stats,
  section_btn,
} = styles;

const PokemonItem = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(pokemonSelector.getPokemonItem);
  const isLoadData = useSelector(pokemonSelector.getLoading);

  const isTablet = useMediaQuery({ query: '(max-width: 1023px)' });
  const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(max-width: 1440px)' });

  useEffect(() => {
    dispatch(pokemonOperations.fetchPokemonItem(id));
  }, [dispatch, id]);

  const getValidItem =
    item?.sprites?.other?.dream_world?.front_default ||
    item?.sprites?.other?.home?.front_default ||
    item?.sprites?.front_default;

  const typesName = item?.types[0]?.type?.name;
  const itemTypes = item?.types;

  return (
    <>
      {isLoadData ? (
        <Loader />
      ) : (
        <section
          className={section}
          style={{
            backgroundColor: `${colors[typesName]}66`,
            boxShadow: `${colors[typesName]}88 8px 6px 16px`,
            borderColor: `${colors[typesName]}`,
          }}
        >
          <div className={section_picture}>
            {isLoadData ? (
              <Loader />
            ) : (
              <img
                src={getValidItem}
                alt={`${item?.name}`}
                width={isTablet ? 200 : isLaptop ? 340 : isDesktop ? 400 : 500}
                height={isTablet ? 200 : isLaptop ? 340 : isDesktop ? 400 : 500}
              />
            )}
          </div>
          <ul className={section_types}>
            {itemTypes?.length > 0 ? (
              itemTypes.map(elem => (
                <TypesTabsItem key={elem.slot} name={elem.type?.name} />
              ))
            ) : (
              <li>no types for Pokémon</li>
            )}
          </ul>
          <h2 className={section_heading}>{item?.name} Pokémon</h2>
          <div className={section_content}>
            <div>
              <h3 className={section_content_list_heading}>Stats</h3>
              <ul
                className={section_content_list}
                style={{
                  boxShadow: `${colors[typesName]}88 0px 0px 18px 6px inset`,
                }}
              >
                {item?.stats?.length > 0 ? (
                  item.stats.map(el => (
                    <li
                      key={el.stat.name}
                      className={section_content_list_item}
                    >
                      <div className={section_content_list_item__stats}>
                        <p>
                          {el.stat.name}: {el.base_stat}
                        </p>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className={section_content_list_item}>no stats</li>
                )}
              </ul>
            </div>
            <div>
              <h3 className={section_content_list_heading}>Moves</h3>
              <ul
                className={section_content_list}
                style={{
                  boxShadow: `${colors[typesName]}88 0px 0px 18px 6px inset`,
                }}
              >
                {item?.moves?.length > 0 ? (
                  item.moves.map(el => (
                    <li className={section_content_list_item} key={el.move.url}>
                      {el.move.name}
                    </li>
                  ))
                ) : (
                  <li className={section_content_list_item}>no moves</li>
                )}
              </ul>
            </div>
          </div>

          <button
            className={section_btn}
            style={{
              backgroundColor: `${colors[typesName]}`,
              boxShadow: `${colors[typesName]}88 8px 6px 16px`,
              borderColor: `${colors[typesName]}`,
            }}
          >
            <Link to={main}>Go home</Link>
          </button>
        </section>
      )}
    </>
  );
};

export default PokemonItem;
