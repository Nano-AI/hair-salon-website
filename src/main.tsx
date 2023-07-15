import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import pages from './Data.tsx';
import './index.scss'
import Footer from './components/Footer.tsx';
// import "bootstrap/scss/bootstrap.scss";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        {pages.map((item) => {
          return (
            <Route path={item.href} element={item.component} key={item.name} />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
