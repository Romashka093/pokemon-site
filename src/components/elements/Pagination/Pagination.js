import styles from './Pagination.module.scss';
import { ReactComponent as Prev } from '../../../assets/icons/circle-left.svg';
import { ReactComponent as Next } from '../../../assets/icons/circle-right.svg';
import { handlerScrollToTop } from 'utility/helpers';

const { pagination, pagination_heading, pagination_item, pagination_item_btn } =
  styles;

const Pagination = ({ pageIs, totalPages, handlerPagination }) => {
  return (
    <ul className={pagination}>
      <li className={pagination_item}>
        <button
          className={pagination_item_btn}
          onClick={handlerPagination}
          name="prev"
          id="prev"
        >
          <Prev onClick={handlerScrollToTop} />
        </button>
      </li>
      <h6 className={pagination_heading}>
        {`page ${pageIs === 0 ? 1 : pageIs} of ${totalPages ? totalPages : 0}`}
      </h6>
      <li className={pagination_item}>
        <button
          className={pagination_item_btn}
          onClick={handlerPagination}
          name="next"
          id="next"
        >
          <Next onClick={handlerScrollToTop} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
