import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import AppLayout from './Components/Layout/AppLayout';


import About from './pages/About';
import Contact from './pages/Contact';   
import Home from './pages/Home';
import Country from './pages/Country';
import ErrorPage from './pages/ErrorPage';

import './App.css'; // Importing App.CSS file

// route configuration 
const router=createBrowserRouter([
 {
  path:"/",
  element:<AppLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    { 
      path:"/",
      element:<Home/>,
     },
     { 
      path:"/about",
      element:<About/>,
     },
     { 
      path:"/country",
      element:<Country/>,
     },
     { 
      path:"contact",
      element:<Contact/>,
     }

    ]
  }
 
  
])

function App(){
    
  
  return(
        <>
        <RouterProvider router={router}></RouterProvider>
        </>
    )

}

export default App;