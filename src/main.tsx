import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './About.tsx';
import Home from './Home.tsx';
import './index.scss'
import Footer from './Footer.tsx';
// import "bootstrap/scss/bootstrap.scss";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
