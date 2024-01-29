import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import myRoutes from './routes/Route.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import AuthProvider from './providers/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <AuthProvider>
        <RouterProvider router={myRoutes} />
        <ToastContainer />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
