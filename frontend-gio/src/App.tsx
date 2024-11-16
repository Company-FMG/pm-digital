import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { FormProvider } from './contexts/ComplaintFormContext';
import { ProfileProvider } from './contexts/ProfileContext';

export default function App() {
  return (    
    <>
     <BrowserRouter>
     <ProfileProvider>
     <FormProvider>
        <AppRoutes/>
      </FormProvider>
      </ProfileProvider>
     </BrowserRouter>
    </>
  );
}