import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">Home</NavLink>
        <NavLink className={css.link} to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
}

export default Navigation;