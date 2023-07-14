import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NavBar from './NavBar.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About.tsx';
import Home from './Home.tsx';
import './index.scss'
import Footer from './Footer.tsx';
// import "bootstrap/scss/bootstrap.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
