import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/Layout';
import PokemonListPage from '@features/pokemon/views/PokemonListPage';
import PokemonDetailPage from '@features/pokemon/views/PokemonDetailPage';
import SettingsPage from '@features/settings/views/SettingsPage';
import RouteError from '@components/RouteError';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <PokemonListPage /> },
      { path: 'pokemon/:name', element: <PokemonDetailPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
