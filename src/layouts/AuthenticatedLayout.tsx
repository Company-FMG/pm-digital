import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavbarMike from '../components/global/NavbarMike';
import ProvisoryNavigationBreadcrumb from '../components/global/ProvisoryNavigationBreadcrumb';

//implementar a verificação de autenticação aqui
const useAuth = () => {
  const token = localStorage.getItem('authToken');
  return !!token;
};

function AuthenticatedLayout() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

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