import { withModalWindow } from '../../ui/ModalWindow';

const Modal = ({ item, handlerToggleModal }) => {
  return (
    <div>
      <button onClick={handlerToggleModal}>X</button>
      <h2>{item?.name}</h2>
      <div>
        <img src={item?.sprites?.other.dream_world.front_default} alt="" />
        <ul>
          <h3>Moves</h3>
          {item?.moves?.length > 0 &&
            item.moves.map(el => <li key={el.move.url}>{el.move.name}</li>)}
        </ul>
        <ul>
          <h4>stats</h4>
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

export default withModalWindow(Modal);
