import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../Modal';
import { pokemonOperations, pokemonSelector } from 'redux/pokemon';
import { useSelector } from 'react-redux';

// PokemonListItem.module.scss

const PokemonListItem = ({ id, item }) => {
  const { name } = item;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openedItem = useSelector(pokemonSelector.getPokemonItem);

  const getImgById = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const handlerToggleModal = evt => {
    evt.preventDefault();
    setIsModalOpen(!isModalOpen);
    dispatch(pokemonOperations.fetchPokemonItem(id));
  };
  return (
    <>
      <li onClick={handlerToggleModal}>
        <p>{name}</p>
        <img
          src={getImgById}
          alt={`photh of ${name} pokemon`}
          width="200"
          height="200"
        />
        {isModalOpen && (
          <Modal item={openedItem} handlerToggleModal={handlerToggleModal} />
        )}
        {/* <a target="_blank" rel="noreferrer" href={url}>
          LINK
        </a> */}
      </li>
    </>
  );
};

export default PokemonListItem;
