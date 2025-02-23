import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , createRoutesFromElements , Route  , RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/about' element={<About/>} />
    {/* <Route path='/contact' element={<Contact/>} /> */}
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
