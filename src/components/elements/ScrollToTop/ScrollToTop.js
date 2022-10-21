import { useRef, useEffect, useCallback } from 'react';
import { handlerScrollToTop } from 'utility/helpers';
import { ReactComponent as Ball } from '../../../assets/icons/poké_ball_icon.svg';
import styles from './ScrollToTop.module.scss';

const { progress, progress_value } = styles;

const ScrollToTop = () => {
  const scrollProgress = useRef(null);
  const ballProgress = useRef(null);

  const calcScrollValue = useCallback(() => {
    let pos = document.documentElement.scrollTop;

    let calcHeight =
      window.document.documentElement.scrollHeight -
      window.document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);
    let degValue = scrollValue * 3.6;

    if (pos > 100) {
      scrollProgress.current.style.display = 'grid';
    } else {
      scrollProgress.current.style.display = 'none';
    }
    scrollProgress.current.style.background = `conic-gradient(#FF1C1C ${scrollValue}%, #d8d8d8 ${scrollValue}%)`;
    ballProgress.current.style.transform = `rotate(${degValue}deg)`;
  }, []);

  useEffect(() => {
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
  }, [calcScrollValue]);

  return (
    <div onClick={handlerScrollToTop} ref={scrollProgress} className={progress}>
      <span className={progress_value}>
        <Ball ref={ballProgress} />
      </span>
    </div>
  );
};

export default ScrollToTop;
