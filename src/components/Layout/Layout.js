import { useRef } from 'react';
import { Logo } from 'components/elements/Logo';
import { Searcher } from '../Searcher';
import { TypesTabs } from '../TypesTabs';
import { Outlet, useNavigate } from 'react-router-dom';
import { routes } from 'routes';
import { ScrollToTop } from 'components/elements/ScrollToTop';
import styles from './Layout.module.scss';

const { main } = routes;
const { header, header_heading, mainLayout, footer, footer_content } = styles;

const Layout = () => {
  const navigate = useNavigate();
  const footerRef = useRef();

  const handlerGoHome = () => {
    navigate(main, { replace: true });
  };
  const handleClickOnFooter = () => {
    footerRef.current.tagName === 'FOOTER' &&
      window.open('https://bit.ly/3grDpNP', '_blank');
  };
  return (
    <>
      <ScrollToTop />
      <header className={header}>
        <div className={header_heading}>
          <h1 onClick={handlerGoHome}>
            <Logo />
          </h1>
          <Searcher />
        </div>
        <nav>
          <TypesTabs />
        </nav>
      </header>
      <main className={mainLayout}>
        <Outlet />
      </main>
      <footer ref={footerRef} className={footer}>
        <p className={footer_content} onClick={handleClickOnFooter}>
          Ganna's test task | October 2022
        </p>
      </footer>
    </>
  );
};

export default Layout;
