import NavbarMike from '../components/global/NavbarMike';
import ProvisoryNavigationBreadcrumb from '../components/global/ProvisoryNavigationBreadcrumb';
import { Outlet, /*useNavigate*/ } from 'react-router-dom';

//implementar a verificação de autenticação aqui
/*const useAuth = () => {
  const user = localStorage.getItem('user');
  return user !== null;
};*/

function AuthenticatedLayout() {
  {/*const navigate = useNavigate();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    navigate('/');
  }*/}

  return (
    <>
      <NavbarMike />
      <ProvisoryNavigationBreadcrumb />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthenticatedLayout;