import { Logo } from 'components/elements/Logo';
import { Searcher } from '../Searcher';
import { TypesTabs } from '../TypesTabs';
import { Outlet, useNavigate } from 'react-router-dom';
import { routes } from 'routes';
import styles from './Layout.module.scss';

const { main } = routes;
const { header, header_heading, mainLayout, footer } = styles;

const Layout = () => {
  const navigate = useNavigate();

  const handlerGoHome = () => {
    navigate(main, { replace: true });
  };

  return (
    <>
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
      <footer className={footer}></footer>
    </>
  );
};

export default Layout;
