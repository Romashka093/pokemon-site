import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.scss';
const { loader } = styles;

const Loader = () => {
  return (
    <div className={loader}>
      <RotatingLines
        strokeColor="#d8d8d8"
        strokeWidth="5"
        animationDuration="1.223"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default Loader;
