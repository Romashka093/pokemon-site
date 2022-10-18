// import {} from 'react';
// PokemonListItem.module.scss

const PokemonListItem = ({ id, item }) => {
  const { name } = item;
  const getImgById = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  return (
    <>
      <li>
        <p>{name}</p>
        <img src={getImgById} alt={`photh of ${name} pokemon`} />

        {/* <a target="_blank" rel="noreferrer" href={url}>
          LINK
        </a> */}
      </li>
    </>
  );
};

export default PokemonListItem;
