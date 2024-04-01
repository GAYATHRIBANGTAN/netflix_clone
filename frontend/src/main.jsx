import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from '/src/components/Login.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
    
      {
        path:"/Login",
        element:<Login/>
      }
     
    ]
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
