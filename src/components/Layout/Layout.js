import { Outlet, Link } from 'react-router-dom';
import { TypesTabs } from '../TypesTabs';
import styles from './Layout.module.scss';
import { Searcher } from '../Searcher';
import { routes } from 'routes';

const { main } = routes;
const { header, mainLayout, footer } = styles;

const Layout = () => {
  return (
    <>
      <header className={header}>
        <Link to={main}>
          <h1>Pokémon</h1>
        </Link>
        <Searcher />
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
