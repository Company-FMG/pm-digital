import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { FormProvider } from './contexts/ComplaintFormContext';

export default function App() {
  return (    
    <>
     <BrowserRouter>
     <FormProvider>
        <AppRoutes/>
      </FormProvider>
     </BrowserRouter>
    </>
  );
};