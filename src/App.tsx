import './App.css'
import { Outlet } from 'react-router-dom';
import NavbarMike from './components/NavbarMike';
import { ModalFooter } from 'react-bootstrap';
import FooterMike from './components/FooterMike';

function App() {
  return (    
    <>
      <NavbarMike/>
      <Outlet/>
      <FooterMike/>
    </>
  );
}

export default App;