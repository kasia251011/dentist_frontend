import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../components/home';
import PatientsPage from '../components/patientsPage';
import SideNavBar from '../components/sideNavBar';
import PATH from './paths';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<>
        <SideNavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: PATH.HOME,
        element: <Home />
      },
      {
        path: PATH.PATIENTS,
        element: <PatientsPage />
      }
    ]
  }
]);

export default router;