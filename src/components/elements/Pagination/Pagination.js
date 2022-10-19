// import {} from 'react';
// import styles from "./Pagination.module.scss";
// const {  } = styles;

const Pagination = ({ pageIs, totalPages, handlerPagination }) => {
  //
  return (
    <ul>
      <h6>
        {`You are on ${pageIs === 0 ? 1 : pageIs} page from ${totalPages}`}
      </h6>
      <li>
        <button onClick={handlerPagination} name="prev">
          PREV
        </button>
      </li>
      <li>
        <button onClick={handlerPagination} name="next">
          NEXT
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
