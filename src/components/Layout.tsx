import { Link, NavLink, Outlet } from 'react-router-dom';
import ThemeSelector from '@features/settings/components/ThemeSelector';

export default function Layout() {
  return (
    <div className="app" data-theme={{}}>
      <header className="header">
        <Link to="/" className="brand">
          Pokédex
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
        <div className="spacer" />
        <label className="theme-toggle">
          Theme:
          <ThemeSelector />
        </label>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
