import React from 'react';
import styles from './WithModalWindow.module.scss';

const { window_overlay, modal_window, modal_window_content } = styles;

const withModalWindow = WrappedContent => {
  const child = props => {
    return (
      <div className={window_overlay}>
        <div className={modal_window}>
          <div className={modal_window_content}>{WrappedContent(props)}</div>
        </div>
      </div>
    );
  };
  return props => child(props);
};

export default withModalWindow;
