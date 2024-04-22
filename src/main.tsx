import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/Home.tsx'
import Ocorrencia from './routes/Ocorrencia.tsx'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "ocorrencia",
        element: <Ocorrencia/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
