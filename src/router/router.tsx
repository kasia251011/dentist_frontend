import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../components/home';
import PatientsPage from '../components/patientsPage';
import SideNavBar from '../components/sideNavBar';
import PATH from './paths';
import PatientCard from '../components/patientsPage/patientCard';
import AddPatientCard from '../components/patientsPage/addPatientCard';
import TeethPage from '../components/teethPage';
import ToothDetails from '../components/teethPage/toothDetails';
import ToothDiagnosis from '../components/teethPage/toothDetails/toothDiagnosis';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
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
        element: <PatientsPage />,
        children: [
          {
            path: '/patients/:id',
            element: <PatientCard />
          },
          {
            path: '/patients/add',
            element: <AddPatientCard />
          }
        ]
      },
      {
        path: '/patients/:id/teeth',
        element: <TeethPage />,
        children: [
          {
            path: '/patients/:id/teeth/:toothNo',
            element: <ToothDetails />,
            children: [
              {
                path: '/patients/:id/teeth/:toothNo/:index',
                element: <ToothDiagnosis />
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
