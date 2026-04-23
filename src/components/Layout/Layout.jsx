import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </nav>
      </header>

      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
}