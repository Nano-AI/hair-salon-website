import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar.tsx'
import { Router, Route, createHashRouter, Routes, BrowserRouter } from 'react-router-dom';
import About from './About.tsx';
import Home from './Home.tsx';
import './index.scss'
import Footer from './Footer.tsx';
// import "bootstrap/scss/bootstrap.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/karina-salon/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
